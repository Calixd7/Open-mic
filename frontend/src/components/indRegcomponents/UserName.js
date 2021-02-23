
const UserName = ({ userName, setUserName }) => {
  return (
    <div>
      <label
        className='form-label'
        htmlFor='userName'
      >Name
      </label>
      <input
        className='form-text-input'
        type='text'
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
    </div>
  )
}

export default UserName
