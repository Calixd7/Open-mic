import { useParams } from 'react-router-dom'
import Card from './cards/Card'
import { useEffect, useState } from 'react'
import { getUserProfile } from '../api'
import ProfileSetup from './ProfileSetup'

const ViewProfile = ({ token }) => {
  const { pk } = useParams()
  const [profile, setProfile] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    getUserProfile(token).then(profile => setProfile(profile))
  }, [])

  if (profile && isEditing) {
    return (
      <div>
        <ProfileSetup profile={profile} isEditing={isEditing} />
      </div>
    )
  } else if (profile) {
    return (
      <div>
        <div>{profile.user}</div>
        <div>{profile.name}</div>
        <button onClick={() => setIsEditing(true)}>EDIT THE PROFILE BITCH</button>
      </div>
    )
  } else {
    return 'LOADING PROFILE'
  }
}

export default ViewProfile
