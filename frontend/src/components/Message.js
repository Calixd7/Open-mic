
function Message () {
  return (
    <div>
      <section aria-labelledby='notes-title'>
        <div className='bg-white shadow sm:rounded-lg sm:overflow-hidden'>
          <div className='divide-y divide-gray-200'>
            <div className='px-4 py-5 sm:px-6'>
              <h2
                id='notes-title'
                className='text-lg font-medium text-gray-900'
              >
                Messages
              </h2>
            </div>
            <div className='px-4 py-6 sm:px-6'>
              <ul className='space-y-8'>
                <li>
                  <div className='flex space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src='/'
                        alt=''
                      />
                    </div>
                    <div>
                      <div className='text-sm'>
                        <a
                          href='#'
                          className='font-medium text-gray-900'
                        >
                          User1
                        </a>
                      </div>
                      <div className='mt-1 text-sm text-gray-700'>
                        <p>
                          Let's start rocking!
                        </p>
                      </div>
                      <div className='mt-2 text-sm space-x-2'>
                        <span className='text-gray-500 font-medium'>
                          4d ago
                        </span>
                        <span className='text-gray-500 font-medium'>&middot;</span>
                        <button
                          type='button'
                          className='text-gray-900 font-medium'
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className='flex space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        clasName='h-10 w-10 rounded-full'
                        src='/'
                        alt='avatar'
                      />
                    </div>
                    <div>
                      <div className='text-sm'>
                        <a
                          href='#'
                          className='font-medium text-gray-900'
                        >
                          User 2
                        </a>
                      </div>
                      <div className='mt-1 text-sm text-gray-700'>
                        <p>
                          Anytime!
                        </p>
                      </div>
                      <div className='mt-2 text-sm space-x-2'>
                        <span className='text-gray-500 font-medium'>
                          4d ago
                        </span>
                        <span className='text-gray-500 font-medium'>&middot;</span>
                        <button
                          type='button'
                          className='text-gray-900 font-medium'
                        >
                          Reply
                        </button>
                      </div>
                    </div>

                  </div>
                </li>
                <div>
                  <div>

                    {/* <ul>
                      <li>
                        <div className='flex space-x-3'>
                          <div className='flex-shrink-0'>
                            <img
                              className='h-10 w-10 rounded-full'
                              src='/'
                              alt=''
                            />
                          </div>
                          <div>
                            <div className='text-sm'>
                              <a
                                href='#'
                                className='font-medium text-gray-900'
                              >
                                User 3(?)
                              </a>
                            </div>
                            <div className='mt-1 text-sm text-gray-700'>
                              <p>
                                Rock and Roll!
                              </p>
                            </div>
                            <div className='mt-2 text-sm space-x-2'>
                              <span className='text-gray-500 font-medium'>
                                4d ago
                              </span>
                              <span className='text-gray-500 font-medium'>&middot;</span>
                              <button
                                type='button'
                                className='text-gray-900 font-medium'
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <div className='bg-gray-50 px-4 py-6 sm:px-6'>
                  <div className='flex space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src='/'
                        alt=''
                      />
                    </div> */}
                    <div className='min-w-0 flex-1'>
                      <form action='#'>
                        <div>
                          <label
                            for='comment' className='sr-only'
                          >
                            About
                          </label>
                          <textarea
                            id='comment'
                            name='comment'
                            rows='3'
                            className='shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md'
                            placeholder='Add a note'
                          />
                        </div>
                        <div className='mt-3 flex items-center justify-between'>
                          <a
                            href='#'
                            className='group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900'
                          >
                            <svg
                              className='flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                fillRule='evenodd'
                                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <span>
                              Some HTML is okay.
                            </span>
                          </a>
                          <button
                            type='submit'
                            className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                          >
                            Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Message
