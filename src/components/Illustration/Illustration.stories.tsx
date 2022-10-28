import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Illustration } from '@components'

const story = {
  title: 'modules/Illustration',
  component: Illustration,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <Illustration image="account-childcare" />
  
)
