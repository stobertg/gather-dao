import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, InputSelect } from '@components'

const story = {
  title: 'forms/Select',
  component: InputSelect,
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

  <SiteContainer>
    <Block width="tiny">
      <InputSelect 
        category="Category"
        placeholder="Hello"
        options={[
          { title: 'Option One' },
          { title: 'Option Two' },
          { title: 'Option Three' },
          { title: 'Option Four' },
        ]}
      />
    </Block>
  </SiteContainer>

)
