import { useState } from 'react'
import BandGenre from './bandRegcomponents/BandGenre'
import BandInstruments from './bandRegcomponents/BandInstruments'
import BandName from './bandRegcomponents/BandName'
import BandSize from './bandRegcomponents/BandSize'
import BandBio from './bandRegcomponents/BandBio'
import BandImages from './bandRegcomponents/BandImages'
import BandSite from './bandRegcomponents/BandSite'

const BandProfileSetup = () => {
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
    <div className='min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8'>
      <h1 className='fixed top-10'>Band Registration Page</h1>
      <form
        className='flex flex-col'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>

          <div className='grid grid-cols-3'>
            <BandName bandName={bandName} setBandName={setBandName} />
          </div>

          <div className='grid grid-cols-3'>
            <BandSite />
          </div>

          <div className='grid grid-cols-3'>
            <BandGenre bandGenre={bandGenre} setBandGenre={setBandGenre} />
          </div>

          <div className='grid grid-cols-3'>
            <BandSize bandSize={bandSize} setBandSize={setBandSize} />
          </div>

          <div className='grid grid-cols-3'>
            <BandInstruments bandInstruments={bandInstruments} setBandInstruments={setBandInstruments} />
          </div>

          <div className='grid grid-cols-3'>
            <BandBio bandBio={bandBio} setBandBio={setBandBio} />
          </div>

          <div>
            <BandImages />
          </div>

        </div>
        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            type='submit'
          >Submit
          </button>
        </div>

      </form>
    </div>

  )
}

export default BandProfileSetup
