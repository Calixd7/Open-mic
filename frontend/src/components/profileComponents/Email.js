
const Email = ({ email, setEmail }) => {
  return (
    <div>
      <label
        htmlFor='user-email'
        className='form-label'
      >
        Email
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
          </svg>
        </div>
        <input
          type='email'
          name='email'
          id='email'
          className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md text-sm sm:text-lg border-gray-300 bg-gray-50 border pl-10'
          placeholder='you@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* <p className='mt-1 text-left text-sm text-gray-500 font-normal' id='email-description'>Allows us to notify you if someone messages you.</p> */}
    </div>
  )
}

export default Email
