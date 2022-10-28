import React from 'react'
import { styled } from '../../../stitches.config'
import { Avatar, List, Button } from '@components'

const AvatarWrap = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface AvatarListProps {
  layout?: 'stacked'
  direction?: 'horizontal'
  spacing?: 'l0' | 'l1' | 'l1r' | 'l2' | 'l2r'
  namesHidden?: boolean
  nameOnly?: boolean
  avatars: {
    active?: boolean
    size?: 'l0' | 'l1'
    image?: string
    imageAlt?: string
    name?: string
    userName?: string
    cryptoAddress?: any
    nameHidden?: boolean
    notBold?: boolean
  }[]
}

// ---------- This is the end of declarations ---------- //

export const AvatarList = ({
    layout,
    spacing,
    direction,
    namesHidden,
    nameOnly,
    avatars
  }:AvatarListProps) => {
  
  return(

    <AvatarWrap>
      <List {...{ direction, spacing }}>
        { avatars.map(( avatar, i ) => (

          <li key={`avatar-${ i }`}>
            <Button>
              <Avatar 
                active={ avatar.active }
                image={ avatar.image } 
                imageAlt={ avatar.imageAlt } 
                name={ avatar.name } 
                userName={ avatar.userName } 
                cryptoAddress={ avatar.cryptoAddress} 
                size={ avatar.size } 
                layout={ layout } 
                nameOnly={ nameOnly }
                nameHidden={ namesHidden }
              />
            </Button>
          </li>

        ))}
      </List>
    </AvatarWrap>
    
  )
}
