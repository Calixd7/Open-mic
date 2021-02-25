import { Link, useHistory } from 'react-router-dom'
import {Transition} from '@headlessui/react'
import { useState } from 'react'
import logo from '../images/logorough.jpg'


function Header ({ username, token, setToken, isLoggedIn, pk }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const history = useHistory()


  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-centerp-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open Main Menu</span>
              <svg
                className='block-h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xlmns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                //   d='M6 18L18 656 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex-items-center'>
              <img
                className='block lg:hidden h-8 w-auto'
                src={logo} alt='OpenMic'
                alt='logo'
              />
              {/* <img
                className='hiden lg:block h-8 w-auto'
                src={logo}
                alt='logo'
              /> */}
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='#'
                  className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Dashboard
                </Link>
                <Link
                  to='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >Messages
                </Link>
                <Link
                  to='/connections'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >Connections
                </Link>
                <Link
                  to='/explore'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >Explore
                </Link>
              </div>
            </div>
          </div>
          {/* profile dropdown */}
          <div className='ml-3 relative'>
            <div>
              <button
                className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                id='user-menu'
                aria-haspopup='true'
                onClick={() => setShowProfile(showProfile => !showProfile)}
              >
                <span className='sr-only'>Open User Menu></span>
                <img
                  className='h-8 w-8 rounded full'
                  src='/'
                  alt='avatar'
                />
              </button>
            </div>
            <Transition
            show={showProfile}
            enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >

                <div
              className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='user-menu'
            >
              <div
                // to='view-profile/'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
                onClick={() => history.push(`view-profile/${pk}`)}
              >
                Your Profile
              </div>
              <Link
                to='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                Settings
              </Link>
              {/* <div>  */}
                {isLoggedIn 
                ? (                
                  <Link
                to='/'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                onClick={() => setToken(null)}
              >
                Sign Out
              </Link>
                )                
              :(
                <Link
                to='/login'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                Sign In
              </Link>
              
              )
                }
            </div>
            </Transition>
          </div>
        </div>
      </div>
      <div
        className='sm:hidden'
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link
            to='#'
            className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
          >Dashboard
          </Link>
          <Link
            to='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >Messages
          </Link>
          <Link
            to='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >Connections
          </Link>
          <Link
            to='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >Explore
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
