import { Transition } from '@headlessui/react'
import { useState } from 'react'

const MessageHeader = () => {
  const [showHeaderOption, setShowHeaderOptions] = useState(false)
  return (
    <div className='bg-white pt-5 pb-6 shadow'>
      <div className='px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8'>
        <div className='sm:w-0 sm:flex-1'>
          <h1 id='message-heading' className='text-lg font-medium text-gray-900'>
            Re: New pricing for existing customers
          </h1>
          <p className='mt-1 text-sm text-gray-500 truncate'>
            joearmstrong@example.com
          </p>
        </div>

        <div className='mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start'>
          <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800'>
            Open
          </span>
          <div className='ml-3 relative inline-block text-left'>
            <div>
              <button
                type='button'
                className='-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600'
                id='menu-4'
                aria-expanded='false'
                aria-haspopup='true'
                onClick={() => setShowHeaderOptions(showHeaderOption => !showHeaderOption)}
              >
                <span className='sr-only'>Open options</span>
                {/* <!-- Heroicon name: solid/dots-vertical --> */}
                <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                </svg>
              </button>
            </div>

            {/* Dropdown menu, show/hide based on menu state. */}
            <Transition
              show={showHeaderOption}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveto='transform opacity-0 scale-95'
            >
              <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='menu-4'>
                <div className='py-1'>
                  <button type='button' className='w-full flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900' role='menuitem'>
                    <span>Copy email address</span>
                  </button>
                  <a href='#' className='flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900' role='menuitem'>
                    <span>Previous conversations</span>
                  </a>
                  <a href='#' className='flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900' role='menuitem'>
                    <span>View original</span>
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageHeader
