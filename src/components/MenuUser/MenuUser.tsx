import React from 'react'
import { styled } from '@theme'
import { Button, Avatar, Icon } from '@components'

const MenuWrap = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 44,
  height: 44,
  background: '$border',
  borderRadius: '50%',
})

interface UserProps {

}

// ---------- This is the end of declarations ---------- //

export const MenuUser = ({}:UserProps) => {
  return(

    <MenuWrap>
      <Avatar 
        nameHidden
        image="/monarchs/richardiii.jpg" 
        name="Tyler Stober"
      />
    </MenuWrap>

  )
}
