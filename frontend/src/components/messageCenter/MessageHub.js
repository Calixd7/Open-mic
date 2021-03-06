import { Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMessages } from '../../api'
// import LogoArea from './LogoArea'
// import PickerArea from './PickerArea'
import MenuButtonArea from './MenuButtonArea'
import DesktopNavArea from './DesktopNavArea'
import MobileMessageMenu from './MobileMessageMenu'
import NarrowSidebar from './NarrowSidebar'
// import MainToolLeftBtns from './MainToolLeftBtns'
// import MainToolRightBtns from './MainToolRightBtns'
// import MessageHeader from './MessageHeader'
import ThreadSection from './ThreadSection'
import MessageList from './MessageList'

const MessageHub = ({ token, username, messageReceiverUser, isLoggedIn, setUnreadStatus, unreadStatus, setMessageReceiverUser }) => {
  const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false)
  const [messages, setMessages] = useState([])
  //   const [showReplyMessage, setShowReplyMessage] = useState(false)
  //   console.log('messageId', messageId)
  //   console.log('messages', messages)
  //   console.log('triggerUseEffect', triggerUseEffect)
  //   console.log('messageToRender in MESSAGES', messageToRender)

  useEffect(() => {
    getMessages(token).then(messages => {
      setMessages(messages)
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
            <MobileMessageMenu showOffCanvasMenu={showOffCanvasMenu} setShowOffCanvasMenu={setShowOffCanvasMenu} />}
        </header>

        {/* <!-- Bottom section --> */}
        <div className='min-h-0 flex-1 flex overflow-hidden'>
          {/* <!-- Narrow sidebar--> */}
          <NarrowSidebar />

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
                      {/* <MainToolLeftBtns /> */}

                      {/* <!-- Right buttons --> */}
                      {/* <MainToolRightBtns /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Message header --> */}
              <div className='min-h-0 flex-1 overflow-y-auto'>
                {/* <MessageHeader /> */}
                {/* <!-- Thread section--> */}
                <ThreadSection messages={messages} setMessages={setMessages} unreadStatus={unreadStatus} setUnreadStatus={setUnreadStatus} username={username} token={token} messageReceiverUser={messageReceiverUser} setMessageReceiverUser={setMessageReceiverUser} />
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
