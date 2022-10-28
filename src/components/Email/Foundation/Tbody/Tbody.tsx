import React from 'react'

const BodyStyles = {
  display: 'table',
  borderRadius: 16
}

const BodyWidthSmall = {
  ...BodyStyles,
  padding: '0px 50px',
}

const BodyWidthSmallIntro = {
  ...BodyStyles,
  padding: '40px 50px',
}

const BodyWidthMediumIntro = {
  ...BodyStyles,
  padding: 20,
}

const BodyWidthMedium = {
  ...BodyStyles,
  padding: "0px 20px",
}

// -------------- Typescript declarations -------------- //

interface TbodyProps {
  bgColor?: string
  width?: 'small' | 'medium' | 'smallIntro' | 'mediumIntro'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Tbody = ({
    bgColor,
    width,
    children
  }: TbodyProps ) => {
  
  return(

    <tbody 
      style={
        width == 'smallIntro' ? { ...BodyWidthSmallIntro, backgroundColor: bgColor } :  
        width == 'mediumIntro' ? { ...BodyWidthMediumIntro, backgroundColor: bgColor } :  
        width == 'small' ? { ...BodyWidthSmall, backgroundColor: bgColor } : 
        width == 'medium' ? { ...BodyWidthMedium, backgroundColor: bgColor } : 
        { ...BodyStyles, backgroundColor: bgColor }
      }
    >
      { children }
    </tbody>
    
  )
}
