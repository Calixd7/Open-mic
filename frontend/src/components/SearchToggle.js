
function SearchToggle ({ setShowMenu, showMenu }) {
  return (
    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
      <button
        type='button'
        className='inline-flex items-center justify-centerp-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
        aria-controls='mobile-search-menu'
        aria-expanded='false'
        onClick={() => setShowMenu(showMenu => !showMenu)}
      >
        {/* <span className='sr-only'>Open Main Menu</span>
        <svg
          className={`${showMenu ? 'hidden' : 'block-h-6'} w-6`}
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
        <svg
          className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
          xlmns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg> */}
      </button>
    </div>
  )
}

export default SearchToggle
