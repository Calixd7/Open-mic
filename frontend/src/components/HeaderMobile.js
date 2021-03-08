import { Link } from 'react-router-dom'

const HeaderMobile = ({ showSearch, setShowMenu, setMobileDisplayPage }) => {
  return (
    <div>
      <div className='px-2 pt-2 pb-3 space-y-1'>
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
      </div>
    </div>
  )
}

export default HeaderMobile
