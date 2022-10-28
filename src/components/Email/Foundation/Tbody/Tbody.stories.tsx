import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tbody } from '@email';

const story = {
  title: 'email/foundation/Tbody',
  component: Tbody
}
export default story

export const Primary = () => (
  <Tbody>This is some content</Tbody>
)

