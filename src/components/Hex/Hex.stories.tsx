import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hex } from '@components'

const story = {
  title: 'atoms/Hex',
  component: Hex,
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

export const Primary = () => (

  <Hex size="l2" image="/monarchs/richardiii.jpeg" />
  
)
