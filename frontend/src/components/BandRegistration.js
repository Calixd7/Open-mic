import { useState } from 'react'
import BandGenre from './bandRegcomponents/BandGenre'
import BandInstruments from './bandRegcomponents/BandInstruments'
import BandName from './bandRegcomponents/BandName'
import BandSize from './bandRegcomponents/BandSize'
import BandBio from './bandRegcomponents/BandBio'
import BandAge from './bandRegcomponents/BandAge'
import BandImages from './bandRegcomponents/BandImages'

const BandRegistration = () => {
  const [bandName, setBandName] = useState('')
  const [bandGenre, setBandGenre] = useState([])
  const [bandSize, setBandSize] = useState(1)
  const [bandInstruments, setBandInstruments] = useState([])
  const [bandBio, setBandBio] = useState('')
  const pendingProfile = {
    band_name: bandName,
    band_genre: bandGenre,
    band_size: bandSize,
    band_instruments: bandInstruments,
    band_bio: bandBio
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log('band profile', pendingProfile)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <h1 className='fixed top-10'>Band Registration Page</h1>
      <form
        className='flex flex-col'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>

          <div>
            <BandName bandName={bandName} setBandName={setBandName} />
          </div>

          <div>
            <BandGenre bandGenre={bandGenre} setBandGenre={setBandGenre} />
          </div>

          <div>
            <BandSize bandSize={bandSize} setBandSize={setBandSize} />
          </div>

          <div>
            <BandInstruments bandInstruments={bandInstruments} setBandInstruments={setBandInstruments} />
          </div>

          <div>
            <BandBio bandBio={bandBio} setBandBio={setBandBio} />
          </div>

          <div>
            <BandAge />
          </div>

          <div>
            <BandImages />
          </div>

        </div>
        <button
          className='bg-blue-600 hover:bg-blue-900 rounded-lg text-white p-2'
          type='submit'
        >Submit
        </button>
      </form>
    </div>

  )
}

export default BandRegistration
