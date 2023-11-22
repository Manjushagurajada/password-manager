import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    userDetailsList: [],
    website: '',
    username: '',
    password: '',
    length: 0,
    searchInput: '',
    isToggle: false,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteUserDetails = id => {
    const {userDetailsList} = this.state
    const filteredUsers = userDetailsList.filter(eachUser => eachUser.id !== id)
    this.setState({userDetailsList: filteredUsers})
    this.setState(prevState => ({length: prevState.length - 1}))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitUserDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      username,
      password,
      isToggle: false,
    }
    this.setState(prevState => ({
      userDetailsList: [...prevState.userDetailsList, newUser],
      website: '',
      username: '',
      password: '',
      length: prevState.userDetailsList.length + 1,
    }))
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({
      userDetailsList: prevState.userDetailsList.map(eachUser => {
        return {...eachUser, isToggle: !eachUser.isToggle}
      }),
    }))
  }

  render() {
    const {userDetailsList, website, password, username, length, searchInput} =
      this.state
    const searchInputFilteredUsers = userDetailsList.filter(eachUser => {
      eachUser.website.toLowerCase().includes(searchInput.toLowerCase())
    })
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="details-card">
          <form className="form-element" onSubmit={this.onSubmitUserDetails}>
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="search-bar"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="logo"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="search-bar"
                onChange={this.onChangeName}
                value={username}
              />
            </div>
            <div className="input-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="search-bar"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <div className="button-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image"
          />
        </div>
        <div className="details-card-2">
          <div className="bottom-section-heading-bar">
            <div className="password-length">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="span-el">{length}</p>
            </div>
            <div className="input-container">
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="logo"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="search-bar-2"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="show-password-container">
            <input
              type="checkbox"
              className="checkbox"
              onClick={this.onToggleCheckbox}
              id="check-box"
            />
            <br />
            <label htmlFor="check-box" className="margin">
              Show Passwords
            </label>
          </div>
          {length === 0 ? (
            <ul className="alignment">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="image-2"
              />
              <p>No passwords</p>
            </ul>
          ) : (
            <ul className="unordered-list">
              {userDetailsList.map(eachItem => (
                <PasswordItem
                  userDetails={eachItem}
                  key={eachItem.id}
                  onDeleteUserDetails={this.onDeleteUserDetails}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
