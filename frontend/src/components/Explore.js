import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { getProfiles, getUserProfile } from '../api'
import Search from './Search'

function Explore ({ token, setIsImage, setAvatar }) {
  const [cards, setCards] = useState([])
  const [profile, setProfile] = useState('')

  console.log('profile', profile)
  console.log('cards', cards)
  console.log('token', token)

  useEffect(() => {
    getProfiles(token).then(cards => setCards(cards))
    console.log('cards', cards)
  }, [token])

  useEffect(() => {
    getUserProfile(token).then(profile => {
      if (!profile.image || profile.image === null) {
        return 'loading'
      }
      if (profile.image.length === 0 || profile.image.length === null) {
        setIsImage(false)
      } else {
        setAvatar(profile.image)
        setIsImage(true)
      }
    })
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
