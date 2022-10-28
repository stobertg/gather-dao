import React from 'react'
import { styled } from '../../../../stitches.config'
import { Button } from '@components'

// For the master container of the inout section at the bottom of the chat
// This holds the upload action on the right, input field in the center, and the send button on the right

const InputWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '13px 0px'
})

// For the contianer of the input, within the bottom container of the chat component
// This holds the text message to be sent by the sender

const Input = styled('input', {
  position: 'relative',
  width: '76%',
  padding: '12px 20px',
  background: '$black',
  borderRadius: '$pill',
  fontFamily: '$sansSerif'
})

// -------------- Typescript declarations -------------- //

interface ChatInputProps {

}

// ---------- This is the end of declarations ---------- //

export const ChatInput = ({

  }: ChatInputProps ) => {
  
  return(

    <InputWrap>
      <InputContent>
        <Button variant="icon" icon="image" />
        <Input placeholder="Aa" />
        <Button variant="icon" icon="paper-plane" />
      </InputContent>
    </InputWrap>
    
  )
}
