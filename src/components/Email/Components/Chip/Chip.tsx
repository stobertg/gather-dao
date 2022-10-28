import React from 'react'
import { Spacing } from '@email'

const ChipStyles = {
  display: 'inline-block',
  background: '#ffcc95',
  borderRadius: 9999,
  padding: '12px 20px',
  color: '#000',
  fontSize: 14,
  fontFamily: 'Labil Grotesk'
}

// -------------- Typescript declarations -------------- //

interface ChipProps {
  title: string | React.ReactNode
  spacing?: 'large' | 'medium' | 'small'
}

// ---------- This is the end of declarations ---------- //

export const Chip = ({
    title,
    spacing
  }: ChipProps ) => {
  
  return(

    <Spacing {...{ spacing }}>
      <div style={ ChipStyles }><strong>{ title }</strong></div>
    </Spacing>

  )
}
