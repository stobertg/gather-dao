import React from 'react'
import { LeftNav } from '@components'

const story = {
  title: 'atoms/LeftNav',
  component: LeftNav,
  layout: 'fullscreen',
  argTypes: {}
}

export default story
export const Primary = () => ( 

  <LeftNav 
    links={[
      { href: '/', title: 'This is the title' },
      { href: '/', title: 'This is the title' },
      { href: '/', title: 'This is the title' },
      { href: '/', title: 'This is the title' }
    ]}
  />

)
