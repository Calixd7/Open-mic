import { useState } from 'react'
import BandGenre from './bandRegcomponents/BandGenre'
import BandInstruments from './bandRegcomponents/BandInstruments'
import BandName from './bandRegcomponents/BandName'
import BandSize from './bandRegcomponents/BandSize'
import BandBio from './bandRegcomponents/BandBio'
import BandImages from './bandRegcomponents/BandImages'
import BandSite from './bandRegcomponents/BandSite'
import BandLocation from './bandRegcomponents/BandLocation'
import Vacancy from './bandRegcomponents/Vacancy'
import { useParams, useHistory } from 'react-router-dom'
import { postProfiles } from '../api'

function handleSubmit (event, token, profile, userType, history) {
  event.preventDefault()
  postProfiles(token, profile, userType)
    .then(data => {
      history.push('/explore')
    })
}

const BandProfileSetup = ({ token, userType }) => {
  const { type } = useParams()
  const history = useHistory()
  const [bandName, setBandName] = useState('')
  const blankGenre = { id: 1, genre: '' }
  const [bandGenres, setBandGenres] = useState([{ ...blankGenre }])
  const [bandSize, setBandSize] = useState(1)
  const blankInstruments = { id: 1, instrument: '' }
  const [bandInstruments, setBandInstruments] = useState([{ ...blankInstruments }])
  const [bandBio, setBandBio] = useState('')
  const [bandSite, setBandSite] = useState('')
  const [bandLocation, setBandLocation] = useState('')
  const [vacancy, setVacancy] = useState(false)
  const pendingProfile = {
    band_name: bandName,
    band_genres: bandGenres.map((genre) => genre.genre),
    band_size: bandSize,
    band_instruments: bandInstruments.map((int) => int.instrument),
    band_bio: bandBio
  }
  console.log('bandGenres in profile', bandGenres.map((genre) => genre.genre))
  console.log('Instruments in profile', bandInstruments.map((int) => int.instrument))

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Band Profile Setup</h2>
        </div>
        <div className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          <form
            className='flex flex-col'
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(e, token, pendingProfile, userType, history)
            }}
          >
            <div className='flex flex-col'>

              <div className='mt-4'>
                <BandName bandName={bandName} setBandName={setBandName} />
              </div>

              <div className='mt-4'>
                <BandSite bandSite={bandSite} setBandSite={setBandSite} />
              </div>

              <div className='mt-4'>
                <BandLocation bandLocation={bandLocation} setBandLocation={setBandLocation} />
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
                <Vacancy vacancy={vacancy} setVacancy={setVacancy} />
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
