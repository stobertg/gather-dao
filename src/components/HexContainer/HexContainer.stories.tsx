import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, HexContainer } from '@components'

const story = {
  title: 'modules/HexContainer',
  component: HexContainer,
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

export const Default = () => (

  <SiteContainer>
    <Block width="small" alignment="center">
      <HexContainer />
    </Block>
  </SiteContainer>
  
)
