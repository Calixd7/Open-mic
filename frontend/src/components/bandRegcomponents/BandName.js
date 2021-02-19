
const BandName = ({ bandName, setBandName }) => {
  return (
    <div>
      <label
        className='block text-sm font-medium text-gray-700'
        htmlFor='bandName'
      >Band Name
      </label>
      <input
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
        type='text'
        value={bandName}
        onChange={e => setBandName(e.target.value)}
      />
    </div>
  )
}

export default BandName
