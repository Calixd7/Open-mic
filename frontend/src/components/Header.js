import { Link } from 'react-router-dom'

const Header = ({ username, token, setToken }) => {
  const isLoggedIn = (username && token)
  return (
    <div>
      <div>OpenMic</div>
      <div>

        <div className='register-and-login'>
          {isLoggedIn
            ? (
              <span>Hello, {username} <button className='logout-button' onClick={() => setToken(null)}>Log out</button></span>
              )
            : (
              <span>
                <Link to='/login'><button className='log-button'>Login</button></Link> or <Link to='/register'><button className='reg-button'>Register</button></Link>
              </span>
              )}
        </div>
      </div>
    </div>
  )
}

export default Header
