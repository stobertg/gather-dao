import React from 'react'
import { styled } from '@theme'

// For the master container of the leaderboard chip
// This contains the rank of the person on the left, with their name and image to the right,
// And the dontaion amount to the far right. This card is currently a static component

const ChipWrap = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  padding: '8px 16px',
  background: '$bgWarning',
  borderRadius: '$r2',
  fontFamily: '$sansSerif',
  fontSize: '$s1',
  letterSpacing: 1,

  variants: {
    text: { 
      allCaps: { textTransform: 'uppercase' } 
    },

    size: {
      small: { padding: '8px 12px', fontSize: 12 }
    },

    bgColor: {
      gray: { background: '$border' },
      orange: { background: '$orange100' }
    }
  }
})

// For the content to be centered within the master container
// This holds the rank, image, and name on the left, and the donation amount on the right

const ChipContent = styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

interface ChipProps {
  size?: 'small'
  bgColor?: 'gray' | 'orange'
  text?: 'allCaps'
  title: any
}

// ---------- This is the end of declarations ---------- //

export const Chip = ({
    bgColor,
    text,
    size,
    title
  }: ChipProps ) => {
  
  return(

    <ChipWrap {...{ size, bgColor, text }}>
      <ChipContent><strong>{ title }</strong></ChipContent>
    </ChipWrap>
    
  )
}
