
const BandSize = ({ bandSize, setBandSize }) => {
  return (
    <div className='flex items-baseline'>
      <label
        className='form-label'
        htmlFor='size'
      >How many members are currently in your band?
      </label>
      <input
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-10 text-center shadow-sm sm:text-sm border-gray-300 rounded-md ml-4 border'
        type='number'
        value={bandSize}
        onChange={e => setBandSize(e.target.value)}
      />
    </div>
  )
}

export default BandSize
