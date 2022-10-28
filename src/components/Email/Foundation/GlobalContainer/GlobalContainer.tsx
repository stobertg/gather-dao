import React from 'react'
import { Tbody, Footer } from '@email'

const TableStyles = {
  display: 'table',
  maxWidth: 560,
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#fff5e5'
}

// -------------- Typescript declarations -------------- //

interface GlobalContainerProps {
  supportInFooter?: boolean
  children: React.ReactNode
  withoutFooter?: boolean
}

// ---------- This is the end of declarations ---------- //

export const GlobalContainer = ({
    children,
    withoutFooter
  }: GlobalContainerProps ) => {
  
  return(

    <table style={{ ...TableStyles }}>
      <Tbody>
        { children }
        <Footer {...{ withoutFooter }} />
      </Tbody>
    </table>
    
  )
}
