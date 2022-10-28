import React from 'react'
import { styled } from '@theme'
import { LogoMark } from './LogoMark'
import { WordMark } from './WordMark'

const LogoWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  height: '100%',

  '> *:first-child': {
    height: '100%'
  },

  '> *:not(:first-child)': {
    marginLeft: 12,
    height: '70%'
  }
})

interface LogoProps {
  color?: 'light' | 'dark'
  wordMarkColor?: 'light' | 'dark'
}

export const LogoFull = ({ color, wordMarkColor }:LogoProps) => {
  return(

    <LogoWrap>
      <LogoMark {...{ color }} />
      <WordMark color={ color || wordMarkColor } />
    </LogoWrap>

  )
}