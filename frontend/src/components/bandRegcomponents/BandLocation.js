
const BandLocation = ({ bandLocation, setBandLocation }) => {
  return (
    <div>
      <label
        className='form-label'
        htmlFor='band-location'
      >Location
      </label>
      <input
        className='form-text-input'
        type='text'
        value={bandLocation}
        onChange={e => setBandLocation(e.target.value)}
      />
      <p className='mt-1 text-left text-sm text-gray-500 font-normal'>Where does your band call home?</p>
    </div>

  )
}

export default BandLocation
