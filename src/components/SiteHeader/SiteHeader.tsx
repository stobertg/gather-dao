import React from 'react'
import { styled } from '@theme'
import { Logo, AvatarList, MenuButton } from '@components'

// For the master container of the header
// This holds a relative position 

const Header = styled('header', {
  position: 'absolute',
  width: '100vw',
  zIndex: 9000
})

// For the container for all of the content within the nav container
// This holds the logo on the left, headshots in the center, and the menu button on the right

const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  padding: '32px 0',

  '> div:nth-child( 2 )': {
    maxWidth: 930,
    width: '100%',
    overflow: 'scroll'
  },

  // Here we align the menu button to the right of the container

  '> div:last-child': {
    justifyContent: 'flex-end'
  }
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
  return(

    <Header>
      <Nav>
        <Logo />
        <AvatarList 
          layout="stacked"
          avatars={[
            { name: 'Tyler Stober' }
          ]}
        />  
      </Nav>
    </Header>

  )
}
