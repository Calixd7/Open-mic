import { useEffect, useState } from 'react'
import { searchProfiles } from '../api'
import { GENRES, INSTRUMENTS } from './helperLists'

const Search = ({ token, setCards }) => {
  const [status, setStatus] = useState('')
  const [statusCheckbox, setStatusCheckbox] = useState(false)
  const [genre, setGenre] = useState('')
  const [genreCheckbox, setGenreCheckbox] = useState(false)

  console.log('status', status)
  console.log('statusCheckbox', statusCheckbox)
  console.log('genre', genre)
  console.log('genreCheckbox', genreCheckbox)

  useEffect(() => {
    if (statusCheckbox === false) {
      setStatus('')
    } else {
      return status
    }
    if (genreCheckbox === false) {
      setStatus('')
    }
  }, [handleSearch])

  function handleSearch (e) {
    e.preventDefault()

    searchProfiles(token, status, genre).then(cards => setCards(cards))
  }

  return (
    <div className='m-2 px-2'>
      <form onClick={(e) => handleSearch(e)}>
        <div className='flex justify-evenly'>
          <span className='relative z-0 inline-flex shadow-sm rounded-md'>
            <span className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white'>
              <label htmlFor='select-all' className='sr-only'>Select all</label>
              <input
                id='select-all'
                type='checkbox'
                checked={statusCheckbox}
                name='select-all'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                onChange={() => setStatusCheckbox(statusCheckbox => !statusCheckbox)}
              />
            </span>
            <label htmlFor='message-type' className='sr-only'>Select message type</label>
            <select
              id='message-type'
              name='message-type'
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setStatus(e.currentTarget.value)}
            >
              <option defaultValue='Individual'>Solo Artist</option>
              <option value='Band'>Band</option>
            </select>
          </span>

          <span className='relative z-0 inline-flex shadow-sm rounded-md'>
            <span className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white'>
              <label htmlFor='select-all' className='sr-only'>Select all</label>
              <input
                id='select-all'
                type='checkbox'
                checked={genreCheckbox}
                name='select-all'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                onChange={() => setGenreCheckbox(genreCheckbox => !genreCheckbox)}
              />
            </span>
            <label htmlFor='message-type' className='sr-only'>Select message type</label>
            <select
              id='message-type'
              name='message-type'
              className='-ml-px block w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={(e) => setGenre(e.currentTarget.value)}
            >
              {GENRES.map((genre, idx) => (
                <option key={`${genre}-${idx}`} value={genre}>{genre}</option>
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
