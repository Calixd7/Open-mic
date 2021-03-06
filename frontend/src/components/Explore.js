import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { getProfiles, getUserProfile, getConnections } from '../api'
import { Redirect } from 'react-router-dom'

function Explore ({ token, setIsImage, setAvatar, username, setMessageReceiverUser, isLoggedIn, cards, setCards }) {
  const [connections, setConnections] = useState([])

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
      <div className='mt-4'>
        <Card setMessageReceiverUser={setMessageReceiverUser} cards={cards} />
      </div>
    </div>

  )
}

export default Explore
