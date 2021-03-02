
const WantedInfo = ({ wantedInfo, setWantedInfo }) => {
  return (
    <div>
      <label
        htmlFor='info'
        className='form-label'
      >Any other details about the instrument(s) you are looking for?
      </label>
      <div className='mt-1'>
        <textarea
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
          name='info'
          id='info'
          rows='3'
          value={wantedInfo}
          onChange={e => setWantedInfo(e.target.value)}
        />
      </div>
    </div>
  )
}

export default WantedInfo
