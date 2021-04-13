
const Status = ({ status, setStatus, isEditing }) => {
  return (
    <div>
      <div>
        <label htmlFor='status' className='form-label'>
          {isEditing
            ? 'Solo Artist or Band?'
            : 'Are you signing up as a solo artist or a band?'}

        </label>
        <select
          id='status'
          name='status'
          value={status}
          className='mt-1 block w-full pl-3 pr-10 py-2 bg-gray-50 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
          onChange={(e) => setStatus(e.currentTarget.value)}
        >
          <option defaultValue>Solo Artist</option>
          <option>Band</option>
        </select>
      </div>
    </div>
  )
}

export default Status
