import React from 'react';
import { SiteContainer, Block } from '@components'
import { Intro, Heading, Text, Image } from '@email';

const story = {
  title: 'email/components/Intro',
  parameters: { layout: 'centered' },
  component: Intro
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Intro>
        <Heading 
          size="large" 
          title={ <>Jane, treat yourself to <span style={{ color: '#fa9bfa' }}>reinvigorate your body, mind, and soul</span></> } 
        />

        <Image spacing="small" src="/illustration/why-switch.png" alt="Forma Illustration" />

        <Text spacing="small">
          We have hand picked few top quality eligible wellness products with great discounts.   
        </Text>
      </Intro>
    </Block>
  </SiteContainer>
  

)

