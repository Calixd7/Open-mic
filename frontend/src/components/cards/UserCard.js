import { Link } from 'react-router-dom'
import Info from './Info'

function UserCard ({ cards }) {
  console.log('cards', cards.map((card) => card))

  return (
    <div>

      <ul
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {cards.map(card => (
          <li key={`card-${card.pk}`} className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-indigo-200'>
            <div className='flex-1 flex flex-col p-8'>
              <img
                className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full'
                src='/'
                alt='avatar'
              />
              <h3 className='mt-6 text-gray-900 text-sm font-medium'>{card.user}</h3>
              <dl className='mt-1 flex-grow flex flex-col justify-between' />
              <dt className='sr-only'>Solo Artist</dt>
              <dd className='text-gray-500 text-sm'>{card.bio}</dd>
              <dd className='text-gray-500 text-sm'>{card.bio}</dd>
            </div>
            <div>
              <div className='mt=px flex divide-x divide-gray-200'>
                <div className='w-0 flex-1 flex'>
                  <Link
                    to='#'
                    className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                  >
                    <svg
                      className='w-5 h-5 text-gray-400'
                      xmlns='http://wwww.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      {/* <path d='M2.003 5.884L10 9.88217.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8..118z' /> */}
                    </svg>
                    <span><Info card={card} /></span>
                    <span className='ml-3'>Message</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default UserCard
