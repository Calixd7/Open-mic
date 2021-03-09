import { useState, useEffect } from 'react'
import { useHistory, Link, useParams, Redirect } from 'react-router-dom'
import { getProfile } from '../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ViewCard = ({ token, isLoggedIn }) => {
  const history = useHistory()
  const { pk } = useParams()
  const [card, setCard] = useState(null)

  console.log('token', token)
  useEffect(() => {
    getProfile(token, pk).then(card => setCard(card))
  }, [token, pk])

  if (!token) {
    return <Redirect to='/login' />
  }

  if (!card) {
    return 'loading'
  }

  console.log('card in viewcard', card)

  return (
    <div>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg sm:px-10'>
        <div className='flex flex-col justify-between'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Additional Information
            </h3>
          </div>
          {card.vacancy === true &&
            <div className='px-4 py-5 w-screen flex-col'>
              <dt className='text-sm font-extrabold text-indigo-800'>
                We're Looking. . .
              </dt>
              <dd className='mt-1 w-full text-sm text-gray-900'>
                <ul className='border-4 border-yellow-200 bg-gray-700 rounded-md divide-y divide-gray-200 mr-16'>
                  <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                    <div className='w-0 flex-1 flex items-center'>
                      <div className=''>
                        <div className='ml-2 flex-auto text-white'>
                          <span>
                            Instruments:&nbsp;
                          </span>
                          {card.wantedinstruments.map((inst, idx) => (
                            <span
                              key={`wanted-${inst}`}
                              className='flex-col'
                            >
                              {`${idx ? ', ' : ''} ${inst}`}
                            </span>
                          ))}
                        </div>
                        <div className='ml-2 flex text-white'>
                          Info: {card.wanted_info}
                        </div>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='mr-4 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => history.push(`/message/${pk}`)}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' />
                      </svg>
                      Message
                    </button>
                  </li>
                </ul>
              </dd>
            </div>}
          <div className='text-right m-4'>
            <button
              type='button'
              className='mr-50 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => history.push('/explore')}
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-6 w-6'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>

          <dl className='grid grid-cols-1 sm:grid-cols-4'>
            <div>
              <span className='text-xs font-medium'>
                {card.image
                  ? <img
                      className='w-32 h-32 flex-shrink-0 bg-black rounded-full object-cover'
                      src={card.image}
                      alt='avatar'
                    />
                  : <span className='w-32 h-32 flex bg-black rounded-full object-cover'>
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className='text-red-300 hover:text-red-500 text-7xl h-auto w-auto mx-auto'
                    />
                    </span>}
              </span>
            </div>
            <div className='sm:col-auto'>
              <dt className='text-sm font-extrabold text-indigo-700'>
                {card.individualorband === 'Band'
                  ? 'Band Name'
                  : 'Name'}
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.name}
              </dd>
            </div>
            <div className='sm:col-auto ml-4'>
              <dt className='text-sm font-extrabold text-indigo-700'>
                Instruments
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.instruments.map(int => (
                  <p key={int}>{int}</p>
                ))}
              </dd>
            </div>

            <div className='sm:col-auto'>
              <dt className='text-sm font-extrabold text-indigo-700'>
                Website
              </dt>
              <dd
                className='mt-1 text-sm text-gray-900'
              >
                {/* <Link to={card.website}>{card.website}</Link> */}
                <a
                  className='text-blue-400'
                  href={card.website}
                >{card.website}
                </a>
              </dd>
            </div>

            <div className='sm:col-auto mt-4'>
              <iframe 
                src={card.spotify}
                width='240'
                height='180'
                frameBorder='0'
                allowtransparency='true'
                allow='encrypted-media'
              />
            </div>
            <div className='sm:col-auto'>
              <dt className='text-sm font-extrabold text-indigo-700'>
                Bio
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.bio}
              </dd>
            </div>

            <div className='sm:col-auto ml-4'>
              <dt className='text-sm font-extrabold text-indigo-700'>
                Genres
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.genres.map(genre => (
                  <p key={genre}>{genre}</p>
                ))}
              </dd>
            </div>
            <div className='sm:col-auto'>
              <dt className='text-sm font-extrabold text-indigo-700'>
                Location
              </dt>
              <dd className='mt-1 text-sm text-gray-900 flex'>
                <span>
                  {card.location},&nbsp;
                </span>
                <span>
                  {card.state}
                </span>
              </dd>
            </div>

          </dl>

        </div>

      </div>
    </div>
  )
}

export default ViewCard
