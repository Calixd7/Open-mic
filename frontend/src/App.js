import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import createPersistedState from 'use-persisted-state'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import BandProfileSetup from './components/BandProfileSetup'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Registration from './components/Registration'
import IndividualProfileSetup from './components/IndividualProfileSetup'
import Connections from './components/Friends'
import Explore from './components/Explore'
import { useState } from 'react'

library.add(far, faTimes)

const useUsername = createPersistedState('username')
const useToken = createPersistedState('token')

function App () {
  const [username, setUsername] = useUsername()
  const [token, setToken] = useToken()
  const [userType, setUserType] = useState()
  const isLoggedIn = (username && token)

  function setAuth (username, token) {
    setUsername(username)
    setToken(token)
  }

  return (
    <Router>
      <div className='App'>
        <Header username={username} token={token} setToken={setToken} isLoggedIn={isLoggedIn} />
        <main>
          <Switch>
            <Route path='/registration/:type'>
              <Registration setAuth={setAuth} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/login'>
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/setup-profile/user'>
              <IndividualProfileSetup token={token} isLoggedIn={isLoggedIn} userType={userType} />
            </Route>
            <Route path='/setup-profile/band'>
              <BandProfileSetup token={token} isLoggedIn={isLoggedIn} userType={userType} />
            </Route>
            <Route path='/connections'>
              <Connections isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/explore/'>
              <Explore token={token} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/'>
              <Welcome isLoggedIn={isLoggedIn} setUserType={setUserType} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
