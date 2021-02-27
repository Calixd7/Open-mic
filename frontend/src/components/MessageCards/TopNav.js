import { Link } from 'react-router-dom'

function topNav () {
  return (
    <div
      className='h-screen overflow-hidden bg-gray-100 flex flex-col'
    >
      <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
        <div className='absolute inset-y-0 left-0 lg:static lg:flex-shrink-0'>
          <Link
            to='#'
            className='flex items-center justify-center h-16 w-16 bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20'
          >
            <img
              className='h-8 w-aut'
              src='/'
              alt='Workflow'
            />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default topNav
