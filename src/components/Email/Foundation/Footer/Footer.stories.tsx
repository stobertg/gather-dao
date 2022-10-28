import React from 'react';
import { SiteContainer, Block } from '@components'
import { Footer } from '@email';

const story = {
  title: 'email/foundation/Footer',
  component: Footer
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Footer />
    </Block>
  </SiteContainer>

)

