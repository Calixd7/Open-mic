import { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'
import { getProfile } from '../api'

const ViewCard = ({ token }) => {
  const history = useHistory()
  const { pk } = useParams()
  const [card, setCard] = useState(null)

  //   console.log('card in viewcard', card)
  console.log('token', token)
  useEffect(() => {
    getProfile(token, pk).then(card => setCard(card))
  }, [token, pk])

  console.log('card in viewcard', card)
  console.log('int map', card.instruments.map(int => int))
  //   const instruments = card.instruments.map(int => int)

  if (!card) {
    return 'loading'
  }

  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Additional Information
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Personal details and application.
          </p>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                {card.individualorband === 'Band'
                  ? 'Band Name'
                  : 'Name'}
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.name}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Instruments
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.instruments.map(int => (
                  <p key={int}>{int}</p>
                ))}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Genres
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.genres.map(genre => (
                  <p key={genre}>{genre}</p>
                ))}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Location
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.location}
              </dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>
                Bio
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.bio}
              </dd>
            </div>
            {card.vacancy === true &&
              <div className='sm:col-span-2'>
                <dt className='text-sm font-medium text-gray-500'>
                  We're Looking. . .
                </dt>
                <dd className='mt-1 text-sm text-gray-900'>
                  <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                    <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                      <div className='w-0 flex-1 flex items-center'>
                        {/* <!-- Heroicon name: solid/paper-clip --> */}
                        <svg className='flex-shrink-0 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                          <path fillRule='evenodd' d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z' clipRule='evenodd' />
                        </svg>
                        <span className='ml-2 flex-1 w-0 truncate'>
                          Enter
                        </span>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <Link to='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                          Download
                        </Link>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>}
          </dl>
        </div>
      </div>

      <div>
        <button onClick={() => history.push('/explore')}>
          Back
        </button>
      </div>
    </div>
  )
}

export default ViewCard
