import { Transition } from '@headlessui/react'
import logo from '../images/blue_instruments.jpg'

const MobileMessageMenu = ({ setShowOffCanvasMenu, showOffCanvasMenu, setNewMessage, setMessageReceiverName, setMessageReceiverUser, newMessageContent, setNewMessageContent, newMessageSubject, setNewMessageSubject, messageToRender, setMessageToRender, setThreadStatus, setShowSent }) => {
  return (
    <div className='fixed inset-0 z-40'>

      {/* Off-canvas menu overlay, show/hide based on off-canvas menu state. */}
      <Transition
        show={showOffCanvasMenu}
        enter='transition-opacity ease-linear duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity ease-linear duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='hidden sm:block sm:fixed sm:inset-0 lg:hidden' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-600 opacity-75' />
        </div>
      </Transition>

      {/* Mobile menu, toggle classes based on menu state. */}
      <Transition
        show={showOffCanvasMenu}
        enter='transition ease-out duration-150 sm:ease-in-out sm:duration-300'
        enterFrom='transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100'
        enterTo='transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100'
        leave='transition ease-in duration-150 sm:ease-in-out sm:duration-300'
        leaveFrom='transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100'
        leaveTo='transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100'
      >
        <nav className='fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg lg:hidden' aria-label='Global'>
          <div className='h-16 flex items-center justify-between px-4 sm:px-6'>
            <a href='#'>
              <img className='block h-8 w-auto' src={logo} alt='Workflow' />
            </a>
            <button
              type='button'
              className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
              aria-expanded='false'
              onClick={() => setShowOffCanvasMenu(false)}
            >
              <span className='sr-only'>Open main menu</span>
              {/* <!-- Heroicon name: outline/x --> */}
              <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='mt-2 max-w-8xl mx-auto px-4 sm:px-6'>
            <div className='relative text-gray-400 focus-within:text-gray-500'>
              <label htmlFor='search' className='sr-only'>Search messages</label>
              <input id='search' type='search' placeholder='Search messages' className='block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600' />
              <div className='absolute inset-y-0 left-0 flex items-center justify-center pl-3'>
                {/* <!-- Heroicon name: solid/search --> */}
                <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                </svg>
              </div>
            </div>
          </div>
          <div className='max-w-8xl mx-auto py-3 px-2 sm:px-4'>
            <button
              className='block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100'
              onClick={() => {
                setNewMessage(false)
                setMessageToRender(null)
                setThreadStatus('Inbox')
                setShowSent(false)
                setMessageReceiverName('')
                setMessageReceiverUser('')
                setNewMessageContent('')
                setNewMessageSubject('')
                setShowOffCanvasMenu(false)
              }}
            >
              Inboxes
            </button>

            <button
              className='block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100'
              onClick={() => {
                setNewMessage(true)
                setMessageReceiverName('')
                setMessageReceiverUser('')
                setNewMessageContent('')
                setNewMessageSubject('')
                setThreadStatus('New Message')
                setMessageToRender(null)
                setShowOffCanvasMenu(false)
              }}
            >
              New Message
            </button>

            <button
              className='block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100'
              onClick={() => {
                setThreadStatus('Sent Messages')
                setShowSent(true)
                setMessageToRender(null)
                setNewMessage(false)
                setShowOffCanvasMenu(false)
              }}
            >
              Sent Messages
            </button>

          </div>
        </nav>
      </Transition>
    </div>
  )
}

export default MobileMessageMenu
