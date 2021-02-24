import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Card from './cards/UserCard'
import { getProfiles } from '../api'

function Explore ({ token }) {
  const [showSlide, setShowSlide] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getProfiles(token).then(cards => setCards(cards))
  }, [token])

  console.log('cards', cards)

  return (
    <div>
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
        <Card cards={cards} />
      </div>
    </div>
  )
}

export default Explore
