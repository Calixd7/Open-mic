import { useState, useRef } from 'react'
import Genre from './profileComponents/Genre'
import Instruments from './profileComponents/Instruments'
import Bio from './profileComponents/Bio'
import Images from './profileComponents/Images'
import Name from './profileComponents/Name'
import Email from './profileComponents/Email'
import Site from './profileComponents/Site'
import Location from './profileComponents/Location'
import Vacancy from './profileComponents/Vacancy'
import Status from './profileComponents/Status'
import WantedInstruments from './profileComponents/WantedInstruments'
import WantedInfo from './profileComponents/WantedInfo'
import { useParams, useHistory } from 'react-router-dom'
import { postProfiles, deleteProfile, updateProfile, uploadImage } from '../api'
import Delete from './Delete'
import Spotify from './Spotify'

const changeWebsiteUrl = (site) => {
  const http = 'http://'
  if (site === '') {
    return ''
  } else if (site.includes('http://')) {
    return site
  } else { return http.concat(site) }
}

const changeSpotifyUrl = (spotify) => {
  const https = 'https://'
  if (spotify === '') {
    return ''
  } else if (spotify.includes('https://')) {
    return spotify
  } else { return https.concat(spotify) }
}

const statusForApi = (status) => {
  if (status === 'Solo Artist') {
    return 'Individual'
  } else {
    return status
  }
}

const wantedIntForAPI = (vacancy, wantedInst) => {
  if (vacancy === false) {
    return ['none']
  } else {
    return wantedInst
  }
}

const genreForApi = (genres) => {
  if (genres === ['']) {
    return ['none']
  } else {
    return genres
  }
}

const instrumentsForApi = (intstruments) => {
  if (intstruments === ['']) {
    return ['none']
  } else {
    return intstruments
  }
}

const ProfileSetup = ({ token, profile, userType, isEditing, setIsImage, setAvatar }) => {
  const profileForm = useRef()
  const safeProfile = profile || {}
  const { type } = useParams()
  const history = useHistory()
  const [disableSubmit, setDisableSubmit] = useState(false)
  const [name, setName] = useState(safeProfile.name || '')
  const [genres, setGenres] = useState(safeProfile.genres || [])
  const [instruments, setInstruments] = useState(safeProfile.instruments || [])
  const [bio, setBio] = useState(safeProfile.bio || '')
  const [email, setEmail] = useState(safeProfile.email || '')
  const [site, setSite] = useState(safeProfile.website || '')
  const [location, setLocation] = useState(safeProfile.location || '')
  const [state, setState] = useState(safeProfile.state || '')
  const [vacancy, setVacancy] = useState(safeProfile.vacancy || false)
  const [image, setImage] = useState(safeProfile.image || null)
  const [status, setStatus] = useState(safeProfile.individualorband || 'Solo Artist')
  const [wantedInstruments, setWantedInstruments] = useState(safeProfile.wantedinstruments || [])
  const [wantedInfo, setWantedInfo] = useState(safeProfile.wanted_info || '')
  const [spotify, setSpotify] = useState(safeProfile.spotify || '')
  const pendingProfile = {
    pk: safeProfile.pk,
    bio: bio,
    name: name,
    instruments: instrumentsForApi(instruments),
    state: state,
    email: email,
    website: changeWebsiteUrl(site),
    genres: genreForApi(genres),
    location: location,
    vacancy: vacancy,
    individualorband: statusForApi(status),
    wantedinstruments: wantedIntForAPI(vacancy, wantedInstruments),
    wanted_info: wantedInfo,
    spotify: changeSpotifyUrl(spotify)
  }

  console.log('location', location)
  // console.log('image.length', image.length)
  // console.log('image', image)
  // console.log('typeOf(image', typeof image)
  // console.log('safeProfile.image', safeProfile.image)
  // console.log('token in ProfileSetup', token)
  // console.log('vacancy', vacancy)
  // console.log('safeProfile.pk', safeProfile.pk)

  console.log('instruments', instruments)
  console.log('genres', genres)
  console.log('genreForApi(genres)', genreForApi(genres))
  console.log('spotify', spotify)

  function handleSubmit (event, token) {
    event.preventDefault()
    setDisableSubmit(true)
    if (safeProfile.pk) {
      const formData = new FormData(profileForm.current)
      formData.set('image', image)

      console.log('pending profile in isEditing', pendingProfile)

      updateProfile(token, pendingProfile, profile.pk)
        .then(data => {
          if (typeof image === 'object') {
            uploadImage(token, formData, data.pk)
              .then(data => {
                history.push('/explore')
              })
          } else {
            history.push('/explore')
          }
        })
    } else {
      const formData = new FormData(profileForm.current)
      formData.set('image', image || [])

      console.log('pending profile in first Submit', pendingProfile)

      postProfiles(token, pendingProfile)
        .then(data => {
          uploadImage(token, formData, data.pk)
            .then(data => {
              history.push('/explore')
            })
        })
    }
  }

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
            ref={profileForm}
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(e, token, history)
            }}
          >
            <div className='flex flex-col'>

              <div className='mt-4'>
                <Status status={status} setStatus={setStatus} />
              </div>

              <div className='mt-4'>
                <Name name={name} setName={setName} status={status} />
              </div>

              <div className='mt-4'>
                <Email email={email} setEmail={setEmail} />
              </div>

              <div className='mt-4'>
                <Location status={status} location={location} setLocation={setLocation} state={state} setState={setState} />
              </div>

              <div className='mt-4'>
                <Site site={site} setSite={setSite} />
              </div>

              <div className='mt-4'>
                <Spotify spotify={spotify} setSpotify={setSpotify} />
              </div>

              <div className='mt-4 h-60'>
                <Genre genres={genres} setGenres={setGenres} status={status} />
              </div>

              <div className='mt-4 h-72'>
                <Instruments instruments={instruments} setInstruments={setInstruments} status={status} />
              </div>

              {status === 'Band' &&
                <div className='mt-4'>
                  <Vacancy vacancy={vacancy} setVacancy={setVacancy} />
                </div>}

              {vacancy === true && status === 'Band' &&
                <span>
                  <div className='mt-4 h-60'>
                    <WantedInstruments wantedInstruments={wantedInstruments} setWantedInstruments={setWantedInstruments} />
                  </div>

                  <div className='mt-4'>
                    <WantedInfo wantedInfo={wantedInfo} setWantedInfo={setWantedInfo} />
                  </div>
                </span>}

              <div className='mt-10'>
                <Bio bio={bio} setBio={setBio} status={status} />
              </div>

              <div className='mt-4'>
                <Images image={image} setImage={setImage} token={token} />
              </div>

            </div>
            <div className='mt-4'>
              <button
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                disabled={disableSubmit}
                type='submit'
              >
                {isEditing
                  ? 'Update'
                  : 'Submit'}
              </button>
            </div>
            {/* {isEditing &&
              <div className='mt-12'>
                <span><Delete /></span>
              </div>} */}
          </form>
        </div>
      </div>
    </div>

  )
}

export default ProfileSetup
