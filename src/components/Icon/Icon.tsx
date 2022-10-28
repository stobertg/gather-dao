import React from 'react'
import { styled } from '@theme'

const withBg = {
  color: '$textPrimary',
  svg: { width: '60%' }
}

// For the master container of the icons
// Icons are used in various parts of the size, such as buttons, steps, static, ect

const IconWrap = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 30,
  height: 30,
  borderRadius: '50%',
  pointerEvents: 'none',

  // For the size of the svg to sit in the center of the container
  // This also changes the color to inheit the parent color 

  svg: {
    position: 'absolute',
    width: '118%',
    fill: 'CurrentColor'
  },

  // For the different variants supporting the icon component
  // This conains changes to the size and background of the icon

  variants: {
    size: {
      l0: { width: 16, height: 16 },
      l1: { width: 24, height: 24 },
      l2: { width: 40, height: 40 },
      l3: { width: 52, height: 52 }
    },

    // For the changes of the background of the icon
    // Here the icon can sit in different types on containers, such as aa solid or outlined background

    bgColor: {
      primary: { background: '$bgPrimary', ...withBg },
      secondary: { background: '$bgSecondary', ...withBg },
      tertiary: { background: '$bgTertiary', ...withBg },
      divider: { background: '$bgDivider', ...withBg },
      dark: { background: '$bgDark', ...withBg },
      information: { background: '$bgInformation', ...withBg },
      warning: { background: '$bgWarning', ...withBg },
      negative: { background: '$bgNegative', ...withBg },
      positive: { background: '$bgPositive', ...withBg }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IconProps {
  size?: 'l0' | 'l1' | 'l2' | 'l3'
  bgColor?: 'primary' | 'secondary' | 'tertiary' | 'divider' | 'dark' | 'information' | 'warning' | 'negative' | 'positive'
  icon?: string
  iconAlt?: string
}

// ---------- This is the end of declarations ---------- //

export const Icon = ({
    size,
    bgColor,
    icon
  }: IconProps ) => {
  
    return(

      <IconWrap {...{ size, bgColor }}>
        <svg><use xlinkHref={ `/global/icons/icons.svg#${ icon }` } xlinkTitle={ icon } /></svg>
      </IconWrap>
     
    )
}
