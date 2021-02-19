function IndividualProfileSetup () {
  return (
    <form className='space-y-8 divide-y divide-gray-200'>
      <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
        <div className='sm:col-span-4'>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <div className='mt-1 flex rounded-md shadow-sm'>
            <input type='text' name='username' id='username' autocomplete='username' className='flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300' />
          </div>
        </div>
      </div>

      <div className='sm:col-span-6'>
        <label htmlFor='about' class='block text-sm font-medium text-gray-700'>
          About
        </label>
        <div className='mt-1'>
          <textarea id='about' name='about' rows='3' className='shadow-sm focus:ring-indigo-300 focus:border-indigo-500 block-w-full sm:text-sm border-gray-300 rounded-md' />
        </div>

      </div>

      <div className='sm:col-span-6'>
        <label htmlFor='photo' class='block text-sm font-medium text-gray-700'>
          Photo
        </label>
        <div className='mt=1 flex items-center'>
          <span className='h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
            <svg className='h-full w-full text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 44 0 018 0z' />
            </svg>
          </span>
          <div class='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
            <div class='space-y-1 text-center'>
              <svg class='mx-auto h-12 w-12 text-gray-400' stroke='currentColor' fill='none' viewBox='0 0 48 48' aria-hidden='true'>
                <path d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
              </svg>
              <div class='flex text-sm text-gray-600'>
                <label htmlFor='file-upload' class='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                  <span>Upload a file</span>
                  <input id='file-upload' name='file-upload' type='file' class='sr-only' />
                </label>
                <p class='pl-1'>or drag and drop</p>
              </div>
              <p class='text-xs text-gray-500'>
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default IndividualProfileSetup
