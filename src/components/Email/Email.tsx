import React from 'react'
import { GlobalContainer } from '@email'

// -------------- Typescript declarations -------------- //

interface EmailProps {
  contentWidth?: 'small' | 'medium'
  children: React.ReactNode
  supportInFooter?: boolean
  withoutFooter?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Email = ({
    contentWidth,
    children,
    supportInFooter,
    withoutFooter
  }: EmailProps ) => {
  
  return(
      
    <GlobalContainer {...{ contentWidth, supportInFooter, withoutFooter }}>
      { children }
    </GlobalContainer>
    
  )
}
