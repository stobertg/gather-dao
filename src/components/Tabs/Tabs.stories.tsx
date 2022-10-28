import React from 'react'
import { Tabs } from '@components'

const story = {
  title: 'atoms/Tabs',
  component: Tabs,
  argTypes: {},
}
export default story
export const Primary = () => ( 
  <Tabs
    defaultTab={ 2 }
    triggers={[
      { title: 'All Colors' },
      { title: 'Light Theme' },
      { title: 'Dark Theme' }
    ]}
    tabContent={[
      { content: 'this is some content' },
      { content: 'tab two content' },
      { content: 'this is three content' }
    ]}
  />
)

