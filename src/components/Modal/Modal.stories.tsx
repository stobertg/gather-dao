import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from '@components'

const story = {
  title: 'atoms/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  argTypes: {}
}
export default story

export const Full = () => ( <Modal /> )
