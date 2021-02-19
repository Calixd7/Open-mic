
const BandSize = ({ bandSize, setBandSize }) => {
  return (
    <div>
      <label
        className='m-4 p-4'
        htmlFor='size'
      >Number of Band Members
      </label>
      <input
        className='bg-gray-200 m-4 p4 w-10 text-center'
        type='number'
        value={bandSize}
        onChange={e => setBandSize(e.target.value)}
      />
    </div>
  )
}

export default BandSize
