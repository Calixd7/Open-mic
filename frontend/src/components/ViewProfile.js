import { useParams } from 'react-router-dom'
import Card from './cards/Card'
import { useEffect, useState } from 'react'
import { getProfile } from '../api'
import ProfileSetup from './ProfileSetup'

const ViewProfile = ({ token }) => {
  const { pk } = useParams()
  const [profile, setProfile] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    getProfile(token, pk).then(profile => setProfile(profile))
    console.log('profile', profile)
  }, [token])

  if (isEditing) {
    return (
      <div>
        <ProfileSetup profile={profile} isEditing={isEditing} />
      </div>
    )
  }
}

export default ViewProfile
