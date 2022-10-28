import React from 'react'
import { Tr, Image, Heading } from '@email'

const LogoMarkStyle = {
  display: 'inline-block',
  width: 32
}

const WordMarkStyle = {
  display: 'inline-block',
  width: 80,
  marginLeft: 12,
  transform: 'translateY( -25% )'
}

// -------------- Typescript declarations -------------- //

interface LogoProps {
  spacingTop?: 'small' | 'medium' | 'large'
  text?: string
  noWordMark?: boolean
  onDarkBg?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    spacingTop,
    text,
    noWordMark,
    onDarkBg
  }: LogoProps ) => {
  
  return(

    <Tr {...{ spacingTop }}>
      <div style={ LogoMarkStyle }><Image src="/global/logo/logomark.png" alt="Forma Logomark" /></div>
      
      <>
        { noWordMark ? null : (
          <>
            { onDarkBg ? (

              <>
                <div style={ WordMarkStyle }>
                  <Image src="/global/logo/wordmark-white.png" alt="Forma wordmark" />
                </div>
                { text ? <Heading spacing="small" size="tiny" title={ text } /> : null }
              </>

            ) : (

              <>
                <div style={ WordMarkStyle }>
                  <Image src="/global/logo/wordmark-indigo.png" alt="Forma wordmark" />
                </div>
                { text ? <Heading spacing="small" size="tiny" title={ text } /> : null }
              </>

            )}
          </>
        )}
      </>
    </Tr>
    
  )
}
