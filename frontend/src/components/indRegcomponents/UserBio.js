const UserBio = ({ userBio, setUserBio }) => {
  return (
    <div>
      <label
        htmlFor='about'
        className='form-label'
      >
        Tell us about yourself
      </label>
      <div className='mt-1'>
        <textarea
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
          name='band-bio'
          id='band-bio'
          rows='3'
          onChange={e => setUserBio(e.target.value)}
        />
      </div>

    </div>
  )
}

export default UserBio
