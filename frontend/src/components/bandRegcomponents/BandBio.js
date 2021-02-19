
const BandBio = ({ bandBio, setBandBio }) => {
  return (
    <div>
      <p>Tell us about your band</p>
      <textarea
        name='band-bio'
        id='band-bio'
        cols='30'
        rows='10'
        onChange={e => setBandBio(e.target.value)}
      />
    </div>
  )
}

export default BandBio
