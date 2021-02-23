// import { getProfiles } from '../api'
// import { useState } from 'react'
// import Card from '../components/UserCard'
// import { Redirect } from 'react-router-dom'

// function Friends ({ token, isLoggedIn }) {
//   const [cards, setCards] = useState('')
//   console.log(cards)
//   console.log('token', token)

//   // if (!isLoggedIn) {
//   //   return <Redirect to='/' />
//   // }

//   function handleGetProfiles (event) {
//     // event.preventDefault()
//     getProfiles(token)
//       .then(cards => setCards(cards))
//   }

//   // function geoFindMe () {
//   //   const status = document.querySelector('#status')
//   //   const mapLink = document.querySelector('#map-link')

//   //   mapLink.href = ''
//   //   mapLink.textContent = ''

//   //   function success (position) {
//   //     const latitude = position.coords.latitude
//   //     const longitude = position.coords.longitude

//   //     status.textContent = ''
//   //     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
//   //     // mapLink.textContent = `Latitude: ${latitude} °`, `Longitude: ${longitude} °`
//   //   }

//   //   function error () {
//   //     status.textContent = 'Unable to retrieve your location'
//   //   }

//   //   if (!navigator.geolocation) {
//   //     status.textContent = 'Geolocation is not supported by your browser'
//   //   } else {
//   //     status.textContent = 'Locating...'
//   //     navigator.geolocation.getCurrentPosition(success, error)
//   //   }
//   // }
//   // // document.querySelector('#find-me').addEventListener('click')

//   return (
//     <div>
//       <p>Return User Names</p>
//       <button type='button' onClick={() => handleGetProfiles()}>Submit</button>
//       {cards &&
//         <div>
//           <Card cards={cards} />
//         </div>}
//     </div>
//   )
// }

// export default Friends

import { getProfiles } from '../api'
import { useState } from 'react'
import Card from './UserCard'
import { Redirect } from 'react-router-dom'

function Friends ({ token, isLoggedIn }) {
  const [cards, setCards] = useState('')
  console.log(cards)
  console.log('token', token)

  // if (!isLoggedIn) {
  //   return <Redirect to='/' />
  // }

  function handleGetProfiles (event) {
    // event.preventDefault()
    getProfiles(token)
      .then(cards => setCards(cards))
  }

  // function geoFindMe () {
  //   const status = document.querySelector('#status')
  //   const mapLink = document.querySelector('#map-link')

  //   mapLink.href = ''
  //   mapLink.textContent = ''

  //   function success (position) {
  //     const latitude = position.coords.latitude
  //     const longitude = position.coords.longitude

  //     status.textContent = ''
  //     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
  //     // mapLink.textContent = `Latitude: ${latitude} °`, `Longitude: ${longitude} °`
  //   }

  //   function error () {
  //     status.textContent = 'Unable to retrieve your location'
  //   }

  //   if (!navigator.geolocation) {
  //     status.textContent = 'Geolocation is not supported by your browser'
  //   } else {
  //     status.textContent = 'Locating...'
  //     navigator.geolocation.getCurrentPosition(success, error)
  //   }
  // }
  // // document.querySelector('#find-me').addEventListener('click')

  return (
    <div>
      <p>Return User Names</p>
      <button type='button' onClick={() => handleGetProfiles()}>Submit</button>
      {cards &&
        <div>
          <Card cards={cards} />
        </div>}
    </div>
  )
}

export default Friends
