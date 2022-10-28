import React from 'react'

// -------------- Typescript declarations -------------- //

interface TrProps {
  display?: 'inline'
  sideSpacing?: 'small' | 'medium'
  marginLeft?: any
  marginRight?: any
  padding?: 'small' | 'medium' | 'large'
  spaceAndWidth?: 'small' | 'medium'
  style?: any
  width?: 'small' | 'medium'
  spacingTop?: 'large' | 'medium' | 'small'
  bgColor?: string
  children: React.ReactNode
  align?: 'center'
}

// ---------- This is the end of declarations ---------- //

export const Tr = ({
    display,
    sideSpacing,
    marginLeft,
    marginRight,
    padding,
    bgColor,
    spacingTop,
    children,
    align
  }: TrProps ) => {
  
  return(

    <tr 
      style={{ 
        display: display == 'inline' ? 'inline-block' : 'block',
        borderCollapse: 'collapse',
        marginTop: spacingTop == 'small' ? 12 : spacingTop == 'medium' ? 32 : spacingTop == 'large' ? 50 :  0,
        marginLeft: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : marginLeft,
        marginRight: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : marginRight,
        padding: padding == 'small' ? 12 : padding == 'medium' ? 32 : padding == 'large' ? 50 : 0,
        borderRadius: 16,
        backgroundColor: bgColor,
        textAlign: align == 'center' ? 'center' : 'initial' 
      }}
    >
      { children }
    </tr>
    
  )
}
