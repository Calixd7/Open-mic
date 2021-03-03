import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteMessage, updateMessage, getMessages } from '../../api'

function MessageList ({ token, messages, setMessages, messageId, setMessageId }) {
  const [triggerUseEffect, setTriggerUseEffect] = useState(false)
  const [read, setRead] = useState(false)
  const [message, setMessage] = useState([])
  const updateRead = {
    sender: message.sender,
    receiver: message.receiver,
    read: read
  }
  console.log('messages', messages.map(message => message.read))
  console.log('message', message)

  const handleDelete = () => {
    deleteMessage(token, message.id).then(res => res)
  }

  const handleRead = (id) => {
    updateMessage(token, id, updateRead)
      .then(setTriggerUseEffect(true))
    // .then(getMessages(token).then(messages => {
      //   setMessages(messages)
      // })
      // )
  }

  const toggleRead = (message) => {
    if (message.read === false) {
      setRead(true)
    }
    if (message.read === true) {
      setRead(false)
    }

    handleRead(message.id)
  }

  if (!messages) {
    return 'loading'
  }

  return (
    <aside className='hidden sm:block sm:flex-shrink-0 sm:order-first'>
      <div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100'>
        <div className='flex-shrink-0'>
          <div className='h-16 bg-white px-6 flex flex-col justify-center'>
            <div className='flex items-baseline space-x-3'>
              <h2 className='text-ls font-medium text-gray-900'>
                Inbox
              </h2>
            </div>
          </div>
          <div className='border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500'>
            OpenMic Connections
          </div>
        </div>
        <nav
          aria-label='Message list'
          className='min-h-0 flex-1 overflow-y-scroll'
        >
          {messages.map((message, idx) => (
            <ul
              key={`message-${idx}`}
              className='border-b border-gray-200 divide-y divide-gray-200'
              onClick={() => { setMessageId(message.id); toggleRead(message); setMessage(message) }}
            >
              <li className={`${message.read ? 'bg-white' : 'bg-blue-200 hover:bg-blue-300'} relative py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600`}>
                <div className='flex justify-between space-x-3'>
                  <div className='min-w-0 flex-1'>
                    <Link
                      to='#'
                      className='block focus:outline-none'
                    >
                      <span
                        className='absolute inset-0'
                        aria-hidden='true'
                      />
                      <p className='text-sm font-medium text-gray-900 truncate'>
                        {message.sender}
                      </p>
                      <p className='text-sm text-gray-500 truncate'>
                        {message.content}
                      </p>
                    </Link>
                  </div>
                  <div className='flex flex-col'>
                    <time
                      dateTime='2021-01-27T16:35'
                      className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500 pb-1'
                    >
                      {message.created_at}
                    </time>
                    <button
                      className='self-center z-0'
                      onClick={() => handleDelete(message.id)}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-auto h-6 pt-1 text-red-300 hover:text-red-500'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          ))}

        </nav>
      </div>
    </aside>
  )
}

export default MessageList
