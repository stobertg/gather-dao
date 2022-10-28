import React from 'react'
import { styled } from '@theme'
import { ReadingBar } from '@components'

const StageWrap = styled('section', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: 'calc( 100vw - 250px )',
})

const StageContent = styled('div', {
  position: 'realtive',
  maxWidth: '80%',
  width: '100%',
  minHeight: 'calc( 100vh - 200px )',
  margin: '0 auto',
  padding: '50px 0'
})

// -------------- Typescript declarations -------------- //

interface StageProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Stage = ({ children }: StageProps) => {
  return (

    <StageWrap>
      <ReadingBar />
      <StageContent>{ children }</StageContent>
    </StageWrap>
    
  )
}
