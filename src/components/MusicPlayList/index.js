import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import PlayListItem from '../PlayListItem'
import './index.css'

class MusicPlayList extends Component {
  constructor(props) {
    super(props)
    this.state = {itemsList: props.initialTracksList, searchInput: ''}
  }

  deleteTrackItem = id => {
    const {itemsList} = this.state

    this.setState({itemsList: itemsList.filter(each => each.id !== id)})
  }

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.searchedPlaylist)
  }

  render() {
    const {itemsList, searchInput} = this.state
    const searchResults = itemsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="playlist-bg-container">
        <div className="singer-profile-container">
          <h1>Ed Sheeran</h1>
          <p className="singer">Singer</p>
        </div>
        <div className="songs-input-heading-container">
          <h1 className="playlist-heading">Songs Playlist</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onchangeSearchInput}
            />
            <AiOutlineSearch />
          </div>
        </div>
        <ul className="playlist-container">
          {searchResults.length > 0 ? (
            searchResults.map(each => (
              <PlayListItem
                each={each}
                key={each.id}
                deleteTrack={this.deleteTrackItem}
              />
            ))
          ) : (
            <div className="no-results-container">
              <p className="no-songs">No Songs Found</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default MusicPlayList
