import React from 'react'
import { styled } from '@theme'
import { AvatarImage } from './Parts/AvatarImage'
import { AvatarText } from './Parts/AvatarText'
import { Button } from '@components'

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

// For the master container of the avatar component
// This contains the image on the left of the container and the name, userName, or CryptoAddress on the right of the container

const AvatarWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  fontFamily: '$serif'
})

// -------------- Typescript declarations -------------- //

interface AvatarProps {
  size?: 'l0' | 'l1'
  layout?: 'stacked'
  image?: string
  name?: string
  userName?: string
  cryptoAddress?: any
  nameHidden?: boolean
  notBold?: boolean
  date?: string
  timeStamp?: string
  active?: boolean
  nameSize?: 'l0'
  nameOnly?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  buttonVariant?: "primary" | "secondary" | "disabled" | "danger"
  chatThumb?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Avatar = ({
    image, // Optional - for the image of the user
    name, // Optional - Supporting the name of the user
    userName, // Optional - Supporting the username of the user
    cryptoAddress, // Optional - Supporting the user to be identified by their crypto address
    size, // Optional - For the size of the image container of the user
    layout, // Optional - For the first and last name to be stacked on top on one another
    nameHidden, // Optional - If the name needs to be hidden and only the image is present
    notBold, // Optional - The title of the avatar is bold by default - this is to change it to regular
    timeStamp,
    date,
    active,
    nameOnly,
    nameSize,
    onClick,
    buttonVariant,
    chatThumb
  }:AvatarProps) => {
  
  return(

    <>
      { onClick ? (

        <Button variant={ buttonVariant } onClick={ () => onClick }>
          <AvatarWrap aria-label={ name || userName || cryptoAddress }>
            <AvatarImage {...{ image, name, userName, cryptoAddress, size, active, chatThumb }} />
            <AvatarText {...{ name, userName, cryptoAddress, layout, nameHidden, notBold, timeStamp, date, nameOnly, nameSize }} />
          </AvatarWrap>
        </Button>

      ) : (

        <AvatarWrap aria-label={ name || userName || cryptoAddress }>
          <AvatarImage {...{ image, name, userName, cryptoAddress, size, active, chatThumb }} />
          <AvatarText {...{ name, userName, cryptoAddress, layout, nameHidden, notBold, timeStamp, date, nameOnly, nameSize }} />
        </AvatarWrap>

      )}
    </>
    
  )
}
