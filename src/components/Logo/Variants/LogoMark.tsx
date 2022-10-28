import React from 'react'
import { styled } from '@theme'

// For the master container of the Logo Mark
// This is the logo of the G for Gather, usually sitting in the top left of the header or within the footer

const MarkWrap = styled('div', {
  position: 'realative',
  svg: { position: 'relative', minHeight: '100%', height: '100%' },
})

// For the colors of each part of the G logo
// This can either be orange, gray, or the shadow upon the merger of the gray and orange parts of the logo

const ColorGray = styled('polygon', { fill: '#545554' })
const ColorOrange = styled('polygon', { fill: '#f37223' })
const ColorShadow = styled('polygon', { fill: '#bd5727' })

// ---------- This is the end of declarations ---------- //

export const LogoMark = () => {
  return(

    <MarkWrap>
      <svg viewBox="0 0 345.4 409.2">
        <ColorGray points="0.2,102.3 0.2,184.3 173.1,82.7 345.4,183.6 345.4,101.6 173.1,0"/>
        <ColorOrange points="345.4,307.6 173.1,409.2 0,306.9 0.1,159.1 70.9,117.7 70.8,266.5 173.1,326.5 275.6,266.5 230.7,240.3 230.7,158.4 345.3,225.7"/>
        <ColorShadow points="345,307.4 275.6,266.6 260.3,275.8"/>
        <ColorShadow points="0.2,184.1 70.8,141.2 70.8,158.6"/>
      </svg>
    </MarkWrap>

  )
}