import React from 'react'
import { Spacing } from '@email'

// -------------- Typescript declarations -------------- //

interface ImageProps {
  src: string
  alt: string
  spacing?: 'large' | 'medium' | 'small'
  height?: number
}

// ---------- This is the end of declarations ---------- //

export const Image = ({
    src,
    alt,
    spacing,
    height
  }: ImageProps ) => {
  
  return(

    <Spacing {...{ spacing }}>
      <img style={{ maxWidth: '100%', height: height }} src={ src } alt={ alt } />
    </Spacing>

  )
}
