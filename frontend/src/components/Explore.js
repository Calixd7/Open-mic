import { getProfiles } from '../api'

function Explore ({ token }) {
  function handleGetProfiles (event) {
    // event.preventDefault()
    getProfiles(token)
  }

  return (
    <div>
      <p>Return User's Names:</p>
      <button type='button' onClick={() => handleGetProfiles()}>Submit</button>
    </div>
  )
}

export default Explore
