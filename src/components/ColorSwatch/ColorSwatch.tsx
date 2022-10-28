import React from 'react'
import { styled } from '@theme'
import { List, Heading } from '@components'
import { Swatch } from './Parts/Swatch'
import { colors } from '../../theme/parts'

const ColorWrap = styled('div', {

  li: {
    padding: '12px 0',
    borderBottom: '1px solid $border',

    // Here we add a botder to the top of the first child

    '&:first-child': {
      borderTop: '1px solid $border'
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ColorSwatchProps {
  border?: boolean
  colorSwatches: {
    color: string
    title: string
    hexCode: string
    text?: boolean
    border?: boolean
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ColorSwatch = ({
    colorSwatches,
    border
  }: ColorSwatchProps ) => {
  
  return(

    <ColorWrap>
      <List>
        { colorSwatches.map(( swatch, i ) => (
          
          <li key={`swatch-${ i }`}>
            <Swatch
              border={ swatch.border || border }
              text={ swatch.text }
              bgColor={ swatch.color }
              title={ swatch.title }
              hexCode={ swatch.hexCode }
            />
          </li>

        ))}
      </List>
    </ColorWrap>
    
  )
}
