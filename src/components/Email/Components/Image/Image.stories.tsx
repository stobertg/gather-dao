import React from 'react'
import { SiteContainer, Block } from '@components'
import { Image } from '@email'

const story = {
  title: 'email/components/Image',
  parameters: { layout: 'centered' },
  component: Image
}
export default story

export const Default = () => ( 

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Image src="/illustration/why-switch.png" alt="Forma Illustration" />
    </Block>
  </SiteContainer>
   
)

