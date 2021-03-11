import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import createPersistedState from 'use-persisted-state'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { getMessages } from './api'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Registration from './components/Registration'
import ProfileSetup from './components/ProfileSetup'
import Explore from './components/Explore'
import { useState } from 'react'
import ViewProfile from './components/ViewProfile'
import ViewCard from './components/ViewCard'
import Following from './components/Following'
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
  const [messageReceiverName, setMessageReceiverName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [unreadStatus, setUnreadStatus] = useState(0)
  const [cards, setCards] = useState([])
  const [status, setStatus] = useState('')
  const [genre, setGenre] = useState('')
  const [instrument, setInstrument] = useState('')
  const [wantedInstrument, setWantedInstrument] = useState('')
  const [location, setLocation] = useState('')
  const [vacancy, setVacancy] = useState(null)
  const [triggerReadEffect, setTriggerReadEffect] = useState()
  const [messages, setMessages] = useState([])
  const [threadStatus, setThreadStatus] = useState('Inbox')

  function setAuth (username, token) {
    setUsername(username)
    setToken(token)
  }

  function setProfilePk (pk) {
    setPk(pk)
  }

  const countOnLogin = (authToken) => {
    getMessages(authToken)
      .then(messages => {
        const receivedMessages = messages.filter(msg => msg.sender.username !== username)
        if (receivedMessages.length > 0) {
          const unreadCount = receivedMessages.reduce((count, msg) => msg.read ? count : count + 1, 0)
          setUnreadStatus(unreadCount)
        }
      })
  }

  return (
    <Router>
      <div className='App'>
        <Header username={username} token={token} setToken={setToken} isLoggedIn={isLoggedIn} isImage={isImage} pk={pk} setIsImage={setIsImage} avatar={avatar} setAvatar={setAvatar} unreadStatus={unreadStatus} setUnreadStatus={setUnreadStatus} setMessageReceiverUser={setMessageReceiverUser} setCards={setCards} status={status} setStatus={setStatus} genre={genre} setGenre={setGenre} instrument={instrument} setInstrument={setInstrument} wantedInstrument={wantedInstrument} setWantedInstrument={setWantedInstrument} location={location} setLocation={setLocation} vacancy={vacancy} setVacancy={setVacancy} setTriggerReadEffect={setTriggerReadEffect} messages={messages} />
        <main>
          <Switch>
            <Route path='/registration'>
              <Registration setAuth={setAuth} isLoggedIn={isLoggedIn} setProfilePk={setProfilePk} />
            </Route>
            <Route path='/login'>
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} setProfilePk={setProfilePk} countOnLogin={countOnLogin} />
            </Route>
            <Route path='/profile-setup'>
              <ProfileSetup token={token} isLoggedIn={isLoggedIn} setIsImage={setIsImage} />
            </Route>
            <Route path='/following'>
              <Following token={token} isLoggedIn={isLoggedIn} username={username} />
            </Route>
            <Route path='/explore'>
              <Explore setMessageReceiverUser={setMessageReceiverUser} setMessageReceiverName={setMessageReceiverName} token={token} isLoggedIn={isLoggedIn} setIsImage={setIsImage} username={username} setAvatar={setAvatar} cards={cards} setCards={setCards} setTriggerReadEffect={setTriggerReadEffect} setThreadStatus={setThreadStatus} />
            </Route>
            <Route path='/view-profile'>
              <ViewProfile token={token} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path='/view-card/:pk'>
              <ViewCard token={token} isLoggedIn={isLoggedIn} setMessageReceiverName={setMessageReceiverName} setMessageReceiverUser={setMessageReceiverUser} setThreadStatus={setThreadStatus} />
            </Route>
            <Route path='/message'>
              <MessageHub messageReceiverUser={messageReceiverUser} messageReceiverName={messageReceiverName} setMessageReceiverName={setMessageReceiverName} username={username} token={token} isLoggedIn={isLoggedIn} setUnreadStatus={setUnreadStatus} unreadStatus={unreadStatus} setMessageReceiverUser={setMessageReceiverUser} triggerReadEffect={triggerReadEffect} setTriggerReadEffect={setTriggerReadEffect} messages={messages} setMessages={setMessages} threadStatus={threadStatus} setThreadStatus={setThreadStatus} />
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
