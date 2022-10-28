import React from 'react'
import { styled } from '@theme'

const CodeWrap = styled('div', {
  position: 'relative',
  width: '100%',
  borderRadius: '$r2',
  background: '$white100',
  color: '$gray300',
  fontSize: '$s1'
})

const CodeContent = styled('div', {
  position: 'relative',
  width: '98%',
  margin: '0 auto',
  padding: '32px 24px',
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
  
  '*': {
    fontFamily: '$code'
  }
})

// -------------- Typescript declarations -------------- //

interface CodeProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Code = ({
    children
  }: CodeProps ) => {
  
  return(

    <CodeWrap>
      <CodeContent>{ children }</CodeContent>
    </CodeWrap>
    
  )
}
