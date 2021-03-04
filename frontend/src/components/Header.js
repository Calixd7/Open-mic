import { Link, useHistory } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
import logo from './images/logorough.jpg'
import { getUserProfile } from '../api'
import Avatar from './Avatar'
import HeaderMobile from './HeaderMobile'

function Header ({ username, token, setToken, isLoggedIn, pk, isImage, setIsImage, avatar, setAvatar, checkUnread, setCheckUnread }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const history = useHistory()

  console.log('checkUnread HEADER', checkUnread)

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          {/* mobile btn menu */}
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-centerp-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setShowMenu(showMenu => !showMenu)}
            >
              <span className='sr-only'>Open Main Menu</span>
              <svg
                className={`${showMenu ? 'hidden' : 'block-h-6'} w-6`}
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
                className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
                xlmns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center ml-10 sm:ml-0 justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex-items-center'>
              <img
                className='block h-12 w-auto rounded-md'
                src={logo}
                alt='OpenMic'
              />
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='/explore'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >Explore
                </Link>
                <Link
                  to='/friends'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >Friends
                </Link>
                <Link
                  to='/message'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  {checkUnread >= 1
                    ? `Messages (${checkUnread} unread)`
                    : 'Messages'}
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
                <Avatar image={avatar} />
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
                className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu'
              >
                <button
                // to='view-profile/'
                  className='block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100'
                  role='menuitem'
                  disabled={!isLoggedIn}
                  onClick={() => { history.push('/view-profile'); setShowProfile(false) }}
                >
                  Your Profile
                </button>
                {isLoggedIn
                  ? (
                    <Link
                      to='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      onClick={() => { setToken(null); setShowProfile(false); setAvatar(false); setCheckUnread(0) }}
                    >
                      Sign Out
                    </Link>
                    )
                  : (
                    <Link
                      to='/login'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      onClick={() => setShowProfile(false)}
                    >
                      Sign In
                    </Link>

                    )}
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <div
        className='sm:hidden'
        id='mobile-menu'
      >
        {showMenu &&
          <HeaderMobile />}
      </div>
    </nav>
  )
}

export default Header
