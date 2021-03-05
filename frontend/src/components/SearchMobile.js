import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'

function SearchMobile () {
  return (
    <div>
      <div className='px-2 pt-2 pb-3 space-y-1'>
        <Link
          to='/explore'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >ALL CAPS
        </Link>
        <Link
          to='/friends'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >Following
        </Link>
        <Link
          to='/message'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >Messages
        </Link>
      </div>
    </div>
  /* <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
        >
          Search
          {/* <!-- Heroicon name: solid/chevron-down --> */
  //       <svg
  //         className='-mr-1 ml-2 h-5 w-5'
  //         xmlns='http://www.w3.org/2000/svg'
  //         viewBox='0 0 20 20'
  //         fill='currentColor'
  //         aria-hidden='true'
  //       >
  //         <path
  //           fillRule='evenodd'
  //           d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
  //           clipRule='evenodd'
  //         />
  //       </svg>
  //     </button>
  //   </div>

  //   <Transition
  //   show={}
  //     enter='transition ease-out duration-100'
  //     enterFrom='transform opacity-0 scale-95'
  //     enterTo='transform opacity-100 scale-100'
  //     leave='transition ease-in duration-75'
  //     leaveFrom='transform opacity-100 scale-100'
  //     leaveTo='transform opacity-0 scale-95'
  //   >

  //     <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
  //       <div class='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
  //         <Link
  //           to='#'
  //           className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  //           role='menuitem'
  //         >
  //           Status
  //         </Link>
  //         <Link
  //           to='#'
  //           className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  //           role='menuitem'
  //         >
  //           Location
  //         </Link>
  //         <Link
  //           to='#'
  //           className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  //           role='menuitem'
  //         >
  //           Genre
  //         </Link>
  //         <Link
  //           to='#'
  //           className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  //           role='menuitem'
  //         >
  //           Instrument
  //         </Link>
  //         <Link
  //           to='#'
  //           className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  //           role='menuitem'
  //         >
  //           Bands Looking for Instrument
  //         </Link>
  //         <form
  //           method='POST'
  //           action='#'
  //         />
  //       </div>
  //     </div>
  //   </Transition>
  // </div> */}
  )
}

export default SearchMobile
