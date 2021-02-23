import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BandGenre = ({ blankGenre, bandGenres, setBandGenres }) => {
  const length = bandGenres.length

  const addGenre = () => {
    const id = bandGenres.length === 0
      ? 1
      : bandGenres[bandGenres.length - 1].id + 1

    setBandGenres([...bandGenres,
      {
        ...blankGenre,
        id: id + 1
      }
    ])
  }

  const removeGenre = (event, id) => {
    const newGeneres = [
      ...bandGenres
    ]
    setBandGenres(newGeneres.filter((genre) => genre.id !== id))
  }

  const handleGenreChange = (e, idx) => {
    const updatedGenre = [...bandGenres]
    updatedGenre[idx] = {
      ...updatedGenre[idx],
      genre: e.target.value
    }

    setBandGenres(updatedGenre)
  }

  return (
    <div>
      <label
        className='form-label'
        htmlFor='genre'
      >What music genres does your band play?
      </label>
      <div className='flex flex-col'>
        {bandGenres.map((genre, idx) => {
          const genreId = `genre-${idx}`
          return (
            <div
              key={`genre-name-${idx}`}
              className='flex mt-2'
            >
              <input
                className='mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-lg border-gray-300 rounded-l-md border-r-0 border bg-gray-50'
                name={genre.id}
                data-idx={idx}
                type='text'
                placeholder='Enter Genre'
                value={genre.genre}
                onChange={e => handleGenreChange(e, e.target.dataset.idx)}
              />
              <button
                type='button'
                data-idx={idx}
                className='border-gray-300 bg-gray-50 rounded-r-md block shadow-sm  mt-1 px-2 border border-l-0'
                onClick={e => removeGenre(e, genre.id)}
              >
                <FontAwesomeIcon
                  icon='times'
                  className='text-red-300 text-lg mb-1'
                />
              </button>
              {length - 1 === idx &&
                <button
                  type='button'
                  className='inline-flex justify-center py-1 sm:py-2 px-1 ml-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32 self-center'
                  onClick={addGenre}
                >Add
                </button>}
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default BandGenre
