
const Site = ({ site, setSite }) => {
  return (
    <div>
      <label
        htmlFor='user-site'
        className='form-label'
      >
        Site
      </label>
      <div className='mt-1 flex rounded-md shadow-sm'>
        <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm sm:text-large'>
          http://
        </span>
        <input
          type='text'
          name='user-site'
          id='user-site'
          className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md text-sm sm:text-lg border-gray-300 bg-gray-50 border pl-2'
          placeholder='www.example.com'
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
      </div>
      <p className='mt-1 text-left text-sm text-gray-500 font-normal' id='email-description'>Let others know where to find your music.</p>
    </div>
  )
}

export default Site
