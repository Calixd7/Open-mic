import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { getProfiles, getUserProfile, getConnections } from '../api'
import Search from './Search'

function Explore ({ token, setIsImage, setAvatar, username }) {
  const [cards, setCards] = useState([])
  const [profile, setProfile] = useState('')
  const [userPk, setUserPk] = useState(null)
  const [connections, setConnections] = useState([])

  // console.log('profile', profile)
  // console.log('cards', cards)
  // console.log('token', token)
  // console.log('userPk', userPk)
  // console.log('username', username)
  // console.log('cards usernames', cards.map(card => card.user))
  // console.log('connections state', connections)

  useEffect(() => {
    getProfiles(token).then(cards => setCards(cards))
    console.log('cards', cards)
  }, [token])

  useEffect(() => {
    getUserProfile(token).then(profile => {
      if (!profile.image || profile.image === null) {
        return 'loading'
      }
      setUserPk(profile.pk)
      if (profile.image.length === 0 || profile.image.length === null) {
        setIsImage(false)
      } else {
        setAvatar(profile.image)
        setIsImage(true)
      }
    })
  }, [token])

  useEffect(() => {
    getConnections(token).then(connections => {
      setConnections(connections.following.map(following => following.following_user))
    })
  }, [])

  return (
    <div>
      <div>
        <Search setCards={setCards} token={token} setProfile={setProfile} profile={profile} />
      </div>
      <div />
      <div>
        <Card cards={cards} profile={profile} />
      </div>
    </div>

  )
}

export default Explore
