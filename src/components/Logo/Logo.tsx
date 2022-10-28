import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { LogoFull, LogoMark, WordMark } from './Variants/'

const LogoWrap = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  height: 32,

  img: {
    height: '100%',
    width: 'auto'
  },

  variants: {
    size: {
      l0: { height: 24 },
      l1: { height: 32 },
      l2: { height: 40 }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface LogoProps {
  variant?: 'logo-mark' | 'logo-full' | 'word-mark'
  color?: 'light' | 'dark'
  wordMarkColor?: 'light' | 'dark'
  size?: 'l0' | 'l1' | 'l2'
  homeLink?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    variant,
    color,
    wordMarkColor,
    size,
    homeLink
  }: LogoProps ) => {
  
  return(

    <>
      { homeLink ? (

        <Link href="/">
          <a>
            <LogoWrap {...{ size }}>
              { 
                variant == 'logo-mark' ? <LogoMark /> : 
                variant == 'word-mark' ? <WordMark {...{ color }} /> : 
                <LogoFull {...{ color, wordMarkColor }} /> 
              }
            </LogoWrap>
          </a>
        </Link>

      ) : (
        
        <LogoWrap {...{ size }}>
          { 
            variant == 'logo-mark' ? <LogoMark /> : 
            variant == 'word-mark' ? <WordMark {...{ color }} /> : 
            <LogoFull {...{ color, wordMarkColor }} /> 
          }
        </LogoWrap>

      )}
    </>

  )
}
