import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '@components'

const story = {
  title: 'atoms/Avatar',
  component: Avatar,
  layout: 'fullscreen',
  argTypes: {
    
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  }
}
export default story

export const Default = () => ( <Avatar image="https://res.cloudinary.com/kaleidoscope/image/upload/v1649080299/web3_public/team/rene.png" name="Rene Pinnell" /> )
export const NameHidden = () => ( <Avatar nameHidden image="https://res.cloudinary.com/kaleidoscope/image/upload/v1649080299/web3_public/team/rene.png" name="Rene Pinnell" /> )
export const Fallback = () => ( <Avatar name="Rene Pinnell" /> )
