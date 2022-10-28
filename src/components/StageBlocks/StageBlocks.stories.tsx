import React from 'react'
import { StageBlocks, StageBlockRow, Button } from '@components'

const story = {
  title: 'foundation/StageBlocks',
  component: StageBlocks,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <StageBlocks
    columns="5"
    titles={[
      { title: 'Default' },
      { title: 'Primary' },
      { title: 'Secondary' },
      { title: 'Danger' },
      { title: 'Disabled' }
    ]}
  >

    <StageBlockRow>
      <div><Button title="Action" /></div>
      <div><Button variant="primary" title="Action" /></div>
      <div><Button variant="secondary" title="Action" /></div>
      <div><Button variant="danger" title="Action" /></div>
      <div><Button variant="disabled" title="Action" /></div>
    </StageBlockRow>

    <StageBlockRow>
      <div><Button icon="config" title="Action" /></div>
      <div><Button icon="plus-circle" variant="primary" title="Action" /></div>
      <div><Button icon="plus-circle" variant="secondary" title="Action" /></div>
      <div><Button icon="trash" variant="danger" title="Action" /></div>
      <div><Button icon="download" variant="disabled" title="Action" /></div>
    </StageBlockRow>

    <StageBlockRow>
      <div><Button iconPlacement="right" icon="config" title="Action" /></div>
      <div><Button iconPlacement="right" icon="plus-circle" variant="primary" title="Action" /></div>
      <div><Button iconPlacement="right" icon="plus-circle" variant="secondary" title="Action" /></div>
      <div><Button iconPlacement="right" icon="trash" variant="danger" title="Action" /></div>
      <div><Button iconPlacement="right" icon="download" variant="disabled" title="Action" /></div>
    </StageBlockRow>
  </StageBlocks>
  
)