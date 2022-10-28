import React from 'react'
import { styled } from '@theme'
import { Chat, Avatar, Button, List } from '@components'

const ChatContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  position: 'fixed',
  bottom: 0,
  right: 0,
  maxWidth: '80vw',
  width: '100%',
  paddingBottom: 32,
  zIndex: 9000,
  pointerEvents: 'none'
})

const Chats = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  height: 400
})

const ChatItem = styled('div', {
  position: 'relative',
  maxWidth: 400,
  width: '100%',
  height: '100%',
  pointerEvents: 'auto'
})

const ChatList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '0 20px',
  pointerEvents: 'auto'
})

const Users = styled('div', {
  
})

// -------------- Typescript declarations -------------- //

interface ChatGlobalProps {
  currentChats: {
    name: string
    image?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ChatGlobal = ({
    currentChats
  }: ChatGlobalProps ) => {
  
  return(

    <ChatContainer>
      {/* <Chats>
        <ChatItem><Chat /></ChatItem>
      </Chats> */}

      <ChatList>
        <Users>
          <List spacing="l0">
            { currentChats.map(( chat, i ) => (

              <li key={`chat-${ i }`}>
                <Avatar 
                  chatThumb
                  buttonVariant="secondary"
                  nameHidden
                  size="l1"
                  image={ chat.image }
                  name={ chat.name }
                  onClick={ () => alert( 'clicked' ) }     
                />
              </li>

            ))}
          </List>
        </Users>
        <Button variant="primary" icon="pencil-1" />
      </ChatList>
    </ChatContainer>
    
  )
}
