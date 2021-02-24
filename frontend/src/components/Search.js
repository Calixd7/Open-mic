import { useState } from 'react'
import { getProfiles } from '../api'

const Search = ({ token, setCards, setProfile, profile }) => {
  function handleSearch (e) {
    e.preventDefault()
    getProfiles(token).then(cards => setCards(cards))
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSearch(e)
      }}
      >
        <button
          type='submit'
          className='m-4 p-1 border-solid border-black border'
          onClick={() => setProfile('user')}
        >User Profiles
        </button>
        <button
          type='submit'
          className='m-4 p-1 border-solid border-black border'
          onClick={() => setProfile('band')}
        >Band Profiles
        </button>
      </form>
    </div>
  )
}

export default Search
