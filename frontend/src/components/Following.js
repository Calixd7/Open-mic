import { getProfiles, getConnections } from '../api'
import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { Redirect } from 'react-router-dom'
import NoFriendsAlert from './alerts/NoFriendsAlert'

function Following ({ token, username, isLoggedIn }) {
  const [allCards, setAllCards] = useState([])
  const [followingCards, setFollowingCards] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    getProfiles(token)
      .then(cards => setAllCards(cards))
      .then(getConnections(token).then(connections => {
        setConnections(connections.following.map(following => following.following_user))
      })
      )
  }, [token])

  useEffect(() => {
    // const followingNames = connections.following.map(following => following.following_user)
    const followingProfiles = allCards.filter(profile => connections.includes(profile.user))
    setFollowingCards(followingProfiles)
  }, [allCards, connections])

  console.log('allCards', allCards)
  console.log('connections', connections)
  console.log('followingCards', followingCards)

  if (!followingCards) {
    return 'loading'
  }

  if (!isLoggedIn) {
    return <Redirect to='/' />
  }

  // if (userFriends) {
  return (
    <div>
      {/* {friendCards && */}
      <div className='mt-4'>
        <Card cards={followingCards} connections={connections} />
      </div>
      {/* } */}
    </div>
  )
  // }
}

export default Following
