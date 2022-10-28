import React from 'react'
import { styled } from '@theme'

const ColorWrap = styled('span', {
  color: '$blue500'
})

// -------------- Typescript declarations -------------- //

interface CodeBlueProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CodeBlue = ({
    children
  }: CodeBlueProps ) => {
  
  return(

    <ColorWrap>{ children }</ColorWrap>
    
  )
}
