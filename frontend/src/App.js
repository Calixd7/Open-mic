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
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
