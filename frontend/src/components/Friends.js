import { getProfiles, getConnections } from '../api'
import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { Redirect } from 'react-router-dom'

function Friends ({ token, username }) {
  const [userFriends, setUserFriends] = useState([])
  const [allCards, setAllCards] = useState([])
  const [friendCards, setFriendCards] = useState([])

  useEffect(() => {
    getConnections(token).then(connections => {
      setUserFriends(connections.following.map(following => following.following_user))
    })

    getProfiles(token).then(cards => setAllCards(cards))
  }, [])

  // allCards.forEach(potentialFriend => {
  //   userFriends.forEach(friend => {
  //     if (friend === potentialFriend.user) {
  //       setFriendCards(potentialFriend)
  //     }
  //   })
  // })

  console.log('allCards.length', allCards.length)
  console.log(allCards)
  console.log('token', token)
  console.log('username', username)
  console.log('allCards', allCards)
  // console.log('cards usernames', allCards.map(card => card.user))
  console.log('userFriends state', userFriends)
  console.log('friendCards', friendCards)

  // if (!isLoggedIn) {
  //   return <Redirect to='/' />
  // }

  // if (userFriends) {
  return (
    <div>
      <p>Friends</p>
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
