import { getProfiles, getConnections } from '../api'
import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { Redirect } from 'react-router-dom'
import NoFriendsAlert from './alerts/NoFriendsAlert'

function Friends ({ token, username, isLoggedIn }) {
  const [userFriends, setUserFriends] = useState([])
  const [allCards, setAllCards] = useState([])
  const [friendCards, setFriendCards] = useState([])

  useEffect(() => {
    getProfiles(token)
      .then(cards => setAllCards(cards))
      .then(getConnections(token).then(connections => {
        const friendsNames = connections.following.map(following => following.following_user)
        const friendsProfiles = allCards.filter(profile => friendsNames.includes(profile.user))
        setFriendCards(friendsProfiles)
      })
      )
  }, [])

  // console.log('allCards.length', allCards.length)
  // console.log(allCards)
  // console.log('token', token)
  // console.log('username', username)
  // console.log('allCards', allCards)
  // // console.log('cards usernames', allCards.map(card => card.user))
  // console.log('userFriends state', userFriends)
  // console.log('friendCards', friendCards)

  if (!isLoggedIn) {
    return <Redirect to='/' />
  }

  if (userFriends.length < 1) {
    return (
      <div className='flex items-center justify-center h-screen px-4 sm:px-0'>
        <NoFriendsAlert />
      </div>
    )
  }

  // if (userFriends) {
  return (
    <div>
      <p>Following</p>
      {/* <button
          onClick={() => grabProfiles(token, setAllCards)}
        >
          click
        </button> */}
      {friendCards &&
        <div>
          <Card cards={friendCards} />
        </div>}
    </div>
  )
  // }
}

export default Friends
