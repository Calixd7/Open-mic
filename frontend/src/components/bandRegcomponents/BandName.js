
const BandName = ({ bandName, setBandName }) => {
  return (
    <div>
      <label
        className='m-4 p-4'
        htmlFor='bandName'
      >Band Name
      </label>
      <input
        className='bg-gray-200 m-4 p4'
        type='text'
        value={bandName}
        onChange={e => setBandName(e.target.value)}
      />
    </div>
  )
}

export default BandName
