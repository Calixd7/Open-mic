
const BandGenre = ({ bandGenre, setBandGenre }) => {
  return (
    <div>
      <label
        className='block text-sm font-medium text-gray-700'
        htmlFor='genre'
      >What music genre does your band play?
      </label>
      <input
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
        type='text'
        value={bandGenre}
        onChange={e => setBandGenre(e.target.value)}
      />
    </div>
  )
}

export default BandGenre
