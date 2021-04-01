import { Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMessages, getUserProfile, getProfiles } from '../../api'
// import LogoArea from './LogoArea'
// import PickerArea from './PickerArea'
import MenuButtonArea from './MenuButtonArea'
import DesktopNavArea from './DesktopNavArea'
import MobileMessageMenu from './MobileMessageMenu'
import NarrowSidebar from './NarrowSidebar'
import MainToolLeftBtns from './MainToolLeftBtns'
// import MainToolRightBtns from './MainToolRightBtns'
// import MessageHeader from './MessageHeader'
import ThreadSection from './ThreadSection'
import MessageList from './MessageList'

// MessageHub is the skelaton of the entire message center. This
// components is used from Tailwind components. It's massive
// and is more than what we need for this app. However, I
// have left everything here in the code in case we need something
// new in the future. NOTE: to preserve the overall styling I
// had to leave some sub components commented in but have 'hidden'
// the styling inside the component. I've tried to indicate that
// when I did this.

const MessageHub = ({ token, username, messageReceiverUser, isLoggedIn, setUnreadStatus, unreadStatus, setMessageReceiverUser, messageReceiverName, setMessageReceiverName, triggerReadEffect, setTriggerReadEffect, setMessages, messages, threadStatus, setThreadStatus }) => {
  const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false)
  const [name, setName] = useState('')
  const [profilesForMessage, setProfilesForMessage] = useState([])
  const [newMessage, setNewMessage] = useState(false)
  const [newMessageContent, setNewMessageContent] = useState('')
  const [newMessageSubject, setNewMessageSubject] = useState('')
  const [messageToRender, setMessageToRender] = useState(null)
  const [showSent, setShowSent] = useState(false)
  const [messagesLength, setMessagesLength] = useState(0)

  useEffect(() => {
    getMessages(token).then(messages => {
      setMessages(messages)
    })
  }, [])

  // grabing the users name for sending msgs
  // with their name attached

  useEffect(() => {
    getUserProfile(token)
      .then(data => setName(data.name))
  }, [])

  useEffect(() => {
    getProfiles(token)
      .then(profiles => {
        setProfilesForMessage(profiles)
      })
  }, [])

  if (!isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <div className='h-screen overflow-hidden bg-gray-100 flex flex-col'>
        {/* <!-- Top nav--> */}
        <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
          {/* <!-- Logo area --> */}

          {/* <LogoArea /> */}

          {/* <!-- Picker area --> */}

          {/* <PickerArea /> */}

          {/* <!-- Menu button area --> */}
          <MenuButtonArea showOffCanvasMenu={showOffCanvasMenu} setShowOffCanvasMenu={setShowOffCanvasMenu} />
          {/* <!-- Desktop nav area --> */}
          <DesktopNavArea />

          {/* <!-- Mobile menu, show/hide this `div` based on menu open/closed state --> */}
          {showOffCanvasMenu &&
            <MobileMessageMenu showOffCanvasMenu={showOffCanvasMenu} setShowOffCanvasMenu={setShowOffCanvasMenu} setNewMessage={setNewMessage} setMessageReceiverName={setMessageReceiverName} setMessageReceiverUser={setMessageReceiverUser} newMessageContent={newMessageContent} setNewMessageContent={setNewMessageContent} newMessageSubject={newMessageSubject} setNewMessageSubject={setNewMessageSubject} messageToRender={messageToRender} setMessageToRender={setMessageToRender} setThreadStatus={setThreadStatus} setShowSent={setShowSent} />}
        </header>

        {/* <!-- Bottom section --> */}
        <div className='min-h-0 flex-1 flex overflow-hidden'>
          {/* <!-- Narrow sidebar--> */}
          <NarrowSidebar setNewMessage={setNewMessage} setMessageReceiverName={setMessageReceiverName} setMessageReceiverUser={setMessageReceiverUser} newMessageContent={newMessageContent} setNewMessageContent={setNewMessageContent} newMessageSubject={newMessageSubject} setNewMessageSubject={setNewMessageSubject} messageToRender={messageToRender} setMessageToRender={setMessageToRender} setThreadStatus={setThreadStatus} setShowSent={setShowSent} />

          {/* <!-- Main area --> */}
          <main className='min-w-0 flex-1 border-t border-gray-200 xl:flex'>
            <section aria-labelledby='message-heading' className='min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last'>
              {/* <!-- Top section --> */}
              <div className='flex-shrink-0 bg-white border-b border-gray-200'>
                {/* <!-- Toolbar--> */}
                <div className='h-16 flex flex-col justify-center'>
                  <div className='px-4 sm:px-6 lg:px-8'>
                    <div className='py-3 flex justify-between'>
                      {/* <!-- Left buttons --> */}
                      <MainToolLeftBtns messages={messages} setMessages={setMessages} threadStatus={threadStatus} messagesLength={messagesLength} />

                      {/* <!-- Right buttons --> */}
                      {/* <MainToolRightBtns /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Message header --> */}
              <div className='mx-4 min-h-0 flex-1 overflow-y-auto'>
                {/* <MessageHeader /> */}
                {/* <!-- Thread section--> */}
                <ThreadSection messages={messages} setMessages={setMessages} unreadStatus={unreadStatus} setUnreadStatus={setUnreadStatus} username={username} token={token} messageReceiverUser={messageReceiverUser} setMessageReceiverUser={setMessageReceiverUser} messageReceiverName={messageReceiverName} setMessageReceiverName={setMessageReceiverName} triggerReadEffect={triggerReadEffect} setTriggerReadEffect={setTriggerReadEffect} name={name} profilesForMessage={profilesForMessage} newMessage={newMessage} setNewMessage={setNewMessage} newMessageContent={newMessageContent} setNewMessageContent={setNewMessageContent} newMessageSubject={newMessageSubject} setNewMessageSubject={setNewMessageSubject} messageToRender={messageToRender} setMessageToRender={setMessageToRender} showSent={showSent} setMessagesLength={setMessagesLength} threadStatus={threadStatus} />
              </div>
            </section>

            {/* <!-- Message list--> */}
            <MessageList />
          </main>
        </div>
      </div>
    </div>
  )
}

export default MessageHub
