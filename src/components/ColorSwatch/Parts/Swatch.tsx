import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { colors } from '../../../theme/parts'

const SwatchWrap = styled('div', {
  display: 'flex',
  flexDirction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'realtive'
})

const SwatchTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
})  

const SwatchColor = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 50,
  height: 50,
  borderRadius: '50%',
  marginRight: 16
})

const SwatchHsl = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '12px 24px',
  borderRadius: '$pill',
  background: '$blue50'
})

const SwatchText = styled('span', {
  position: 'absolute',
  color: '$indigo600'
})

// -------------- Typescript declarations -------------- //

interface SwatchProps {
  bgColor: string
  title: string
  hexCode: string
  border?: boolean
  text?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Swatch = ({
    title,
    bgColor,
    border,
    text,
    hexCode
  }: SwatchProps ) => {
  
  return(
          
    <SwatchWrap>
      <SwatchTitle>
        <SwatchColor style={{ border: border ? `1px solid ${ bgColor ? bgColor : colors.indigo100 }` : 'none', backgroundColor: border ? 'none' : bgColor }}>
          { text ? ( <SwatchText>Aa</SwatchText> ) : null }
        </SwatchColor>
        <Heading bold title={ title } />
      </SwatchTitle>
      <SwatchHsl><Heading size="l1" title={ hexCode } /></SwatchHsl>
    </SwatchWrap>

  )
}
