import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Td } from '@email';

const story = {
  title: 'email/foundation/Td',
  component: Td
}
export default story

export const Primary = () => (
  <Td>This is some content</Td>
)

