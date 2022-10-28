import React from 'react'
import { styled } from '@theme'
import { Image, Heading } from '@components'

// For the master container of the card
// The card can have many variantions, including a lot of custom ones
// Here we solve for all types, as well as use for customization

const CardWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  padding: '24px 0',
  borderRadius: '$r2',
  border: '1px solid $border'
})

// For the content of the card - for the instance of a premade card
// If a card is custom, such as in the case of SnapShot component, it will not be wrapped in this content div

const CardContent = styled('div', {
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

interface CardProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CardBase = ({ 
    children
  }:CardProps) => {
  
  return(

    <CardWrap>
      <CardContent>{ children }</CardContent>
    </CardWrap>
      
  )
}
