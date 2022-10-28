import React from 'react'
import { styled } from '../../../stitches.config'

// For the master container of the hex
// These can be combined with more than one in the Hex Container component

const HexContain = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // For the sizing and coloring of the hex graphic within the container

  svg: { 
    width: '100%',
    fill: '$white',
    zIndex: 0
  },

  '> svg': {
    filter: 'drop-shadow( 0px 1px 10px rgba( 0, 0, 0, 0.8 ))',
  },

  variants: {
    size: {
      l0: { width: 88, '> div': { width: '91%', height: '91%' }},
      l1: { width: 160 },
      l2: { width: 200 }
    },

    background: {
      gunMetal: { svg:{ fill: '$gunMetal' }},
      gray: { svg:{ fill: '$gray800' }}
    }
  }
})

// For the image that sits within the center of the hex container
// This holds the image, with the white border on the outside - image is masked by the hex graphic

const HexImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '94%',
  height: '94%',
  zIndex: 1,
  maskImage: 'url(/assets/hex.svg)',
  maskRepeat: 'no-repeat',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  variants: {
    content: {
      icon: { img: { width: '60%', height: 'auto' }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface HexProps {
  size?: 'l0' | 'l1' | 'l2'
  image: string,
  background?: 'gunMetal' | 'gray'
  content?: 'icon'
}

// ---------- This is the end of declarations ---------- //

export const Hex = ({ size, background, image, content }: HexProps) => {
  
  return(

    <HexContain {...{ size, background }}>
      <HexImage {...{ content }}>
        <img src={ image } />
      </HexImage>

      <svg viewBox="0 0 351 386.7">
        <path d="M351,260.1V126.7c0-21.4-11.4-41.2-30-52L205.5,8c-18.6-10.7-41.4-10.7-60,0L30,74.7c-18.6,10.7-30,30.5-30,52
        v133.4c0,21.4,11.4,41.2,30,52l115.5,66.7c18.6,10.7,41.4,10.7,60,0L321,312C339.6,301.3,351,281.5,351,260.1z"/>
      </svg>
    </HexContain>
    
  )
}
