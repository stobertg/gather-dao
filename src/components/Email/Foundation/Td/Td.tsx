import React from 'react'

// -------------- Typescript declarations -------------- //

interface TdProps {
  spacingTop?: 'small' | 'medium' | 'large'
  padding?: 'small' | 'medium' | 'large'
  sideSpacing?: 'small' | 'medium'
  marginLeft?: any
  marginRight?: any
  bgColor?: string
  width?: 'half'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Td = ({
    spacingTop,
    sideSpacing,
    marginLeft,
    marginRight,
    padding,
    bgColor,
    width,
    children
  }: TdProps ) => {
  
  return(

    <td 
      style={{ 
        display: 'inline-block', 
        width: width == 'half' ? '48.6%' : '100%',
        marginTop: spacingTop == 'small' ? 12 : spacingTop == 'medium' ? 32 : spacingTop == 'large' ? 50 :  0,
        marginLeft: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : marginLeft,
        marginRight: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : marginRight,
        padding: padding == 'small' ? 12 : padding == 'medium' ? 32 : padding == 'large' ? 50 : 0,
        backgroundColor: bgColor,
        borderRadius: 16
      }}
    >
      { children }
    </td>
    
  )
}
