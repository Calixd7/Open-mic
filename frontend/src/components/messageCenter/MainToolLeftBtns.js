import { Transition } from '@headlessui/react'
import { useState } from 'react'

const MainToolLeftBtns = ({ threadStatus, messagesLength }) => {
  const [showLeftBtns, setShowLeftBtns] = useState(false)

  // const sortMessages = () => {
  //   console.log('messages', messages)
  //   const sortedMessages = messages.slice().sort((a, b) => new Date(b.id) - new Date(a.id))
  //   console.log('sortedMessages', sortedMessages)
  //   setMessages(sortedMessages)
  // }

  return (
    <div>
      <span className='relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3 items-center'>
        <div className='block text-xl mr-2 '>
          {threadStatus}
        </div>
        {threadStatus !== 'New Message' &&
          <div className='block text-xl'>
            {messagesLength}
          </div>}
        {/* **** the following is hidden at large. See className on span **** */}
        <span className='inline-flex sm:shadow-sm hidden'>
          <button type='button' className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'>
            {/* <!-- Heroicon name: solid/reply --> */}
            <svg className='mr-2.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fillRule='evenodd' d='M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
            <span>Reply</span>
          </button>
          <button
            type='button'
            className='hidden sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'
            // onClick={() => sortMessages()}
          >
            {/* <!-- Heroicon name: solid/pencil --> */}
            <svg className='mr-2.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
            </svg>
            <span>Sort</span>
          </button>
          <button type='button' className='hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'>
            {/* <!-- Heroicon name: solid/user-add --> */}
            <svg className='mr-2.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z' />
            </svg>
            <span>Assign</span>
          </button>
        </span>
        {/* **** the following is hidden at large. See className on span **** */}
        <span className='hidden lg:flex space-x-3 lg:hidden'>
          <button type='button' className='hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'>
            {/* <!-- Heroicon name: solid/archive --> */}
            <svg className='mr-2.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path d='M4 3a2 2 0 100 4h12a2 2 0 100-4H4z' />
              <path fillRule='evenodd' d='M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z' clipRule='evenodd' />
            </svg>
            <span>Archive</span>
          </button>
          <button type='button' className='hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'>
            {/* <!-- Heroicon name: solid/folder-download --> */}
            <svg className='mr-2.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path d='M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z' />
              <path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 9v4m0 0l-2-2m2 2l2-2' />
            </svg>
            <span>Move</span>
          </button>
        </span>

        {/* **** This is hidden with a sm:hidden. Originally was a lg:hidden **** */}
        <span className='-ml-px relative block sm:shadow-sm hidden'>
          <div>
            <button
              type='button'
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3'
              id='menu-3'
              aria-expanded='false'
              aria-haspopup='true'
              onClick={() => setShowLeftBtns(showLeftBtns => !showLeftBtns)}
            >
              <span className='sr-only hidden'>More</span>
              <span className='hidden sm:inline'>More</span>
              {/* <!-- Heroicon name: solid/chevron-down --> */}
              <svg className='h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </button>
          </div>

          {/* Dropdown menu, show/hide based on menu state. */}
          <Transition
            show={showLeftBtns}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <div className='origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='menu-3'>
              <div className='py-1'>
                <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900' role='menuitem'>
                  Note
                </a>

                <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900' role='menuitem'>
                  Assign
                </a>

                <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900' role='menuitem'>
                  Archive
                </a>

                <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900' role='menuitem'>
                  Move
                </a>
              </div>
            </div>
          </Transition>
        </span>
      </span>
    </div>
  )
}

export default MainToolLeftBtns
