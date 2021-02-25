
const Name = ({ name, setName, status }) => {
  return (
    <div>
      <label
        className='form-label'
        htmlFor='name'
      >
        {status === 'Band'
          ? 'Band Name'
          : 'Name'}
      </label>
      <input
        className='form-text-input'
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default Name
