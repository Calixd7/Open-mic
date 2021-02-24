//
import { useState } from 'react'
import UserGenre from './indRegcomponents/UserGenre'
import UserInstruments from './indRegcomponents/UserInstruments'
import UserBio from './indRegcomponents/UserBio'
import UserImages from './indRegcomponents/UserImages'
import UserName from './indRegcomponents/UserName'
import UserEmail from './indRegcomponents/UserEmail'
import UserSite from './indRegcomponents/UserSite'
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

const IndProfileSetup = ({ token, userType }) => {
  const { type } = useParams()
  const history = useHistory()
  const [userName, setUserName] = useState('')
  const blankGenre = { id: 1, genre: '' }
  const [userGenres, setUserGenres] = useState([{ ...blankGenre }])
  const blankInstruments = { id: 1, instrument: '' }
  const [userInstruments, setUserInstruments] = useState([{ ...blankInstruments }])
  const [userBio, setUserBio] = useState('')
  const [userZipcode, setUserZipcode] = useState(0)
  const [userEmail, setUserEmail] = useState('')
  const [userSite, setUserSite] = useState('')
  const pendingProfile = {
    bio: userBio,
    name: userName,
    instruments: userInstruments.map((int) => int.instrument),
    ind_zipcode: userZipcode,
    genres: userGenres.map((genre) => genre.genre)
    // followers: userFollowers
  }

  console.log('userName', userName)
  // console.log('type', typeof (string))
  console.log('ind profile userInstruments array', userInstruments.map((int) => int.instrument))
  console.log('ind profile userGenres array', userGenres.map((genre) => genre.genre))
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
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Individual Profile Setup</h2>
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
                <UserName userName={userName} setUserName={setUserName} />
              </div>

              <div className='mt-4'>
                <UserEmail userEmail={userEmail} setUserEmail={setUserEmail} />
              </div>

              <div className='mt-4'>
                <UserSite userSite={userSite} setUserSite={setUserSite} />
              </div>

              <div className='mt-4'>
                <UserGenre blankGenre={blankGenre} userGenres={userGenres} setUserGenres={setUserGenres} />
              </div>

              {/* <div className='mt-4'>
                <BandSize bandSize={bandSize} setBandSize={setBandSize} />
              </div> */}

              <div className='mt-4'>
                <UserInstruments blankInstruments={blankInstruments} userInstruments={userInstruments} setUserInstruments={setUserInstruments} />
              </div>

              <div className='mt-4'>
                <UserBio userBio={userBio} setUserBio={setUserBio} />
              </div>

              <div className='mt-4'>
                <UserImages />
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

export default IndProfileSetup
