import { searchProfiles } from '../api'
import { GENRES, INSTRUMENTS, LOCATION } from './helperLists'

const Search = ({ token, setCards, setShowSearch, status, setStatus, genre, setGenre, instrument, setInstrument, wantedInstrument, setWantedInstrument, location, setLocation, vacancy, setVacancy }) => {
  // const vacancySetting = (selection) => {
  //   console.log('selection', selection)

  // }

  function handleSearch (e) {
    e.preventDefault()
    let newWanted = ''
    let newVacancy = null
    if (wantedInstrument === 'any') {
      newWanted = ''
      newVacancy = true
    } else if (wantedInstrument === '') {
      newWanted = ''
      newVacancy = null
    } else {
      newWanted = wantedInstrument
      newVacancy = null
    }
    searchProfiles(token, status, location, genre, newVacancy, instrument, newWanted)
      .then(cards => setCards(cards))
  }

  return (
    <div className='m-2 px-2'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch(e)
        }}
      >
        <div className='flex justify-evenly'>
          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='status' className='block text-sm text-center font-medium text-white'>Status</label>
            <select
              id='status'
              name='status'
              value={status}
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setStatus(e.currentTarget.value)}
            >
              <option value=''>any</option>
              <option value='Individual'>Solo Artist</option>
              <option value='Band'>Band</option>
            </select>
          </span>

          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='location' className='block text-sm text-center font-medium text-white'>Location</label>
            <select
              id='location'
              name='location'
              value={location}
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setLocation(e.currentTarget.value)}
            >
              <option value=''>any</option>
              {LOCATION.map((location, idx) => (
                <option key={`${location}-${idx}`} value={location}>{location}</option>
              ))}

            </select>
          </span>

          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='genre' className='block text-sm text-center font-medium text-white'>Genre</label>
            <select
              id='genre'
              name='genre'
              value={genre}
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setGenre(e.currentTarget.value)}
            >
              <option value=''>any</option>
              {GENRES.map((genre, idx) => (
                <option key={`${genre}-${idx}`} value={genre}>{genre}</option>
              ))}

            </select>
          </span>

          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='instrument' className='block text-sm text-center font-medium text-white'>Instrument</label>
            <select
              id='instrument'
              name='instrument'
              value={instrument}
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setInstrument(e.currentTarget.value)}
            >
              <option value=''>any</option>
              {INSTRUMENTS.map((instrument, idx) => (
                <option key={`${instrument}-${idx}`} value={instrument}>{instrument}</option>
              ))}

            </select>
          </span>

          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='instrument' className='block text-sm text-center font-medium text-white'>Bands looking for</label>
            <select
              id='instrument'
              name='instrument'
              value={wantedInstrument}
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setWantedInstrument(e.currentTarget.value)}
            >
              <option defaultValue={!wantedInstrument} value=''>none</option>
              <option value='any'>Any Instrument</option>
              {INSTRUMENTS.map((wantedInstrument, idx) => (
                <option key={`${wantedInstrument}-${idx}`} value={wantedInstrument}>{wantedInstrument}</option>
              ))}

            </select>
          </span>

          <div className=' flex flex-col'>
            <button
              type='submit'
              className='mb-1 inline-flex items-center px-2.5 py-1.5 h-1/2 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
              <span>Search</span>
            </button>
            <button
              type='submit'
              className='my-1 inline-flex items-center px-2.5 py-1.5 h-1/2 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => {
                setStatus('')
                setLocation('')
                setGenre('')
                setInstrument('')
                setVacancy(null)
                setWantedInstrument('')
              }}

            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
              </svg>
              <span>Clear</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search
