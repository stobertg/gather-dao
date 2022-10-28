import React from 'react'
import { Tr, Td, Heading, Spacing, Image } from '@email'

const WrapStyle = {
  width: '100%',
  padding: '32px 0',
  borderTop: '1px solid #eeeff2',
  borderBottom: '1px solid #eeeff2'
}

const ButtonContainer = {
  width: '100%'
}

const ButtonStyle = {
 display: 'inline-block',
 width: 125
}

// -------------- Typescript declarations -------------- //

interface DownloadAppProps {
  title: string
  appProviders: {
    href: string
    provider: string
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const DownloadApp = ({
    title,
    appProviders
  }: DownloadAppProps ) => {
  
  return(

    <Tr spacingTop="small">
      <Td>
        <div style={ WrapStyle }>
          <Heading bold size="small" title={ title } />

          <Spacing spacing="small">
            <div style={ ButtonContainer }>
              { appProviders.map(( provider, i ) => (
                <a 
                  key={`provider-${ i }`}
                  style={{ ...ButtonStyle, marginRight: 12 }} 
                  href={ provider.href }
                >
                  <Image src={`/appstore/${ provider.provider }.png`} alt={ provider.title } />
                </a>
              ))}
            </div>
          </Spacing>
        </div>
      </Td>
    </Tr>
    
  )
}
