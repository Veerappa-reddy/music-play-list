import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayListItem = props => {
  const {each, deleteTrack} = props
  const {imageUrl, name, genre, duration, id} = each

  const deleteItem = () => {
    deleteTrack(id)
  }

  return (
    <li className="music-item-container">
      <div className="item-img-container">
        <img src={imageUrl} alt="track" className="item-img" />
        <div className="song-genre-container">
          <p>{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={deleteItem}
        >
          <AiOutlineDelete size={20} color="#fff" />
        </button>
      </div>
    </li>
  )
}

export default PlayListItem
