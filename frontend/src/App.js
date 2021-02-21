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

library.add(far, faTimes)

function App () {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')

  console.log('App.js username', username)
  console.log('app.js token', token)

  function setAuth (username, token) {
    setUsername(username)
    setToken(token)
  }

  return (
    <Router>
      <div className='App'>
        <Header username={username} token={token} setToken={setToken} />
        <main>
          <Switch>
            <Route path='/welcome'>
              <Welcome />
            </Route>
            <Route path='/registration/:type'>
              <Registration setAuth={setAuth} />
            </Route>
            <Route path='/login'>
              <Login setAuth={setAuth} />
            </Route>
            <Route path='/setup-profile/user'>
              <IndividualProfileSetup />
            </Route>
            <Route path='/setup-profile/band'>
              <BandProfileSetup />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
