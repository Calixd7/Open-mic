
const BandName = ({ bandName, setBandName }) => {
  return (
    <div>
      <label
        className='form-label'
        htmlFor='bandName'
      >Band Name
      </label>
      <input
        className='form-text-input'
        type='text'
        value={bandName}
        onChange={e => setBandName(e.target.value)}
      />
    </div>
  )
}

export default BandName
