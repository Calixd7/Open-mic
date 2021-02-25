const Bio = ({ bio, setBio, status }) => {
  return (
    <div>
      <label
        htmlFor='about'
        className='form-label'
      >
        {status === 'Band'
          ? 'Tell us about your band'
          : 'Tell us about yourself'}
      </label>
      <div className='mt-1'>
        <textarea
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
          name='bio'
          id='bio'
          rows='3'
          onChange={e => setBio(e.target.value)}
        />
      </div>

    </div>
  )
}

export default Bio
