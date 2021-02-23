// import { getProfiles } from '../api'
// import { useState } from 'react'
// import Card from '../components/UserCard'
// import { Redirect } from 'react-router-dom'

// function Explore ({ token, isLoggedIn }) {
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
// }

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

// export default Explore

import 'alpinejs'

function Explore () {
  return (
    <div className='fixed inset-0 overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <section
          className='absolute inset-y-0 right-0 pl-10 max-w-full flex'
          aria-labelledby='slide-over-heading'
        >
          <div className='w-screen max-w-md'>
            <div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll'>
              <div className='px-4 sm:px-6'>
                <div className='flex items-start justify-between'>
                  <h2
                    id='slide-over-heading'
                    className='text-lg font-medium text-gray-900'
                  >
                    Search Settings
                  </h2>
                  <div className='ml-3 h-7 flex items-center'>
                    <button className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Close panel</span>

                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none' viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-6 relative flex-1 px-4 sm:px-6'>

                <div className='absolute inset-0 px-4 sm:px-6'>
                  <div
                    className='h-full border-2 border-dashed border-gray-200'
                    aria-hidden='true'
                  />
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Explore
