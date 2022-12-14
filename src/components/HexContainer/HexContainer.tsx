import React from 'react'
import { styled } from '@theme'
import { Hex } from '@components'

const HexContain = styled('div', {
  display: 'flex',
  position: 'relative',
  width: 202,

  '> div:last-child': {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    zIndex: 1
  }
})

// -------------- Typescript declarations -------------- //

interface HexProps {

}

// ---------- This is the end of declarations ---------- //

export const HexContainer = () => {
  
  return(

    <HexContain>
      <Hex size="l1" image="/monarchs/richardiii.jpg" imageAlt="Richard III" />
      <Hex size="l0" background="black" content="icon" image="/roses/york-rose.svg" imageAlt="Richard III" />
    </HexContain>
    
  )
}
