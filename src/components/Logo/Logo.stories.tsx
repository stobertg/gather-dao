import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from '@components'

const story = {
  title: 'atoms/Logo',
  component: Logo,
  parameters: { layout: 'centered' },
  argTypes: {}
}
export default story

export const Full = () => ( <Logo variant="logo-full" size="l1" /> )
export const LogoMark = () => ( <Logo variant="logo-mark" size="l1" /> )
export const WordMark = () => ( <Logo variant="word-mark" size="l0" /> )
