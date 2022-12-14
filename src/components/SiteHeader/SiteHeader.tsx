import React from 'react'
import { styled } from '@theme'
import { Logo, AvatarList, MenuButton, MenuUser } from '@components'

// For the master container of the header
// This holds a relative position 

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  background: '$siteBg',
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
  padding: '12px 0',

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

const Side = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '20%',

  // For the auto spacing of any of the content within the container
  // This adds the spacing to the right of each container, except for the last container

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
  return(

    <Header>
      <Nav>
        <Side><Logo size="l2" variant="logo-mark" /></Side>
        <AvatarList 
          layout="stacked"
          direction="horizontal"
          avatars={[
            { name: 'Jamal Alkirnawi' },
            { name: 'Diana Alroker' },
            { name: 'Miriam Famau' },
            { name: 'Lisa Dush' },
            { name: 'Dieudomne Allo' },
            { name: 'Raymond Richard' },
            { name: 'Ashley Ozburn' },
          ]}
        />  
        <Side>
          <MenuButton />
          <MenuUser />
        </Side>
      </Nav>
    </Header>

  )
}
