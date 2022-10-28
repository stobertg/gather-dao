import React from 'react'
import { styled } from '../../../../stitches.config'
import { Avatar, Button } from '@components'

// For the master container of the chat header
// This sits on top of the global chat container, that is always fixed position on the bottom right of the site

const HeaderContain = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10,

  // For the styling of the frosted glass and gray overlay
  // This allows for the messages to be shown behind the header background, subtly 

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  // For the styling of the froasted glass

  '&:before': {
    backdropFilter: 'blur( 4px )',
    zIndex: 0,
  },

  // For the gray overlay, on top of the frosted glass

  '&:after': {
    background: '#2c2b30',
    opacity: 0.8,
    zIndex: 1
  }
})

// For the container of all of the content that lives within the header
// This contains the Avatar on the left and the action buttons on the right of the container

const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '16px 0',
  zIndex: 2
})

// For the container of the header actions on the right side of the container
// This holds the minimize, video, and close button

const HeaderActions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative'
})

// -------------- Typescript declarations -------------- //

interface ChatHeaderProps {
  name?: string
}

// ---------- This is the end of declarations ---------- //

export const ChatHeader = ({
    name
  }: ChatHeaderProps ) => {
  
  return(

    <HeaderContain>
      <HeaderContent>
        <Avatar active name={ name } nameSize="l0" />

        <HeaderActions>
          <Button variant="icon" icon="minus-circled" />
          <Button variant="icon" icon="video" />
          <Button variant="icon" icon="cross-1" />
        </HeaderActions>
      </HeaderContent>
    </HeaderContain>
    
  )
}
