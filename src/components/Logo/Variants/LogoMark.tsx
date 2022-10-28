import React from 'react'
import { styled } from '@theme'

const MarkWrap = styled('div', {
  position: 'realative',
  svg: { position: 'relative', minHeight: '100%', height: '100%' },

  variants: {
    color: {
      light: { '*': { fill: '$brandSecondary !important' }},
      dark: { '*': { fill: '$brandPrimary !important' }}
    }
  }
})

const ColorBlue = styled('circle', { fill: '#5e85fe' })
const ColorRed = styled('circle', { fill: '#ef6051' })
const ColorPink = styled('circle', { fill: '#fa9bfa' })
const ColorYellow = styled('circle', { fill: '#facf18' })
const ColorYellowElips = styled('ellipse', { fill: '#facf18' })

interface LogoProps {
  color?: 'light' | 'dark'
}

export const LogoMark = ({ color }:LogoProps) => {
  return(

    <MarkWrap {...{ color }}>
      <svg viewBox="0 0 170.7 170.7">
        <ColorBlue cx="53.8" cy="22.3" r="22.3" />
        <ColorRed cx="85.3" cy="53.8" r="22.3"/>
        <ColorBlue cx="116.9" cy="22.3" r="22.3"/>
        <ColorYellowElips transform="matrix(0.1644 -0.9864 0.9864 0.1644 -48.7137 239.2584)" cx="116.9" cy="148.4" rx="22.3" ry="22.3"/>
        <ColorPink cx="85.3" cy="116.9" r="22.3"/>
        <ColorYellow cx="53.8" cy="148.4" r="22.3"/>
        <ColorBlue cx="148.4" cy="53.8" r="22.3"/>
        <ColorPink cx="116.9" cy="85.3" r="22.3"/>
        <ColorYellowElips transform="matrix(0.1644 -0.9864 0.9864 0.1644 8.7161 244.0115)" cx="148.4" cy="116.9" rx="22.3" ry="22.3"/>
        <ColorYellow cx="22.3" cy="116.9" r="22.3"/>
        <ColorRed cx="53.8" cy="85.3" r="22.3"/>
        <ColorBlue cx="22.3" cy="53.8" r="22.3"/>
      </svg>
    </MarkWrap>

  )
}