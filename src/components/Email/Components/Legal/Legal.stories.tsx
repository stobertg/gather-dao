import React from 'react';
import { SiteContainer, Block } from '@components'
import { Legal } from '@email';

const story = {
  title: 'email/components/Legal',
  component: Legal
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Legal 
        items={[
          { title: '47000 Warm Springs Blvd, Fremont, CA 94539 USA' },
          { title: 'Copyright ©2022 Forma, Inc. All rights reserved.' },
          { title: <>Questions about this email? Contact <a style={{ textDecoration: 'underline' }} href="mailto:support@joinforma.com">support@joinforma.com</a></> }
        ]}
      />
    </Block>
  </SiteContainer>

)

