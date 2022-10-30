import React from 'react'
import { styled } from '@theme'
import { Button, Avatar, Icon } from '@components'

const MenuWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

  '> *:not(:last-child)': {
    marginRight: 8
  }
})

interface UserProps {

}

// ---------- This is the end of declarations ---------- //

export const MenuUser = ({}:UserProps) => {
  return(

    <Button>
      <MenuWrap>
        <Avatar 
          nameHidden 
          image="/monarchs/richardiii.jpg" 
          name="Tyler Stober"
        />
        <Icon size="l0" icon="chevron-down" />
      </MenuWrap>
    </Button>

  )
}
