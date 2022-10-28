import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tr } from '@email';

const story = {
  title: 'email/foundation/Tr',
  component: Tr
}
export default story

export const Primary = () => (
  <Tr>This is some content</Tr>
)

