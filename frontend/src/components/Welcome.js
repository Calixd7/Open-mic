import { Link, Redirect } from 'react-router-dom'

function Welcome ({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Redirect to='/explore' />
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img className='mx-auto h-12 w-auto' src='' alt='OpenMic' />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Welcome to OpenMic!
          </h2>
        </div>
        <div>
          <Link to='/login'>
            <button
              type='button'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              Sign In
            </button>
          </Link>
        </div>
        <div>
          <div>
            <Link to='/registration/user'>

              <button
                type='button'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span
                  className='absolute left-0 inset-y-0 flex items-center pl-3'
                >
                  <svg
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Register as Solo Artist
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to='/registration/band'>
              <button
                type='button'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span
                  className='absolute left-0 inset-y-0 flex items-center pl-3'
                >
                  <svg
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Register as Band
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
