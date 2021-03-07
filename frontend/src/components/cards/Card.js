import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import Info from './Info'
import FollowBtn from './FollowBtn'
import MessageBtn from './MessageBtn'
import ViewCard from '../ViewCard'
import logo from '../images/logorough.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card ({ token, cards, setCards, setMessageReceiverUser, connections, setConnections }) {
  const history = useHistory()
  const [follow, setFollow] = useState(false)
  // console.log('cards.pk in Cards.js', cards.map((card) => card.pk))

  const properStatus = (card) => {
    if (card.user === 'adminsupport') {
      return 'Admin Support'
    } else if (card.individualorband === 'Individual') {
      return 'Solo Artist'
    } else {
      return card.individualorband
    }
  }
  console.log('cards', cards)
  // const identifyConnections = () => {
  //   const connectionCards = []
  //   cards.map(card => {
  //     if (card.user.includes(connections)) {
  //       connectionCards.push(card)
  //     }
  //     console.log('connectionCards', connectionCards)
  //   })
  // }
  // identifyConnections()

  return (
    <div className='px-4'>

      <ul
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {cards.map(card => (
          <li key={`card-${card.pk}`} className={`${card.individualorband === 'Band' ? 'bg-gray-700' : 'bg-gray-700'} col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-indigo-200 ${card.vacancy === true ? 'border-8 border-solid border-yellow-200' : 'border-none'}`}>

            <div className='flex justify-between items-center'>
              <h3 className='ml-4 my-2 text-indigo-300 text-md font-medium'>{card.name}</h3>
            </div>

            <div className='flex-1 flex flex-col p-8'>
              {card.image
                ? <img
                    className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-cover'
                    src={card.image}
                    alt='avatar'
                  />
                : <span className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-cover'>
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className='text-red-300 hover:text-red-500 text-7xl h-full w-auto'
                  />
                  </span>}
              <span className='flex flex-col flex-1 justify-evenly'>
                <h3 className={`${card.user === 'adminsupport' ? 'text-red-400 font-bold mt-4 mb-2' : 'mt-4 mb-2 text-white text-md font-normal'}`}>{properStatus(card)}</h3>
                {card.vacancy === true
                  ? <dl className='text-white font-bold text-yellow-200 text-sm mr-2 my-2'>Looking for
                    {card.wanted_instruments.map((wantedInst, idx) => (
                      <span key={`wanted-${wantedInst}-${idx}`}>{`${idx ? ', ' : ''} ${wantedInst}`}</span>
                    ))}
                  </dl>
                  : <dl className='text-white text-white text-sm mr-2 my-2'><strong>Instruments:</strong>
                    {card.instruments.map((inst, idx) => (
                      <span key={`${inst}-${idx}`}>{`${idx ? ', ' : ''} ${inst}`}</span>
                    ))}
                  </dl>}
                {/* <dl className='my-2 flex-grow flex flex-col justify-between text-white'>{card.name}</dl> */}
                <dt className='sr-only'>card Name</dt>
                <dd className='text-white text-sm my-2'> <strong>Genres:</strong>
                  {card.genres.map((genre, idx) => (
                    <span key={`${genre}-${idx}`}>{`${idx ? ', ' : ''} ${genre}`}</span>
                  ))}
                </dd>

                <dd className='text-white text-sm my-2'><strong>Location:</strong> {card.location}</dd>
              </span>
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
                        onClick={() => history.push(`/view-card/${card.pk}`)}
                      >
                        <span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-5 w-5'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg>
                        </span>
                        More Info
                      </button>

                      <div className='relative z-0 inline-flex shadow-sm rounded-md'>
                        <FollowBtn token={token} follow={follow} setFollow={setFollow} connections={connections} setConnections={setConnections} card={card} setCards={setCards} />
                        <MessageBtn card={card} setMessageReceiverUser={setMessageReceiverUser} />
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
