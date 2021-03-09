
const NarrowSidebar = ({ setNewMessage, setMessageReceiverName, setMessageReceiverUser, newMessageContent, setNewMessageContent, newMessageSubject, setNewMessageSubject, messageToRender, setMessageToRender, setThreadStatus, setShowSent }) => {
  return (
    <nav aria-label='Sidebar' className='hidden sm:block sm:flex-shrink-0 sm:bg-gray-800 sm:overflow-y-auto'>
      <div className='relative w-20 flex flex-col p-3 space-y-3'>
        <button
          className='bg-gray-900 text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
          onClick={() => {
            setNewMessage(false)
            setMessageToRender(null)
            setThreadStatus('Inbox')
            setShowSent(false)
          }}
        >
          <span className='sr-only'>Open</span>
          {/* <!-- Heroicon name: outline/inbox --> */}
          <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' />
          </svg>
        </button>

        <button
          className='text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
          onClick={() => {
            setNewMessage(true)
            setMessageReceiverName('')
            setMessageReceiverUser('')
            setNewMessageContent('')
            setNewMessageSubject('')
            setThreadStatus('New Message')
          }}
        >
          <span className='sr-only'>Drafts</span>
          {/* <!-- Heroicon name: outline/pencil-alt --> */}
          <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
          </svg>
        </button>

        <button
          className='text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
          onClick={() => {
            setThreadStatus('Sent Messages')
            setShowSent(true)
            setMessageToRender(null)
            setNewMessage(false)
            setMessageReceiverName('')
            setMessageReceiverUser('')
            setNewMessageContent('')
            setNewMessageSubject('')
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className=' h-6 w-6 text-gray-400'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
          </svg>
        </button>

      </div>
    </nav>
  )
}

export default NarrowSidebar
