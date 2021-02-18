import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import BandRegistration from './components/BandRegistration'

function App () {
  return (
    <Router>
      <div className='App'>
        OpenMic
        <main>
          <Switch>
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
