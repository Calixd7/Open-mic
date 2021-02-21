import { useState } from 'react'
import Login, { login } from '../api'

function SignIn () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSignin (event) {
    event.preventDefault()
    Login(username, password)
  }

  return (
    <div>
      <form
        className='mt-8 space-y-6'
        onSubmit={handleSignin}
        // action='#'
        // method='POST'
      >
        <input
          type='hidden'
          name='remember'
          value='true'
        />
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label
              htmlFor='username'
              className='sr-only'
            >
              Username
            </label>
            <input
              id='username'
              name='username'
              type='username'
              autoComplete='username'
              required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='username'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='sr-only'
            >
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                name='remember_me'
                type='checkbox'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <label
                htmlFor='remember_me'
                className='ml-2 block text-sm text-gray-900'
              >
                Remember Me
              </label>
            </div>
          </div>
          <div className='text-sm'>
            <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
              Forgot Your Password?
            </a>
          </div>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span
                className='absolute left-0 inset-y-0 flex items-center pl-3'
              >
                {/* <svg
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg> */}
              </span>
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
