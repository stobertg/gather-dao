import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacing } from '@email';

const story = {
  title: 'email/foundation/Spacing',
  parameters: { layout: 'centered' },
  component: Spacing
}
export default story

export const Primary = () => (
  <Spacing>This is some content</Spacing>
)

