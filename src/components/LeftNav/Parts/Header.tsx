import React from 'react'
import { styled } from '@theme'
import { Logo, Input } from '@components'
import { WordMark, LogoMark } from '../../Logo/Variants'

const NavHeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$brandPrimary'
})

const NavHeaderImg = styled('div', {
  width: '50%',
  margin: '0 auto',

  img: {
    width: '100%'
  }
})

const LogoContain = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '60%',
  margin: '0 auto'
})

const NavHeaderContent = styled('div', {
  position: 'relative',
  width: '80%',
  margin: '0 auto',
  padding: '32px 0',

  // For the automated spacing between elements within the container
  // This will add the spacing to the bottom of the containers 

  '> *:not(:last-child)': {
    marginBottom: 4
  }
})

// ---------- This is the end of declarations ---------- //

export const NavHeader = () => {
  
  return(

    <NavHeaderWrap>
      <NavHeaderContent>
        <NavHeaderImg><img src="/illustration/why-switch.png" /></NavHeaderImg>
        <LogoContain><Logo wordMarkColor="light" /></LogoContain>
        {/* <Input height="small" id="search" label="Search" type="text" /> */}
      </NavHeaderContent>
    </NavHeaderWrap>
    
  )
}
