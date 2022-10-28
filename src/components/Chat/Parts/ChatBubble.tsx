import React from 'react'
import { styled } from '../../../../stitches.config'
import { Avatar } from '@components'

// For the master container of the messgaes 

const BubbleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  fontFamily: '$sansSerif',
  fontSize: '$s0',

  variants: {
    person: {
      sender: { 
        '> div:first-child': { background: '$majorelleBlue', marginRight: 10 }
      },
      reciever: { 
        flexDirection: 'row-reverse', 
        '> div:first-child': { background: '#47474b', marginLeft: 10 }
      }
    }
  }
})

const Message = styled('div', {
  position: 'relative',
  maxWidth: '73%',
  padding: '16px 20px',
  borderRadius: '$r2',
  lineHeight: 1.2
})

const Sender = styled('div', {
  marginBottom: 8
})

// -------------- Typescript declarations -------------- //

interface ChatBubbleProps {
  person: 'sender' | 'reciever'
  message: string
  name: string
}

// ---------- This is the end of declarations ---------- //

export const ChatBubble = ({
    person,
    message,
    name
  }: ChatBubbleProps ) => {
  
  return(

    <BubbleWrap {...{ person }}>
      <Message>{ message }</Message>
      <Sender><Avatar nameHidden {...{ name }} /></Sender>
    </BubbleWrap>
    
  )
}
