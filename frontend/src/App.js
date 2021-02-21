import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import BandProfileSetup from './components/BandProfileSetup'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Registration from './components/Registration'
import IndividualProfileSetup from './components/IndividualProfileSetup'
import { useState } from 'react'
import Connections from './components/Connections'
import Explore from './components/Explore'

library.add(far, faTimes)

function App () {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
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
              <IndividualProfileSetup />
            </Route>
            <Route path='/setup-profile/band'>
              <BandProfileSetup />
            </Route>
            <Route path='/connections'>
              <Connections />
            </Route>
            <Route path='/explore'>
              <Explore />
            </Route>
            <Route path='/'>
              <Welcome isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
