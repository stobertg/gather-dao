import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '@theme'
import { Heading, Button } from '@components'

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

// For the container of the image on the left of the container
// This holds the profile image within the center of a circled container

const Avatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  minWidth: 32,
  width: 32,
  minHeight: 32,
  height: 32,
  userSelect: 'none',
  color: '$siteBg',

  '&:hover': {
    '> div:last-child': { transform: 'scale( 1, 1 )' }
  },
  
  // If there is a name or username attached to avatar
  // This would always be to the right of the image or the fallback initials

  '+ span': { marginLeft: 10 },

  // This is unused at the moment but adding support for the different sizes of the avatar image
  // We can add more sizes by using the level theory to

  variants: {
    size: {
      l0: { width: 32, minWidth: 32, height: 32, minHeight: 32 },
      l1: { width: 44, minWidth: 44, height: 44, minHeight: 44 }
    }
  }
})

// For the styling of the image within the AvatarImage master container
// This positions the image within the center of the container, taking up the full width and height

const Image = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
})

// For the fallback of the profile image
// This is for when the image is not present and the fallback displays the initals of the user

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  fontFamily: '$sansSerif',
  color: '$black',
  lineHeight: 1,
  fontWeight: 500,
  borderRadius: '50%'
})

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

const ChatDismiss = styled('div', {
  position: 'absolute',
  top: -2,
  right: -2,
  transition: '$s1',
  transform: 'scale( 0, 0 )'
})

const ActiveIndicator = styled('span', {
  position: 'absolute',
  bottom: -2,
  right: -2,
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: '$green',
  border: '2px solid $gunMetal'
})

// -------------- Typescript declarations -------------- //

interface AvatarImageProps {
  size?: 'l0' | 'l1'
  layout?: 'stacked'
  image?: string
  name?: string
  userName?: string
  cryptoAddress?: any
  active?: boolean
  chatThumb?: boolean
}

// ---------- This is the end of declarations ---------- //

export const AvatarImage = ({
    image, // Optional - for the image of the user
    name, // Optional - Supporting the name of the user
    userName, // Optional - Supporting the username of the user
    cryptoAddress, // Optional - Supporting the user to be identified by their crypto address
    size, // Optional - For the size of the image container of the user
    active,
    chatThumb
  }:AvatarImageProps) => {

  const fullName = name ? name : null
  const firstName = fullName?.split(' ')[0]
  const lastName = fullName?.split(' ')[1]
  
  return(

    <Avatar {...{ size }}>
      <Image src={ image } alt={ name } />
      <AvatarFallback delayMs={600}>
        { 
          name ? ( <>{ firstName?.[0] }{ lastName?.[0] }</> ) 
          : userName ? ( <Heading title={ userName[0] } bold /> ) 
          : ( <>{ cryptoAddress[0] }</> )
        }
      </AvatarFallback>
      
      { chatThumb ? ( <ChatDismiss><Button icon="cross-1" /></ChatDismiss> ) : null}
      { active ? ( <ActiveIndicator /> ) : null }
    </Avatar>

  )
}
