import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

const story = {
  title: 'atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    icon: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  },
}
export default story

export const Default = () => (
  <Button 
    title="Action"
  />
)

export const DefaultWithIcon = () => (
  <Button 
    icon="give"
    title="Action"
  />
)

export const Primary = () => (
  <Button 
    variant="primary"
    title="Action"
  />
)

export const Secondary = () => (
  <Button 
    variant="secondary"
    icon="give"
    title="Action"
  />
)
