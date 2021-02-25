import { Link } from 'react-router-dom'
import Info from './Info'
import Follow from './Follow'
import Message from './Message'

function Card ({ cards, profile }) {
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
              <h3 className='mt-6 text-gray-900 text-sm font-medium'>{card.name}</h3>
              <dl className='mt-1 flex-grow flex flex-col justify-between' />
              <dt className='sr-only'>Solo Artist</dt>
              <dd className='text-gray-500 text-sm'>{card.genres}</dd>
              <span className='flex flex-1 border border-black border-solid '>
                {card.instruments.map(int => (

                  <dd key={int} className='text-gray-500 text-sm'>{int}</dd>
                ))}
              </span>
            </div>
            <div>
              <div className='mt=px flex divide-x divide-gray-200'>
                <div className='w-0 flex-1 flex'>
                  <Link
                    to='#'
                    className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                  >
                    <span className='w-full relative z-0 flex flex-col shadow-sm rounded-md'>

                      <button
                        type='button'
                        className='justify-center w-full inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >

                        <span><Info className={card} /></span>
                      </button>

                      <div className='relative z-0 inline-flex shadow-sm rounded-md'>
                        <button
                          type='button'
                          className='justify-center inline-flex flex-1 items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >

                          <span><Follow card={card} /></span>
                        </button>
                        <button
                          type='button'
                          className='justify-center inline-flex flex-1 items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >

                          <span><Message card={card} /></span>
                        </button>
                      </div>
                    </span>
                    {/* <span><Info card={card} /></span>
                    <span><Follow card={card} /></span>
                    <span className='ml-3'>Message</span> */}
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

export default Card