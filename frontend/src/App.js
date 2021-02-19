import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import BandProfileSetup from './components/BandProfileSetup'
import Welcome from './components/Welcome'
import Login from './components/Login'
import IndividualRegistration from './components/IndividualRegistration'
import IndividualProfileSetup from './components/IndividualProfileSetup'

function App () {
  return (
    <Router>
      <div className='App'>
        OpenMic
        <main>
          <Switch>
            <Route path='/welcome'>
              <Welcome />
            </Route>
            <Route path='/band-register'>
              <BandProfileSetup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/individual-register'>
              <IndividualRegistration />
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
