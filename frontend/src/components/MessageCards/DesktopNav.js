import { Link } from 'react-router-dom'

function desktopNav () {
  return (
    <div className='hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between'>
      <div className='min-w-0 flex-1'>
        <div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
          <label
            htmlFor='search'
            className='sr-only'
          >
            Search all inboxes
          </label>
          <input
            id='search'
            type='search'
            placeholder='Search all inboxes'
            className='block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0'
          />
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>

            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='ml-10 pr-4 flex-shrink-0 flex items-center space-x-10'>
        <nav
          aria-label='Global'
          className='flex space-x-10'
        >
          <div class='relative text-left'>
            <button
              type='button'
              class='flex items-center text-sm font-medium text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" id="menu-1" aria-expanded="false" aria-haspopup="true'
            >
              <span>
                Inboxes
              </span>
              <svg
                className='ml-1 h-5 w-5 text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd'

                />
              </svg>
            </button>

            <div
              className='origin-top-right absolute z-30 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-1'
            >
              <div className='py-1'>
                <Link
                  to='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
                  role='menuitem'
                >
                  Sales
                </Link>
                <Link
                  to='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
                  role='menuitem'
                >
                  Support
                </Link>
                <Link
                  to='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
                  role='menuitem'
                >
                  Internal
                </Link>
              </div>
            </div>
          </div>
          <Link
            to='#'
            className='text-sm font-medium text-gray-900'
          >
            Reporting
          </Link>
          <Link
            to='#'
            className='text-sm font-medium text-gray-900'
          >
            Settings
          </Link>
        </nav>
        <div className='flex items-center space-x-8'>
          <span className='inline-flex'>
            <Link
              to='#'
              class='-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>
                View notifications
              </span>

              <svg
                className='h-6 w-6'
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
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'

                />
              </svg>
            </Link>
          </span>

          <div className='relative inline-block text-left'>
            <button
              type='button'
              className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600'
              id='menu-2'
              aria-expanded='false'
              aria-haspopup='true'
            >
              <span className='sr-only'>
                Open user menu
              </span>
              <img
                className='h-8 w-8 rounded-full'
                src='/'
                alt=''

              />
            </button>

            <div
              className='origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-2'
            >
              <div class='py-1'>
                <Link
                  to='#'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
                  role='menuitem'
                >
                  Your Profile
                </Link>
                <Link
                  to='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
                  role='menuitem'
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default desktopNav
