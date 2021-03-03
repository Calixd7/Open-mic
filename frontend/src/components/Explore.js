import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { getProfiles, getUserProfile, getConnections } from '../api'
import Search from './Search'
import { Redirect } from 'react-router-dom'

function Explore ({ token, setIsImage, setAvatar, username, setMessageReceiverUser, isLoggedIn }) {
  const [cards, setCards] = useState([])
  const [profile, setProfile] = useState('')
  // const [userPk, setUserPk] = useState(null)
  const [connections, setConnections] = useState([])

  // console.log('profile', profile)
  // console.log('cards', cards)
  // console.log('token', token)
  // console.log('userPk', userPk)
  // console.log('username', username)
  // console.log('cards usernames', cards.map(card => card.user))
  // console.log('connections state', connections)

  useEffect(() => {
    getProfiles(token)
      .then(cards => setCards(cards))
      .then(getUserProfile(token).then(profile => {
        if (profile) {
          console.log('profile before avatar', profile.image)
          setAvatar(profile.image)
        }
      })
      )
  }, [token])

  useEffect(() => {
    getConnections(token).then(connections => {
      setConnections(connections.following.map(following => following.following_user))
    })
  }, [])

  if (!isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <div>
        <Search setCards={setCards} token={token} setProfile={setProfile} profile={profile} />
      </div>
      <div />
      <div>
        <Card setMessageReceiverUser={setMessageReceiverUser} cards={cards} profile={profile} />
      </div>
    </div>

  )
}

export default Explore
