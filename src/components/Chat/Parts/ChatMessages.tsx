import React from 'react'
import { styled } from '../../../../stitches.config'
import { List } from '@components'
import { ChatBubble } from './ChatBubble'

const MessageContainer = styled('div', {
  postiion: 'relative',
  width: '100%'
})

const MessageContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '0 5%'
})

// -------------- Typescript declarations -------------- //

interface ChatMessagesProps {
  messages: {
    person: 'sender' | 'reciever'
    name: string
    message: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ChatMessages = ({
    messages
  }: ChatMessagesProps ) => {
  
  return(

    <MessageContainer>
      <MessageContent>
        <List spacing="l0"> 
          { messages.map(( message, i ) => (

            <li>
              <ChatBubble
                person={ message.person }
                name={ message.name }
                message={ message.message }  
              />
            </li>

          ))}
        </List>
      </MessageContent>
    </MessageContainer>
    
  )
}
