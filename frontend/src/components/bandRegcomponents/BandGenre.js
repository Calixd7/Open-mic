
const BandGenre = ({ blankGenre, bandGenres, setBandGenres }) => {
  const length = bandGenres.length

  const addGenre = () => {
    setBandGenres([...bandGenres, { ...blankGenre }])
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
              key={`genre-${idx}`}
              className='flex mt-2'
            >
              <input
                className='form-text-input pl-4'
                name={genreId}
                data-idx={idx}
                type='text'
                placeholder='Enter Genre'
                value={bandGenres[idx.genre]}
                onChange={e => handleGenreChange(e, e.target.dataset.idx)}
              />
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
