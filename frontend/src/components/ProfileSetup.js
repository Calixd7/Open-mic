//
import { useState } from 'react'
import Genre from './profileComponents/Genre'
import Instruments from './profileComponents/Instruments'
import Bio from './profileComponents/Bio'
import Images from './profileComponents/Images'
import Name from './profileComponents/Name'
import Email from './profileComponents/Email'
import Site from './profileComponents/Site'
import BandLocation from './profileComponents/BandLocation'
import BandSize from './profileComponents/BandSize'
import Vacancy from './profileComponents/Vacancy'
import Status from './profileComponents/Status'
import { useParams, useHistory } from 'react-router-dom'
import { postProfiles, deleteProfile } from '../api'
import Delete from './Delete'

function handleSubmit (event, token, profile, userType, history) {
  event.preventDefault()
  postProfiles(token, profile, userType)
    .then(data => {
      history.push('/explore')
    })
}

const ProfileSetup = ({ token, userType }) => {
  const { type } = useParams()
  const history = useHistory()
  const [name, setName] = useState('')
  const blankGenre = { id: 1, genre: '' }
  const [genres, setGenres] = useState([{ ...blankGenre }])
  const blankInstruments = { id: 1, instrument: '' }
  const [instruments, setInstruments] = useState([{ ...blankInstruments }])
  const [bio, setBio] = useState('')
  const [zipcode, setZipcode] = useState(0)
  const [email, setEmail] = useState('')
  const [site, setSite] = useState('')
  const [bandLocation, setBandLocation] = useState('')
  const [bandSize, setBandSize] = useState(1)
  const [vacancy, setVacancy] = useState(false)
  const [image, setImage] = useState()
  const [bandMembers, setBandMembers] = useState([])
  const [status, setStatus] = useState('Individual')
  const [wantedInstruments, setWantedInstruments] = useState([])
  const [wantedInfo, setWantedInfo] = useState('')
  const pendingProfile = {
    image: image,
    bio: bio,
    name: name,
    instruments: instruments.map((int) => int.instrument),
    ind_zipcode: zipcode,
    genres: genres.map((genre) => genre.genre),
    band_size: bandSize,
    band_location: bandLocation,
    band_members: bandMembers,
    individualorband: status,
    wanted_instruments: wantedInstruments,
    wanted_info: wantedInfo
    // followers: followers
  }

  console.log('name', name)
  // console.log('type', typeof (string))
  console.log('ind profile userInstruments array', instruments.map((int) => int.instrument))
  console.log('ind profile userGenres array', genres.map((genre) => genre.genre))
  // console.log('userEmail', userEmail)

  function handleDeleteProfile (event, pk) {
    event.preventDefault()
    deleteProfile(token, pk)
      .then(card => history.push('/'))
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Profile Setup</h2>
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
                <Status status={status} setStatus={setStatus} />
              </div>

              <div className='mt-4'>
                <Name name={name} setName={setName} />
              </div>

              <div className='mt-4'>
                <Email email={email} setEmail={setEmail} />
              </div>

              <div className='mt-4'>
                <Site site={site} setSite={setSite} />
              </div>

              <div className='mt-4'>
                <BandSize bandSize={bandSize} setBandSize={setBandSize} />
              </div>

              <div className='mt-4'>
                <Genre blankGenre={blankGenre} genres={genres} setGenres={setGenres} />
              </div>

              <div className='mt-4'>
                <Instruments blankInstruments={blankInstruments} instruments={instruments} setInstruments={setInstruments} />
              </div>

              <div className='mt-4'>
                <Bio bio={bio} setBio={setBio} />
              </div>

              <div className='mt-4'>
                <Images />
              </div>

            </div>
            <div>
              <button
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                type='submit'
                onSubmit={(e) => {
                  e.preventDefault()
                  handleDeleteProfile(e, token, history)
                }}
              >Submit
              </button>
            </div>
            <span><Delete /></span>
          </form>
        </div>
      </div>
    </div>

  )
}

export default ProfileSetup
