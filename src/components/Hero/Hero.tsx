import React from 'react'
import { styled } from '@theme'
import { Hex, HexContainer } from '@components'

// For the master container of the hero component
// This will always hold the image, but more often has the hex image on the bottom of the container

const HeroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
})

const HeroImage = styled('figure', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  maxHeight: 400,
  borderRadius: '$r2',
  overflow: 'hidden',

  // For the slant on the bottom of the hero image

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: -100,
    width: '110%',
    height: 200,
    background: '$siteBg',
    transform: 'rotate( -8deg )'
  }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  image: string
  imageAlt: string
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
    image,
    imageAlt
  }: HeroProps ) => {
  
  return(

    <HeroWrap>
      <HeroImage><img src={ image } alt={ imageAlt } /></HeroImage>
    </HeroWrap>
    
  )
}
