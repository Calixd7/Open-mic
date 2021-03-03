import { useState } from 'react'
import { searchProfiles } from '../api'
import { GENRES, INSTRUMENTS, LOCATION } from './helperLists'

const Search = ({ token, setCards }) => {
  const [status, setStatus] = useState('')
  const [genre, setGenre] = useState('')
  const [instrument, setInstrument] = useState('')
  const [location, setLocation] = useState('')

  const pendingSearch = [
    status,
    genre,
    instrument,
    location
  ]

  function handleSearch (e) {
    e.preventDefault()
    searchProfiles(token, pendingSearch)
      .then(cards => setCards(cards))
  }

  console.log('status', status)
  // console.log('statusCheckbox', statusCheckbox)
  console.log('genre', genre)
  // console.log('genreCheckbox', genreCheckbox)

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
            <label htmlFor='status' className='block text-sm text-center font-medium text-gray-700'>Status</label>
            <select
              id='status'
              name='status'
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setStatus(e.currentTarget.value)}
            >
              <option value=''>none</option>
              <option value='Individual'>Solo Artist</option>
              <option value='Band'>Band</option>
            </select>
          </span>

          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='location' className='block text-sm text-center font-medium text-gray-700'>Location</label>
            <select
              id='location'
              name='location'
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setLocation(e.currentTarget.value)}
            >
              <option value=''>none</option>
              {LOCATION.map((location, idx) => (
                <option key={`${location}-${idx}`} value={location}>{location}</option>
              ))}

            </select>
          </span>

          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='genre' className='block text-sm text-center font-medium text-gray-700'>Genre</label>
            <select
              id='genre'
              name='genre'
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setGenre(e.currentTarget.value)}
            >
              <option value=''>none</option>
              {GENRES.map((genre, idx) => (
                <option key={`${genre}-${idx}`} value={genre}>{genre}</option>
              ))}

            </select>
          </span>

          <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
            <label htmlFor='instrument' className='block text-sm text-center font-medium text-gray-700'>Instrument</label>
            <select
              id='instrument'
              name='instrument'
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setInstrument(e.currentTarget.value)}
            >
              <option value=''>none</option>
              {INSTRUMENTS.map((instrument, idx) => (
                <option key={`${instrument}-${idx}`} value={instrument}>{instrument}</option>
              ))}

            </select>
          </span>

          <button
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
