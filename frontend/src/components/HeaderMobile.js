import { Link, useHistory } from 'react-router-dom'

const HeaderMobile = () => {
  return (
    <div>
      <div className='px-2 pt-2 pb-3 space-y-1'>
        <Link
          to='/message'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >Messages
        </Link>
        <Link
          to='/friends'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >Friends
        </Link>
        <Link
          to='/explore'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >Explore
        </Link>
      </div>
    </div>
  )
}

export default HeaderMobile
