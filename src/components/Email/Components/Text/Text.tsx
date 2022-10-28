import React from 'react'
import { Spacing } from '@email'

const TextStyles = {
  fontFamily: 'Labil Grotesk',
  lineHeight: 1.3
}

const TextLarge = {
  ...TextStyles,
  fontSize: 20,
  lineHeight: 1.4
}

const TextMedium = {
  ...TextStyles,
  fontSize: 18,
  lineHeight: 1.4
}

const TextSmall = {
  ...TextStyles,
  fontSize: 14,
  lineHeight: 1.4
}

// -------------- Typescript declarations -------------- //

interface TextProps {
  fontSize?: 'large' | 'medium' | 'small'
  children: React.ReactNode
  bold?: boolean
  spacing?: 'large' | 'medium' | 'small'
}

// ---------- This is the end of declarations ---------- //

export const Text = ({
    fontSize,
    children,
    bold,
    spacing
  }: TextProps ) => {
  
  return(

    <>
      { spacing ? (

        <Spacing {...{ spacing }}>
          <div 
            style={ 
              fontSize == 'large' ? TextLarge :
              fontSize == 'medium' ? TextMedium :
              fontSize == 'small' ? TextSmall :
              TextStyles  
            }
          >
            <p>{ bold ? ( <strong>{ children }</strong> ) : <>{ children }</> }</p>
          </div>
        </Spacing>

      ) : (

        <div 
          style={ 
            fontSize == 'large' ? TextLarge :
            fontSize == 'medium' ? TextMedium :
            fontSize == 'small' ? TextSmall :
            TextStyles  
          }
        >
          <p>{ bold ? ( <strong>{ children }</strong> ) : <>{ children }</> }</p>
        </div>

      )}
    </>
    
  )
}
