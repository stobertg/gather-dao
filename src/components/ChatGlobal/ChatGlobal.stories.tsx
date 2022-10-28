import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChatGlobal } from '@components'

const story = {
  title: 'modules/ChatGlobal',
  component: ChatGlobal,
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

  <ChatGlobal currentChats={[]} />
  
)
