
const BandBio = ({ bandBio, setBandBio }) => {
  return (
    <div>
      <label htmlFor='about' className='form-label'>
        Tell us about your band
      </label>
      <div className='mt-1'>
        <textarea
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md border'
          name='band-bio'
          id='band-bio'
          rows='3'
          onChange={e => setBandBio(e.target.value)}
        />
      </div>

    </div>
  )
}

export default BandBio
