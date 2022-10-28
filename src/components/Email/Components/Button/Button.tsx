import React from 'react'
import { Spacing } from '@email'

const ButtonStyles = {
  display: 'inline-block',
  fontSize: 15,
  fontFamily: 'Labil Grotesk',
  padding: '16px 20px',
  borderRadius: 8,
  color: '#4967e5'
}

const ButtonPrimary = {
  ...ButtonStyles,
  backgroundColor: '#150050',
  color: '#fff'
}

const ButtonSecondary = {
  ...ButtonStyles,
  border: '1px solid #4967E5'
}

const NoStyle = {
  fontFamily: 'Labil Grotesk',
  color: '#4967e5'
}

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  spacing?: 'small' | 'medium' | 'large'
  href?: string
  title: string
  variant?: 'primary' | 'secondary'
}

// ---------- This is the end of declarations ---------- //

export const Button = ({
    spacing,
    href,
    title,
    variant
  }: ButtonProps ) => {

  const ButtonBase = () => {
    return(
      <Spacing {...{ spacing }}>
        <strong 
          style={ 
            variant == 'primary' ? ButtonPrimary :
            variant == 'secondary' ? ButtonSecondary :
            NoStyle
          }
        >
          { title }
        </strong>
      </Spacing>
    )
  }
  
  return(

    <>
      { href 
        ? ( <a style={{ display: 'inline-block' }} href={ href }><ButtonBase /></a> ) 
        : ( <><ButtonBase /></> )
      }
    </>
    
  )
}
