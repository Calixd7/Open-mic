import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Info from './Info'
import Follow from './Follow'
import MessageBtn from './MessageBtn'
import ViewCard from '../ViewCard'

function Card ({ cards, profile }) {
  const history = useHistory()
  const [follow, setFollow] = useState(false)
  console.log('cards.pk in Cards.js', cards.map((card) => card.pk))

  const properStatus = (card) => {
    if (card.individualorband === 'Individual') {
      return 'Solo Artist'
    } else {
      return card.individualorband
    }
  }

  return (
    <div className='px-4'>

      <ul
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {cards.map(card => (
          <li key={`card-${card.pk}`} className={`${card.individualorband === 'Band' ? 'bg-gray-700' : 'bg-gray-700'} col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-indigo-200 ${card.vacancy === true ? 'border-8 border-solid border-green-500' : 'border-none'}`}>
            <div className='flex-1 flex flex-col p-8'>
              <img
                className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-cover'
                src={card.image}
                alt='avatar'
              />
              <h3 className='mt-6 text-white text-sm font-medium'>{properStatus(card)}</h3>
              <dl className='mt-1 flex-grow flex flex-col justify-between text-white'>{card.name}</dl>
              <dt className='sr-only'>card Name</dt>
              <dd className='text-white text-sm'>Genres: {card.genres}</dd>
              <dd className='text-white text-sm'>Location: {card.band_location}</dd>
            </div>
            <div>
              <div className='mt=px flex divide-x divide-gray-200'>
                <div className='w-0 flex-1 flex'>
                  <div
                    className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                  >
                    <span className='mx-2 w-full relative z-0 flex flex-col shadow-sm rounded-md'>

                      <button
                        type='button'
                        className='justify-center w-full inline-flex items-center px-2 py-1 mb-1 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 hover:text-white bg-indigo-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => history.push(`view-card/${card.pk}`)}
                      >
                        <span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-5 w-5'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg>
                        </span>
                        More Info
                      </button>

                      <div className='relative z-0 inline-flex shadow-sm rounded-md'>
                        <button
                          type='button'
                          className='justify-center inline-flex flex-1 items-center px-2 py-1 mr-1 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 hover:text-white bg-indigo-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          // onClick={() => history.push(`view-card/${card.pk}`)}
                          onClick={() => setFollow(follow => !follow)}
                        >
                          <span>
                            {follow
                              ? <svg className='ml-0.5 mr-2 h-4 w-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                              : <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
                                </svg>}

                          </span>
                          Follow
                        </button>
                        <button
                          type='button'
                          className='justify-center inline-flex flex-1 items-center px-2 py-1 ml-1 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 hover:text-white bg-indigo-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          onClick={() => history.push(`message/${card.pk}`)}
                        >
                          <span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' />
                            </svg>
                          </span>
                          Message
                        </button>
                      </div>
                    </span>
                  </div>
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
