import React from 'react'

// -------------- Typescript declarations -------------- //

interface TheadProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Thead = ({
    children
  }: TheadProps ) => {
  
    return(

     <table>{ children }</table>
     
    )
}
