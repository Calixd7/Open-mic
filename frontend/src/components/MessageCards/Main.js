/* eslint-disable react/style-prop-object */
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Main ({ messages, messageId, setShowReplyMessage, messageToRender, setMessageToRender }) {
  console.log('messageToRender', messageToRender)

  useEffect(() => {
    const messageSearch = messages.map(message => message)
    console.log('messageSearch', messageSearch)

    messageSearch.forEach(message => {
      if (messageId === message.id) {
        setMessageToRender(message)
      }
    })
  }, [messageId])

  if (messageToRender) {
    return (
      <main className='min-w-0 w-screen flex-1 border-t border-gray-200 xl:flex'>
        <section
          aria-labelledby='message-heading'
          className='min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last'
        >
          {/* <!-- Top section --> */}
          <div className='flex-shrink-0 bg-white border-b border-gray-200'>
            {/* <!-- Toolbar--> */}
            <div className='h-16 flex flex-col justify-center'>
              <div className='px-4 sm:px-6 lg:px-8'>
                <div className='py-3 flex justify-between'>
                  {/* <!-- Left buttons --> */}

                </div>
              </div>
            </div>
            {/* <!-- Message header --> */}
          </div>
          <div>
            <div className='min-h-0 flex-1 overflow-y-auto'>
              <div className='bg-white pt-5 pb-6 shadow'>
                <div className='px-8 sm:flex sm:justify-between sm:items-baseline sm:px-14 lg:px-14'>
                  <div className='sm:w-0 sm:flex-1'>
                    <h1
                      id='message-heading'
                      className='text-lg font-medium text-gray-900'
                    >
                      Subject: {messageToRender.subject}
                    </h1>
                  </div>
                </div>

                <div className='mx-8 sm:mx-0 mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start'>
                  {/* <!-- Thread section--> */}
                  <ul className='py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8'>
                    <li className='bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6'>
                      <div className='sm:flex sm:justify-between sm:items-baseline'>
                        <h3 className='text-base font-medium'>
                          <span className='text-gray-900'>
                            From: {messageToRender.sender}
                          </span>
                        </h3>
                        <p className='mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3'>
                          <time dateTime='2021-01-28T19:24'>
                            {messageToRender.created_at}
                          </time>
                        </p>
                      </div>
                      <div className='mt-4 space-y-6 text-sm text-gray-800'>
                        <p>{messageToRender.content}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='text-right sm:text-center mr-10'>
                  <span className='relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3'>
                    <span className='inline-flex sm:shadow-sm'>
                      <button
                        type='button'
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => setShowReplyMessage(true)}
                      >
                        {/* <!-- Heroicon name: solid/reply --> */}
                        <svg
                          className='mr-2.5 h-5 w-5 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>
                          Reply
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
  return 'loading'
}

export default Main
