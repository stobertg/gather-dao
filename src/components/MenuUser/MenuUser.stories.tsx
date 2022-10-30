import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuUser } from '@components'

const story = {
  title: 'atoms/MenuUser',
  component: MenuUser,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {}
}
export default story

export const Primary = () => (
  <MenuUser />
)
