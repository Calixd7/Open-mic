import { useParams } from 'react-router-dom'
import Card from './cards/Card'
import { useEffect, useState } from 'react'
import { getUserProfile } from '../api'
import ProfileSetup from './ProfileSetup'

const ViewProfile = ({ token }) => {
  const { pk } = useParams()
  const [profile, setProfile] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  console.log('token in viewProfile', token)

  useEffect(() => {
    getUserProfile(token).then(profile => setProfile(profile))
  }, [])

  if (profile && isEditing) {
    return (
      <div>
        <ProfileSetup profile={profile} isEditing={isEditing} token={token} />
      </div>
    )
  } else if (profile) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Profile</h2>
          </div>
          <ul className='space-y-3'>
            <p>Registered as. . .</p>
            <li className='bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md'>
              <div>{profile.individualorband}</div>
            </li>
          </ul>

          <ul className='space-y-3'>
            <p>
              {profile.individualorband === 'Band'
                ? 'Band Name'
                : 'Name'}
            </p>
            <li className='bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md'>
              <div>{profile.name}</div>
            </li>
          </ul>

          <ul className='space-y-3'>
            <p>Location</p>
            <li className='bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md'>
              <div>{profile.band_location}</div>
            </li>
          </ul>

          <p>Genres</p>
          <div className='bg-white shadow overflow-hidden sm:rounded-md'>
            <ul className='divide-y divide-gray-200'>
              {profile.genres.map(genre => (
                <li key={genre} className='px-4 py-4 sm:px-6'>
                  {genre}
                </li>
              ))}
            </ul>
          </div>

          <p className=''>Instruments</p>
          <div className='bg-white shadow overflow-hidden sm:rounded-md'>
            <ul className='divide-y divide-gray-200'>
              {profile.instruments.map(instrument => (
                <li key={`current-${instrument}`} className='px-4 py-4 sm:px-6'>
                  {instrument}
                </li>
              ))}
            </ul>
          </div>

          <ul className='space-y-3'>
            <p>Bio</p>
            <li className='bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md'>
              <div>{profile.bio}</div>
            </li>
          </ul>

          {profile.vacancy === false &&
            <ul className='space-y-3'>
              <p>Looking for Instruments?</p>
              <li className='bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md'>
                <div>You are currently not looking for instruments</div>
              </li>
            </ul>}

          {profile.vacancy &&
            <div>
              <p className=''>The instruments you are looking for. . .</p>
              <div className='bg-white shadow overflow-hidden sm:rounded-md'>
                <ul className='divide-y divide-gray-200'>
                  {profile.wanted_instruments.map(instrument => (
                    <li key={`wanted-${instrument}`} className='px-4 py-4 sm:px-6'>
                      {instrument}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className='space-y-3'>
                <p>Info about what you need</p>
                <li className='bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md'>
                  <div>{profile.wanted_info}</div>
                </li>
              </ul>
            </div>}

          <button
            onClick={() => setIsEditing(true)}
            type='button'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <svg className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
              </svg>
            </span>
            Edit Profile
          </button>
        </div>
      </div>
    )
  } else {
    return 'LOADING PROFILE'
  }
}

export default ViewProfile
