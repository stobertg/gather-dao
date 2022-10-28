import React from 'react'
import { StageBlockRow, Button } from '@components'

const story = {
  title: 'foundation/StageBlockRow',
  component: StageBlockRow,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <StageBlockRow>
    <div><Button title="Action" /></div>
    <div><Button variant="primary" title="Action" /></div>
    <div><Button variant="secondary" title="Action" /></div>
    <div><Button variant="danger" title="Action" /></div>
    <div><Button variant="disabled" title="Action" /></div>
  </StageBlockRow>
  
)