import { Link } from 'react-router-dom'

const Header = ({ username, token, setToken, isLoggedIn }) => {
  return (
    <div>
      <div>OpenMic</div>
      <div>

        <div>
          {isLoggedIn
            ? (
              <span>Hello, {username}
                <button
                  onClick={() => setToken(null)}
                >
                  Sign out
                </button>
              </span>
              )
            : (
              <span>
                <Link to='/login'>
                  <button>Sign In</button>
                </Link> or <Link to='/register'><button>Register</button></Link>
              </span>
              )}
        </div>
      </div>
    </div>
  )
}

export default Header
