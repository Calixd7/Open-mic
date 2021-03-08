import { Link, useHistory } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
import logo from './images/blue_instruments.jpg'
import { getUserProfile } from '../api'
import { updateReadMessageStatus } from './helperFunctions'
import Avatar from './Avatar'
import HeaderMobile from './HeaderMobile'
import Search from './Search'
import SearchMobile from './SearchMobile'
import UpdateUnreadMessageCount from './UpdateUnreadMessageCount'

function Header ({ username, token, setToken, isLoggedIn, pk, isImage, setIsImage, avatar, setAvatar, unreadStatus, setUnreadStatus, setMessageReceiverUser, setCards, status, setStatus, genre, setGenre, instrument, setInstrument, wantedInstrument, setWantedInstrument, location, setLocation, vacancy, setVacancy, setTriggerReadEffect, messages }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const history = useHistory()
  const [highlightExplore, setHighlightExplore] = useState(false)
  const [highlightFollowing, setHighlightFollowing] = useState(false)
  const [highlightMessages, setHighlightMessages] = useState(false)
  const [mobileDisplayPage, setMobileDisplayPage] = useState('')

  console.log('unreadStatus HEADER', unreadStatus)

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
          <div className='flex-1 flex items-center ml-10 sm:ml-0 justify-center sm:justify-start'>
            <div className='sm:hidden bg-red-500 py-1 px-2 mx-2 rounded-md'>
              {mobileDisplayPage}
            </div>
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
                  exact activeClassName='active'
                  to='/explore'
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${highlightExplore && 'bg-red-700'}`}
                  onClick={() => {
                    setHighlightExplore(true)
                    setHighlightFollowing(false)
                    setHighlightMessages(false)
                  }}
                >Explore
                </Link>
                <Link
                  exact activeClassName='active'
                  to='/following'
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${highlightFollowing && 'bg-red-700'}`}
                  onClick={() => {
                    setHighlightExplore(false)
                    setHighlightFollowing(true)
                    setHighlightMessages(false)
                  }}
                >Following
                </Link>
                <Link
                  exact activeClassName='active'
                  to='/message'
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${highlightMessages && 'bg-red-700'}`}
                  onClick={() => {
                    setMessageReceiverUser('')
                    setHighlightExplore(false)
                    setHighlightFollowing(false)
                    setHighlightMessages(true)
                  }}
                >
                  <UpdateUnreadMessageCount unreadStatus={unreadStatus} messages={messages} setUnreadStatus={setUnreadStatus} />
                </Link>
              </div>
            </div>
          </div>
          {/* profile dropdown */}
          <div className='ml-3 relative flex justify-between'>
            <button
              className='mr-8 text-white'
              onClick={() => setShowSearch(showSearch => !showSearch)}
            >
              {showSearch
                ? <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-4 h-8 w-8'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                : <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-4 h-6 w-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>}

            </button>
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
                      onClick={() => {
                        setToken(null)
                        setShowProfile(false)
                        setAvatar(false)
                        setUnreadStatus(0)
                        setHighlightExplore(false)
                        setHighlightFollowing(false)
                        setHighlightMessages(false)
                      }}
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

      {showSearch &&
        <>
          <div className='hidden lg:block'>
            <Search token={token} setCards={setCards} setShowSearch={setShowSearch} status={status} setStatus={setStatus} genre={genre} setGenre={setGenre} instrument={instrument} setInstrument={setInstrument} wantedInstrument={wantedInstrument} setWantedInstrument={setWantedInstrument} location={location} setLocation={setLocation} vacancy={vacancy} setVacancy={setVacancy} />
          </div>
          <div className='lg:hidden'>
            <SearchMobile token={token} setCards={setCards} showSearch={showSearch} setShowSearch={setShowSearch} status={status} setStatus={setStatus} genre={genre} setGenre={setGenre} instrument={instrument} setInstrument={setInstrument} wantedInstrument={wantedInstrument} setWantedInstrument={setWantedInstrument} location={location} setLocation={setLocation} vacancy={vacancy} setVacancy={setVacancy} />
          </div>
        </>}

      <div
        className='md:hidden'
        id='mobile-menu'
      >
        {showMenu &&
          <HeaderMobile showSearch={showSearch} setShowMenu={setShowMenu} setMobileDisplayPage={setMobileDisplayPage} />}
      </div>
    </nav>
  )
}

export default Header
