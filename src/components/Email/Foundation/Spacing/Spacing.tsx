import React from 'react'

const SpacingLarge = { marginTop: 50 }
const SpacingMedium = { marginTop: 32 }
const SpacingSmall = { marginTop: 12 }

// -------------- Typescript declarations -------------- //

interface SpacingProps {
  children: React.ReactNode
  spacing?: 'small' | 'medium' | 'large' | undefined
}

// ---------- This is the end of declarations ---------- //

export const Spacing = ({
    children,
    spacing
  }: SpacingProps ) => {
  
  return(

    <div 
      // @ts-ignore: Unreachable code error
      style={
        spacing == "large" ? SpacingLarge :
        spacing == "medium" ? SpacingMedium :
        spacing == "small" ? SpacingSmall :
        null
      }
    >
      { children }
    </div>
     
  )
}
