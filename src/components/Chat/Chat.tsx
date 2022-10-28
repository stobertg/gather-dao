import React from 'react'
import { styled } from '../../../stitches.config'
import { ChatHeader } from './Parts/ChatHeader'
import { ChatMessages } from './Parts/ChatMessages'
import { ChatInput } from './Parts/ChatInput'

const ChatContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '#2c2b30',
  borderRadius: '$r3',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.2 )'
})

const ChatMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
  position: 'relative',
  width: '100%',
  height: '100%'
})

// -------------- Typescript declarations -------------- //

interface ChatProps {

}

// ---------- This is the end of declarations ---------- //

export const Chat = ({

  }: ChatProps ) => {
  
  return(

    <ChatContainer>
      <ChatHeader userActive={ true } name="Tyler Stober" />
      <ChatMain>
        <ChatMessages 
          messages={[
            { person: 'reciever', name: 'Tyler Stober', message: "To me, chapter 6 is a defining memonet in this course. I'm excited and anxious at the same time." },
            { person: 'sender', name: 'Tyler Rejman', message: 'This is the message' },
            { person: 'reciever', name: 'Tyler Stober', message: "To me, chapter 6 is a defining memonet in this course. I'm excited and anxious at the same time." },
            { person: 'sender', name: 'Tyler Rejman', message: 'I like turtles, squirrels, frogs, and other stuff.' },
            { person: 'reciever', name: 'Tyler Stober', message: "To me, chapter 6 is a defining memonet in this course. I'm excited and anxious at the same time." },
          ]}
        />
        <ChatInput />
      </ChatMain>
    </ChatContainer>
    
  )
}
