import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@email';

const story = {
  title: 'email/components/Button',
  parameters: { layout: 'centered' },
  component: Button
}
export default story

export const Default = () => ( <Button title="Shop Forma Store" /> )
export const Primary = () => ( <Button variant="primary" title="Only 10 left, buy now" /> )
export const Secondary = () => ( <Button variant="secondary" title="Shop Forma Store" /> )

