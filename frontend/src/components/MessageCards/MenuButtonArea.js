
function MenuButton () {
  return (
    <div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 lg:hidden'>
      <button
        type='button'
        className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
        aria-expanded='false'
      >
        <span
          className='sr-only'
        >
          Open main menu
        </span>
        <svg
          className='block h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
    </div>
  )
}

export default MenuButton
