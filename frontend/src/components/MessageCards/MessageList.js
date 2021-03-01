import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

function MessageList ({ token, messages, setMessageId }) {
  const { pk } = useParams()
  console.log('messages', messages.map(message => message.id))

  return (
    <aside className='hidden xl:block xl:flex-shrink-0 xl:order-first'>
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
            Sorted by date
          </div>
        </div>
        <nav
          aria-label='Message list'
          className='min-h-0 flex-1 overflow-y-auto'
        >
          {messages.map((message, idx) => (
            <ul
              key={`message-${idx}`}
              className='border-b border-gray-200 divide-y divide-gray-200'
              onClick={() => setMessageId(message.id)}
            >
              <li className='relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600'>
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
                  <time
                    dateTime='2021-01-27T16:35'
                    className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'
                  >
                    {message.created_at}
                  </time>
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
