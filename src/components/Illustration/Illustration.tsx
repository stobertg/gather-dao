import React from 'react'
import { styled } from '@theme'

const IllusWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  position: 'relative',

  variants: {
    size: {
      l0: {},
      l1: { width: 72, height: 72 },
      l2: {},
      l3: {}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IllustrationProps {
  image: string
  size?: 'l0' | 'l1' | 'l2' | 'l3'
}

// ---------- This is the end of declarations ---------- //

export const Illustration = ({ 
    image,
    size
  }:IllustrationProps) => {
  
  return(

    <IllusWrap {...{ size }}>
      <img src={`/illustration/benefits/${ image }.svg`} alt={ image } />
    </IllusWrap>
      
  )
}
