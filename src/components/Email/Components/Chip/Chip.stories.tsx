import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '@email';

const story = {
  title: 'email/components/Chip',
  parameters: { layout: 'centered' },
  component: Chip
}
export default story

export const Save10 = () => ( <Chip title="Save 10%" /> )
export const BestDeal = () => ( <Chip title="Best Deal" /> )
export const OnlyLeft = () => ( <Chip title="Only 10 left" /> )
export const BestPriceGuarenteed = () => ( <Chip title="Best Price Guarentee" /> )

