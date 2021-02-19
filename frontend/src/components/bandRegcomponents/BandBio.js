
const BandBio = ({ bandBio, setBandBio }) => {
  return (
    <div>
      <label htmlFor='about' className='block text-sm font-medium text-gray-700'>
        Tell us about your band
      </label>
      <div className='mt-1'>
        <textarea
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
          name='band-bio'
          id='band-bio'
          cols='30'
          rows='10'
          onChange={e => setBandBio(e.target.value)}
        />
        <p className='mt-2 text-sm text-gray-500'>
          Brief description for your profile. URLs are hyperlinked.
        </p>
      </div>

    </div>
  )
}

export default BandBio
