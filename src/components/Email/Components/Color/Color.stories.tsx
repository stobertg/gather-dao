import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Color } from '@email';

const story = {
  title: 'email/components/Color',
  component: Color
}
export default story

export const Primary = () => (
  <Color />
)

