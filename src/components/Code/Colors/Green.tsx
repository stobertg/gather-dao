import React from 'react'
import { styled } from '@theme'

const ColorWrap = styled('span', {
  color: '$green700'
})

// -------------- Typescript declarations -------------- //

interface CodeGreenProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CodeGreen = ({
    children
  }: CodeGreenProps ) => {
  
  return(

    <ColorWrap>{ children }</ColorWrap>
    
  )
}
