
const PickerArea = () => {
  return (
    <div className='mx-auto lg:hidden'>
      <div className='relative'>
        <label htmlFor='inbox-select' className='sr-only'>Choose inbox</label>
        <select id='inbox-select' className='rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600'>
          <option value='/open'>Open</option>
          <option value='/archived'>Archived</option>
          <option value='/assigned'>Assigned</option>
          <option value='/flagged'>Flagged</option>
          <option value='/spam'>Spam</option>
          <option value='/drafts'>Drafts</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2'>
          {/* <!-- Heroicon name: solid/chevron-down --> */}
          <svg className='h-5 w-5 text-gray-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PickerArea
