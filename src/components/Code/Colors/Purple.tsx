import React from 'react'
import { styled } from '@theme'

const ColorWrap = styled('span', {
  color: '#d974d4'
})

// -------------- Typescript declarations -------------- //

interface CodePurpleProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CodePurple = ({
    children
  }: CodePurpleProps ) => {
  
  return(

    <ColorWrap>{ children }</ColorWrap>
    
  )
}
