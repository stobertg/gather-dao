import React from 'react'
import { styled } from '@theme'
import { truncateCryptoAddress } from '../../../lib/utils'
import { Heading } from '@components'

// For the name of the user attached with the avatar, on the right side of the container
// This holds the name, username, or crypto address

const AvatarName = styled('span', {
  position: 'relative',
  width: '100%',
  whiteSpace: 'nowrap',

  // Here we create a variant for the text within the Avatar to be stacked
  // By default the text layout is horizontal

  variants: {
    nameSize: {
      l0: { fontSize: '$s0' }
    },

    layout: {
      stacked: { 
        'div:first-child': { marginBottom: 3 }
      }
    }
  }
})

const TimeStamp = styled('div', {
  position: 'relative',
  marginTop: 8,
  color: '$gray400',
  fontFamily: '$sansSerif',
  fontSize: '$s0',

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

  const AvatarBase = () => {
    return(
      <>
        { 
          name ? ( 
            <>
              { 
                notBold ? ( <><Heading title={ firstName } /><Heading title={ lastName } /></> )
                : layout == 'stacked' ? ( 
                  <>
                    <Heading size="l0" color="gray" font="serif" title={ firstName } />
                    <Heading size="l1" heavy title={ lastName } />
                  </> 
                ) 
                : ( <Heading heavy title={`${ firstName } ${ lastName }`} /> )
              }
            </> 
          ) 
          : userName ? ( <Heading heavy title={ userName } /> ) 
          : ( <strong>{ truncateCryptoAddress( cryptoAddress ) }</strong> )
        }
      </>
    )
  }
  
  return(

    <>
      { nameOnly ? (

        <AvatarName {...{ layout, nameSize }}>
          <AvatarBase />
        </AvatarName>

      ) : (
        <>
          { nameHidden ? null : (
            <AvatarName {...{ layout, nameSize }}>
              <AvatarBase />
              { date ? ( <TimeStamp><span>{ date }</span><span>{ timeStamp }</span></TimeStamp> ) : null }
              { active ? ( <TimeStamp>Active now</TimeStamp> ) : null }
            </AvatarName> 
          )}
        </>
      )}
    </>

  )
}
