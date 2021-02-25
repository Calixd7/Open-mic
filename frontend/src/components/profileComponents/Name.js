
const Name = ({ name, setName }) => {
  return (
    <div>
      <label
        className='form-label'
        htmlFor='name'
      >Name
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
