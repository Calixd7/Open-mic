import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import BandRegistration from './components/BandRegistration'
import Welcome from './components/Welcome'

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
              <BandRegistration />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
