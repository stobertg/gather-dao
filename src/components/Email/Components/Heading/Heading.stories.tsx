import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '@email';

const story = {
  title: 'email/components/Heading',
  parameters: { layout: 'centered' },
  component: Heading
}
export default story

export const Default = () => ( <Heading bold title="This is the title" /> )
export const DefaultUnbolded = () => ( <Heading title="This is the title" /> )
export const Large = () => ( <Heading bold size="large" title="This is the title" /> )
export const Medium = () => ( <Heading bold size="medium" title="This is the title" /> )
export const Small = () => ( <Heading bold size="small" title="This is the title" /> )
export const tiny = () => ( <Heading bold size="tiny" title="This is the title" /> )

