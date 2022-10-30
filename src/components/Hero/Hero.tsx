import React from 'react'
import { styled } from '@theme'
import { Heading, Hex, HexContainer } from '@components'

// For the master container of the hero component
// This will always hold the image, but more often has the hex image on the bottom of the container

const HeroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
})

const HeroImage = styled('figure', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  maxHeight: 350,
  borderRadius: '$r2',
  overflow: 'hidden',

  // For the slant on the bottom of the hero image

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: -100,
    width: '110%',
    height: 200,
    background: '$siteBg',
    transform: 'rotate( -10deg )'
  }
})

const HeroBottom = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  left: 0,
  bottom: 0
})

const HeroIntro = styled('div', {
  position: 'relative',
  maxWidth: 700,
  width: '100%',
  margin: '50px auto',
})

const HeroHairline = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 20,
  paddingBottom: 24,
  color: '$gray200',

  // For the line divider on the bottom of the container
  // This is used to seperate the hairline between the title

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 50,
    height: 1,
    background: '$gray700'
  }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  title?: string
  datePosted?: string
  image: string
  imageAlt: string
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
    title,
    datePosted,
    image,
    imageAlt
  }: HeroProps ) => {
  
  return(

    <>
      <HeroWrap>
        <HeroImage><img src={ image } alt={ imageAlt } /></HeroImage>
        <HeroBottom><HexContainer /></HeroBottom>
      </HeroWrap>

      <HeroIntro>
        { datePosted ? ( <HeroHairline><Heading title={`Date posted: ${ datePosted }`} /></HeroHairline> ) : null }
        <Heading heavy size="l7" {...{ title }} />
      </HeroIntro>
    </>
    
  )
}
