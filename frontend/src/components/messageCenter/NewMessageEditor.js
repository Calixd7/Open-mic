import { useState, useEffect } from 'react'
import { sendMessage, getMessages } from '../../api'

const NewMessageEditor = ({ token, username, messageReceiverUser, setMessageReceiverUser, setShowAlert, setMessages }) => {
  const [newMessageContent, setNewMessageContent] = useState('')
  const [newMessageSubject, setNewMessageSubject] = useState('')

  console.log('messageReceiverUser', messageReceiverUser)

  const pendingNewMessage = {
    sender: username,
    receiver: messageReceiverUser,
    subject: newMessageSubject,
    content: newMessageContent
  }

  function handleSubmit (event) {
    event.preventDefault()
    sendMessage(token, pendingNewMessage)
      .then(message => {
        getMessages(token)
          .then(messages => {
            console.log('should include new message', messages)
            setMessages(messages)
            setMessageReceiverUser('')
            setShowAlert(true)
          })
      })
  }

  return (
    <div>
      <div className='flex justify-between'>
        <div className='min-w-0 flex-1'>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='about'
                className='form-label'
              >
                Message to: {messageReceiverUser}
              </label>
              <div>
                <label
                  className='form-label'
                  htmlFor='name'
                >
                  Subject:
                </label>
                <input
                  className='form-text-input'
                  type='text'
                  value={newMessageSubject}
                  onChange={e => setNewMessageSubject(e.target.value)}
                />
              </div>
              <label htmlFor='comment' className='sr-only'>About</label>
              <textarea
                id='comment'
                name='comment'
                rows='3'
                className='shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md'
                placeholder='New Message'
                value={newMessageContent}
                onChange={(e) => setNewMessageContent(e.target.value)}
              />
            </div>
            <div className='mt-3 flex items-center justify-between'>
              <button
                type='button'
                className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={() => setMessageReceiverUser('')}
              >
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-auto'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
                Cancel
              </button>
              <button
                type='submit'
                className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {/* <!-- Heroicon name: solid/reply --> */}
                <svg className='mr-2.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <path fillRule='evenodd' d='M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
                </svg>
                <span>Reply</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewMessageEditor
