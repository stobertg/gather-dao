import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from '@components'

const story = {
  title: 'modules/Card',
  component: Card,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <Card>This is some content</Card>
  
)
