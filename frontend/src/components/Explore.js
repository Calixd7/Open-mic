import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Card from './cards/UserCard'
import { getProfiles } from '../api'
import Search from './Search'

function Explore ({ token }) {
  const [showSlide, setShowSlide] = useState(false)
  const [cards, setCards] = useState([])
  const [profile, setProfile] = useState('')

  console.log('profile', profile)

  useEffect(() => {
    getProfiles(token).then(cards => setCards(cards))
    console.log('cards', cards)
  }, [token])

  return (
    <div>
      <div>
        <Search setCards={setCards} token={token} setProfile={setProfile} profile={profile} />
      </div>
      <div>
        {/* <button
          className='bg-indigo-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
          id='slide-over-heading'
          aria-haspopup='true'
          onClick={() => setShowSlide(false)}
        >Click Me!
        </button> */}
      </div>
      <div>
        <Card cards={cards} profile={profile} />
      </div>
<<<<<<< HEAD

=======
>>>>>>> 38203895df1f0aec8ed11e6f79272d7ebf1319c5
    </div>

  )
}

export default Explore
