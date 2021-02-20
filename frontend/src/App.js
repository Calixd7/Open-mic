import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import BandProfileSetup from './components/BandProfileSetup'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Registration from './components/Registration'
import IndividualProfileSetup from './components/IndividualProfileSetup'
import { useState } from 'react'

library.add(far, faTimes)

function App () {
  const [userName, setUserName] = useState('')
  const [token, setToken] = useState('')
  const [profile, setProfile] = useState('')
  console.log('this is the profile', profile)

  function setAuth (username, token) {
    setUserName(username)
    setToken(token)
  }

  return (
    <Router>
      <div className='App'>
        OpenMic
        <main>
          <Switch>
            <Route path='/welcome'>
              <Welcome setProfile={setProfile} />
            </Route>
            <Route path='/registration'>
              <Registration setAuth={setAuth} />
            </Route>
            <Route path='/login'>
              <Login setAuth={setAuth} />
            </Route>
            <Route path='/individual-profile-setup'>
              <IndividualProfileSetup />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
