import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import createPersistedState from 'use-persisted-state'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Registration from './components/Registration'
import ProfileSetup from './components/ProfileSetup'
import Connections from './components/Friends'
import Explore from './components/Explore'
import { useState } from 'react'
import ViewProfile from './components/ViewProfile'
import ViewCard from './components/ViewCard'
import Message from './components/Message'

library.add(far, faTimes, faUser)

const useUsername = createPersistedState('username')
const useToken = createPersistedState('token')

function App () {
  const [username, setUsername] = useUsername()
  const [token, setToken] = useToken()
  const [pk, setPk] = useState(0)
  const isLoggedIn = (username && token)
  const [isImage, setIsImage] = useState(false)
  const [avatar, setAvatar] = useState('')

  // console.log('pk', pk)

  function setAuth (username, token) {
    setUsername(username)
    setToken(token)
  }

  function setProfilePk (pk) {
    setPk(pk)
  }

  return (
    <Router>
      <div className='App'>
        <Header username={username} token={token} setToken={setToken} isLoggedIn={isLoggedIn} isImage={isImage} pk={pk} setIsImage={setIsImage} avatar={avatar} setAvatar={setAvatar} />
        <main>
          <Switch>
            <Route path='/registration/'>
              <Registration setAuth={setAuth} isLoggedIn={isLoggedIn} setProfilePk={setProfilePk} />
            </Route>
            <Route path='/login/'>
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} setProfilePk={setProfilePk} />
            </Route>
            <Route path='/profile-setup/'>
              <ProfileSetup token={token} isLoggedIn={isLoggedIn} setIsImage={setIsImage} setAvatar={setAvatar} />
            </Route>
            <Route path='/connections/'>
              <Connections isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/explore/'>
              <Explore token={token} isLoggedIn={isLoggedIn} setIsImage={setIsImage} setAvatar={setAvatar} avatar={avatar} username={username} />
            </Route>
            <Route path='/view-profile/'>
              <ViewProfile token={token} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/view-card/:pk'>
              <ViewCard token={token} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/message/:pk'>
              <Message token={token} isLoggedIn={isLoggedIn} />
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
