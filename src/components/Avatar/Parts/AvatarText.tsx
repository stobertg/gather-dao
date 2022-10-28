import React from 'react'
import { styled } from '@theme'
import { truncateCryptoAddress } from '../../../lib/utils'
import { Heading } from '@components'

/* 
  *** ReadMe ***

  The avatar component is used as a primitive from RadixUi component library. This is not used at the moment but is there for 
  scalable solution if the microsite is built out. 

  The component contains the following features: 
  • Profile image
  • Profile image fallback if no image is present
  • Name, username, or crypto address the user wants to identify as

  *** End ReadMe ***
*/

// For the name of the user attached with the avatar, on the right side of the container
// This holds the name, username, or crypto address

const AvatarName = styled('span', {
  position: 'relative',
  width: '100%',
  whiteSpace: 'nowrap',
  strong: { fontFamily: '$sansSerifBold' },

  // Here we create a variant for the text within the Avatar to be stacked
  // By default the text layout is horizontal

  variants: {
    nameSize: {
      l0: { fontSize: '$s0' }
    },

    layout: {
      stacked: { 
        span: { 
          display: 'block', 
          '&:first-child': { marginBottom: 2, color: '$gray700', fontSize: 12 }},
          '&:last-child': { fontSize: '$s0' }
      }
    }
  }
})

const TimeStamp = styled('div', {
  position: 'relative',
  marginTop: 4,
  color: '$gray700',
  fontFamily: '$sansSerif',
  fontSize: 12,

  // For the spacing 

  '*:not(:last-child)': {
    marginRight: 4
  }
})

// -------------- Typescript declarations -------------- //

interface AvatarTextProps {
  size?: 'l0' | 'l1'
  layout?: 'stacked'
  name?: string
  userName?: string
  cryptoAddress?: any
  nameHidden?: boolean
  notBold?: boolean
  date?: string
  timeStamp?: string
  nameSize?: 'l0'
  nameOnly?: boolean
  active?: boolean
}

// ---------- This is the end of declarations ---------- //

export const AvatarText = ({
    name, // Optional - Supporting the name of the user
    userName, // Optional - Supporting the username of the user
    cryptoAddress, // Optional - Supporting the user to be identified by their crypto address
    layout, // Optional - For the first and last name to be stacked on top on one another
    nameHidden, // Optional - If the name needs to be hidden and only the image is present
    notBold, // Optional - The title of the avatar is bold by default - this is to change it to regular
    timeStamp,
    date,
    active,
    nameOnly,
    nameSize
  }:AvatarTextProps) => {

  const fullName = name ? name : null
  const firstName = fullName?.split(' ')[0]
  const lastName = fullName?.split(' ')[1]
  
  return(

    <>
      { nameOnly ? (

        <AvatarName {...{ layout, nameSize }}>
          { 
            name ? ( 
              <>
                { 
                  notBold ? ( <><span>{ firstName }</span> <span>{ lastName }</span></> )
                  : layout == 'stacked' ? ( <><span>{ firstName }</span> <span><strong>{ lastName }</strong></span></> ) 
                  : ( <strong><span>{ firstName }</span> <span>{ lastName }</span></strong> )
                }
              </> 
            ) 
            : userName ? ( <Heading title={ userName } bold /> ) 
            : ( <strong>{ truncateCryptoAddress( cryptoAddress ) }</strong> )
          }
        </AvatarName>

      ) : (
        <>
          { nameHidden ? null : (
            <AvatarName {...{ layout, nameSize }}>
              { 
                name ? ( 
                  <>
                    { 
                      notBold ? ( <><span>{ firstName }</span> <span>{ lastName }</span></> )
                      : layout == 'stacked' ? ( <><span>{ firstName }</span> <span><strong>{ lastName }</strong></span></> ) 
                      : ( <strong><span>{ firstName }</span> <span>{ lastName }</span></strong> )
                    }
                  </> 
                ) 
                : userName ? ( <Heading title={ userName } bold /> ) 
                : ( <strong>{ truncateCryptoAddress( cryptoAddress ) }</strong> )
              }

              { date ? ( <TimeStamp><span>{ date }</span><span>{ timeStamp }</span></TimeStamp> ) : null }
              { active ? ( <TimeStamp>Active now</TimeStamp> ) : null }
            </AvatarName> 
          )}
        </>
      )}
    </>

  )
}
