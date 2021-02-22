
const BandSite = () => {
  return (
    <div>
      <label
        htmlFor='company_website'
        className='form-label'
      >
        Does your band have a website?
      </label>
      <div className='mt-1 flex rounded-md shadow-sm'>
        <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm sm:text-large'>
          http://
        </span>
        <input
          type='text'
          name='company_website'
          id='company_website'
          className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md text-sm sm:text-lg border-gray-300 bg-gray-50 border pl-2'
          placeholder='www.example.com'
        />
      </div>
    </div>
  )
}

export default BandSite
