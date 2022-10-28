import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '@email';

const story = {
  title: 'email/components/Logo',
  parameters: { layout: 'centered' },
  component: Logo
}
export default story

export const Primary = () => (
  <Logo />
)

