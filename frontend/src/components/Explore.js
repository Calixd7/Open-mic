import { getProfiles } from '../api'
import { useState } from 'react'
import Card from '../components/UserCard'

function Explore ({ token }) {
  const [cards, setCards] = useState('')
  console.log(cards)
  console.log('token', token)

  function handleGetProfiles (event) {
    // event.preventDefault()
    getProfiles(token)
      .then(cards => setCards(cards))
  }

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

export default Explore
