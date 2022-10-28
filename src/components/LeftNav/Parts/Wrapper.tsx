import React from 'react'
import { styled } from '@theme'

// For the master container of the Navigation of the documation site
// This sits in a fixed position on the left side of the page and contains all of the links that make up DS

const NavContain = styled('section', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 250,
  height: '100vh',
  background: '$bgSecondary'
})

// -------------- Typescript declarations -------------- //

export interface LeftNavProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const NavWrap = ({
    children
  }: LeftNavProps ) => {
  
  return(

    <NavContain>{ children }</NavContain>
    
  )
}
