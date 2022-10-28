import React from 'react'
import { BenefitCard } from '@components'

const story = {
  title: 'atoms/BenefitCard',
  component: BenefitCard,
  argTypes: {},
}
export default story

export const Primary = () => (
  
  <BenefitCard 
    illustration="account-custom"
    title="Benefit Program Name"
    chipTitle="Program Status"
    text="Add one to three lines of text to describe the purpose and usage of this benefit program."
    links={[
      { href: '/', title: "View Account" },
      { href: '/', title: "What's Eligible" }
    ]}
    rightItems={[
      { title: '$999.99', subtitle: 'available balace' },
      { title: 'mm/dd/yyyy', subtitle: 'new funds added' }
    ]}
  />

)

