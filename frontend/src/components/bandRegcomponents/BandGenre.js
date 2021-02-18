
const BandGenre = ({ bandGenre, setBandGenre }) => {
  return (
    <div>
      <label
        className='m-4 p-4'
        htmlFor='genre'
      >Type of Music
      </label>
      <input
        className='bg-gray-200 m-4 p4'
        type='text'
        value={bandGenre}
        onChange={e => setBandGenre(e.target.value)}
      />
    </div>
  )
}

export default BandGenre
