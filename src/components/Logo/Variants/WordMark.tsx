import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const WordWrap = styled('div', {
  display: 'inline-flex',
  position: 'relative',

  svg: { fill: '$brandPrimary' },

  variants: {
    color: {
      light: { color: '$brandSecondary' },
      dark: { color: '$brandPrimary' }
    }
  }
})

interface WordMarkProps {
  color?: 'light' | 'dark'
}

export const WordMark = ({ color }:WordMarkProps) => {
  return(

    <WordWrap {...{ color }}>
      <Heading size="l2" title="Gather" />
    </WordWrap>

  )
}