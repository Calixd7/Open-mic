import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MobileViewCard ({ card, history }) {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
      <div className={`${card.spotify ? 'sm:col-auto mt-4' : 'hidden'}`}>
        <iframe
          src={card.spotify}
          width='240'
          height='180'
          frameBorder='0'
          allowtransparency='true'
          allow='encrypted-media'
        />
      </div>
      <div className='mb-2 sm:col-auto'>
        <dt className='text-sm font-extrabold text-indigo-700'>
          Bio
        </dt>
        <dd className='mt-1 text-sm text-gray-900'>
          {card.bio}
        </dd>
      </div>
      <div className='mb-2 sm:p-0'>
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
        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
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
        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
          <dt className='text-sm font-extrabold text-indigo-700'>
            Instruments
          </dt>
          <dd className='mt-1 text-sm text-gray-900'>
            {card.instruments.map(int => (
              <p key={int}>{int}</p>
            ))}
          </dd>
        </div>
        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
          <dt className='text-sm font-extrabold text-indigo-700'>
            Genres
          </dt>
          <dd className='mt-1 text-sm text-gray-900'>
            {card.genres.map(genre => (
              <p key={genre}>{genre}</p>
            ))}
          </dd>
        </div>

      </div>
    </div>
  )
}

export default MobileViewCard
