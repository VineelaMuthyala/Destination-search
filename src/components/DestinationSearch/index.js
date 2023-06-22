import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <img
            className="search-image"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>
        <div>
          <ul className="list-container">
            {filteredList.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                destinationDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
