import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Loading from '../Loading'
import ErrorImage from '../ErrorImage'
import VedioCard from '../VedioCard'

class VedioListItems extends Component {
  state = {
    searchInput: '',
    vedioList: [],
    status: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      this.setState({
        vedioList: fetchedData.videos,
        status: true,
      })
    } else {
      this.setState({
        status: false,
      })
    }
  }

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = () => {
    const {searchInput} = this.state
    this.getVideosList(searchInput)
  }

  onKey = event => {
    if (event.key.toLowerCase() === 'enter') {
      this.onSearch()
    }
  }

  render() {
    const {searchInput, vedioList, status, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {status ? (
              <>
                <div>
                  <input
                    placeholder="Search"
                    type="search"
                    value={searchInput}
                    onChange={this.onChange}
                    onKeyDown={this.onKey}
                  />
                  <button type="button" onClick={this.onSearch}>
                    <AiOutlineSearch />
                  </button>
                </div>
                <>
                  {vedioList.length === 0 ? (
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no videos"
                      />
                      <h1>No Search results found</h1>
                      <p>Try different keywords or remove search filter</p>
                      <button type="button">Retry</button>
                    </div>
                  ) : (
                    <div>
                      <ul>
                        {vedioList.map(vedio => (
                          <VedioCard vedioData={vedio} key={vedio.id} />
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              </>
            ) : (
              <ErrorImage refresh={this.getVideos} />
            )}
          </>
        )}
      </div>
    )
  }
}
export default VedioListItems
