import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { getProfiles } from '../api'
import Search from './Search'

function Explore ({ token }) {
  const [cards, setCards] = useState([])
  const [profile, setProfile] = useState('')

  console.log('profile', profile)
  console.log('cards', cards)
  console.log('token', token)

  useEffect(() => {
    getProfiles(token).then(cards => setCards(cards))
    console.log('cards', cards)
  }, [token])

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
