import React from 'react'
import { ProjectInfo } from '@components'

const story = {
  title: 'atoms/ProjectInfo',
  component: ProjectInfo,
  argTypes: {},
}
export default story

export const Primary = () => (
  
  <ProjectInfo
    title="Benefit Card"
    figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=7361%3A11097"
    storybookLink="/"
    githubLink="/"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non erat nibh. Sed eget posuere sapien. Nullam ut 
      justo volutpat, consequat ligula et, cursus erat. Nulla vitae mattis ligula. Ut et nisi at ipsum tempor dapibus. 
      Maecenas luctus nisl leo, sit amet bibendum sem tempor commodo. Nullam quis viverra augue.
    </p>
  </ProjectInfo>

)

