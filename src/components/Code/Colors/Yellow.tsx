import React from 'react'
import { styled } from '@theme'

const ColorWrap = styled('span', {
  color: '#ffc000'
})

// -------------- Typescript declarations -------------- //

interface CodeYellowProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CodeYellow = ({
    children
  }: CodeYellowProps ) => {
  
  return(

    <ColorWrap>{ children }</ColorWrap>
    
  )
}
