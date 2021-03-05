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
import Explore from './components/Explore'
import { useState } from 'react'
import ViewProfile from './components/ViewProfile'
import ViewCard from './components/ViewCard'
import Message from './components/Message'
import Friends from './components/Friends'
import MessageHub from './components/messageCenter/MessageHub'

library.add(far, faTimes, faUser)

const useUsername = createPersistedState('username')
const useToken = createPersistedState('token')

function App () {
  const [username, setUsername] = useUsername()
  const [token, setToken] = useToken()
  const [pk, setPk] = useState(0)
  const isLoggedIn = (username && token)
  const [isImage, setIsImage] = useState(false)
  const [messageReceiverUser, setMessageReceiverUser] = useState('')
  const [avatar, setAvatar] = useState('')
  const [checkUnread, setCheckUnread] = useState(0)

  console.log('messageReceiverUser from APP', messageReceiverUser)

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
        <Header username={username} token={token} setToken={setToken} isLoggedIn={isLoggedIn} isImage={isImage} pk={pk} setIsImage={setIsImage} avatar={avatar} setAvatar={setAvatar} checkUnread={checkUnread} setCheckUnread={setCheckUnread} setMessageReceiverUser={setMessageReceiverUser} />
        <main>
          <Switch>
            <Route path='/registration'>
              <Registration setAuth={setAuth} isLoggedIn={isLoggedIn} setProfilePk={setProfilePk} />
            </Route>
            <Route path='/login'>
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} setProfilePk={setProfilePk} />
            </Route>
            <Route path='/profile-setup'>
              <ProfileSetup token={token} isLoggedIn={isLoggedIn} setIsImage={setIsImage} />
            </Route>
            <Route path='/friends'>
              <Friends token={token} isLoggedIn={isLoggedIn} username={username} />
            </Route>
            <Route path='/explore'>
              <Explore setMessageReceiverUser={setMessageReceiverUser} token={token} isLoggedIn={isLoggedIn} setIsImage={setIsImage} username={username} setAvatar={setAvatar} />
            </Route>
            <Route path='/view-profile'>
              <ViewProfile token={token} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/view-card/:pk'>
              <ViewCard token={token} isLoggedIn={isLoggedIn} />
            </Route>
            {/* <Route path='/message'>
              <Message messageReceiverUser={messageReceiverUser} username={username} token={token} isLoggedIn={isLoggedIn} setCheckUnread={setCheckUnread} checkUnread={checkUnread} />
            </Route> */}
            <Route path='/message'>
              <MessageHub messageReceiverUser={messageReceiverUser} username={username} token={token} isLoggedIn={isLoggedIn} setCheckUnread={setCheckUnread} checkUnread={checkUnread} setMessageReceiverUser={setMessageReceiverUser} />
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
