import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import BandProfileSetup from './components/BandProfileSetup'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Registration from './components/Registration'
import IndividualProfileSetup from './components/IndividualProfileSetup'
import { useState } from 'react'

library.add(far, faTimes)

function App () {
  const [userName, setUserName] = useState('')
  const [token, setToken] = useState('')

  function setAuth (username, token) {
    setUserName(username)
    setToken(token)
  }

  return (
    <Router>
      <div className='App'>
        <Header />
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
