import './index.css'

const PasswordItem = props => {
  const {userDetails, onDeleteUserDetails} = props
  const {username, website, password, id, isToggle} = userDetails
  const initial = username[0]

  const onDelete = () => {
    onDeleteUserDetails(id)
  }
  return (
    <li className="list-item">
      <h1 className="initial-styling">{initial}</h1>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {isToggle ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        type="button"
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
