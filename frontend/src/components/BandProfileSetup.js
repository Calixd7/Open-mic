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
  const blankGenre = { genre: '' }
  const [bandGenres, setBandGenres] = useState([{ ...blankGenre }])
  const [bandSize, setBandSize] = useState(1)
  const blankInstruments = { instrument: '' }
  const [bandInstruments, setBandInstruments] = useState([{ ...blankInstruments }])
  const [bandBio, setBandBio] = useState('')
  const pendingProfile = {
    band_name: bandName,
    band_genre: bandGenres,
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
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Band Profile Setup</h2>
        </div>
        <div className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          <form
            className='flex flex-col'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col'>

              <div className='mt-4'>
                <BandName bandName={bandName} setBandName={setBandName} />
              </div>

              <div className='mt-4'>
                <BandSite />
              </div>

              <div className='mt-4'>
                <BandGenre blankGenre={blankGenre} bandGenres={bandGenres} setBandGenres={setBandGenres} />
              </div>

              <div className='mt-4'>
                <BandSize bandSize={bandSize} setBandSize={setBandSize} />
              </div>

              <div className='mt-4'>
                <BandInstruments blankInstruments={blankInstruments} bandInstruments={bandInstruments} setBandInstruments={setBandInstruments} />
              </div>

              <div className='mt-4'>
                <BandBio bandBio={bandBio} setBandBio={setBandBio} />
              </div>

              <div className='mt-4'>
                <BandImages />
              </div>

            </div>
            <div>
              <button
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                type='submit'
              >Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>

  )
}

export default BandProfileSetup
