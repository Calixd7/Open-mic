/* eslint-disable react/style-prop-object */
import { Link } from 'react-router-dom'

function Main ({ messages }) {
  return (
    <main className='min-w-0 flex-1 border-t border-gray-200 xl:flex'>
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
                <div>
                  <span className='relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3'>
                    <span className='inline-flex sm:shadow-sm'>
                      <button
                        type='button'
                        className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'
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

                {/* <!-- Right buttons --> */}
                <nav aria-label='Pagination'>
                  <span
                    className='relative z-0 inline-flex shadow-sm rounded-md'
                  >
                    <Link
                      to='#'
                      className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'
                    >
                      <span className='sr-only'>
                        Next
                      </span>
                      {/* <!-- Heroicon name: solid/chevron-up --> */}
                      <svg
                        className='h-5 w-5"'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Link>
                    <Link
                      to='#'
                      className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600'
                    >
                      <span className='sr-only'>
                        Previous
                      </span>
                      {/* <!-- Heroicon name: solid/chevron-down --> */}
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Link>
                  </span>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- Message header --> */}
        </div>
        {messages.map(message => (
          <div key={`message-${message.subject}`}>
            <div className='min-h-0 flex-1 overflow-y-auto'>
              <div className='bg-white pt-5 pb-6 shadow'>
                <div className='px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8'>
                  <div className='sm:w-0 sm:flex-1'>
                    <h1
                      id='message-heading'
                      className='text-lg font-medium text-gray-900'
                    >
                      {message.subject}
                    </h1>
                  </div>
                </div>

                <div className='mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start'>
                  {/* <!-- Thread section--> */}
                  <ul className='py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8'>
                    <li className='bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6'>
                      <div className='sm:flex sm:justify-between sm:items-baseline'>
                        <h3 className='text-base font-medium'>
                          <span className='text-gray-900'>
                            {message.sender}
                            <span className='text-gray-600'>
                              wrote
                            </span>
                          </span>
                        </h3>
                        <p className='mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3'>
                          <time dateTime='2021-01-28T19:24'>
                            {message.created_at}
                          </time>
                        </p>
                      </div>
                      <div className='mt-4 space-y-6 text-sm text-gray-800'>
                        <p>{message.content}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* <!-- Message list--> */}
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
              <ul key={`message-${idx}`} className='border-b border-gray-200 divide-y divide-gray-200'>
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
    </main>
  )
}

export default Main
