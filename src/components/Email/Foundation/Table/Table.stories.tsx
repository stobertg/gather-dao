import React from 'react';
import { Table } from '@email';

const story = {
  title: 'email/foundation/Table',
  parameters: { layout: 'centered' },
  component: Table
}
export default story

export const Primary = () => (
  <Table>This is some content</Table>
)

