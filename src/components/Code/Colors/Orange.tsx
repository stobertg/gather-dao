import React from 'react'
import { styled } from '@theme'

const ColorWrap = styled('span', {
  color: '$peach800'
})

// -------------- Typescript declarations -------------- //

interface CodeOrangeProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CodeOrange = ({
    children
  }: CodeOrangeProps ) => {
  
  return(

    <ColorWrap>{ children }</ColorWrap>
    
  )
}
