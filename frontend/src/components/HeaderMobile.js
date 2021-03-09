import { Link } from 'react-router-dom'

const HeaderMobile = ({ showSearch, setShowMenu, setMobileDisplayPage, location, isLoggedIn, setShowProfile, setToken, setAvatar, history, setUnreadStatus }) => {
  return (
    <div>
      <div className='px-2 pt-2 pb-3 space-y-1 divide-y'>
        <span>
          <Link
            to='/explore'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => {
              setShowMenu(false)
              setMobileDisplayPage('Explore')
            }}
          >Explore
          </Link>
          <Link
            to='/following'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => {
              setShowMenu(false)
              setMobileDisplayPage('Following')
            }}
          >Following
          </Link>
          <Link
            to='/message'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => {
              setShowMenu(false)
              setMobileDisplayPage('Messages')
            }}
          >Messages
          </Link>
        </span>

        <div
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu'
        >
          <button
            className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md text-base font-medium'
            role='menuitem'
            disabled={!isLoggedIn}
            onClick={() => {
              history.push('/view-profile')
              setShowProfile(false)
              setShowMenu(false)
            }}
          >
            Your Profile
          </button>
          {isLoggedIn
            ? (
              <Link
                to='/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block my-2 rounded-md text-base font-medium'
                onClick={() => {
                  setToken(null)
                  setShowProfile(false)
                  setAvatar(false)
                  setUnreadStatus(0)
                  setShowMenu(false)
                }}
              >
                Sign Out
              </Link>
              )
            : (
              <Link
                to='/login'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => {
                  setShowProfile(false)
                  setShowMenu(false)
                }}
              >
                Sign In
              </Link>

              )}
        </div>

      </div>
    </div>
  )
}

export default HeaderMobile
