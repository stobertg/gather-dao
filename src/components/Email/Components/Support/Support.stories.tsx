import React from 'react';
import { SiteContainer, Block } from '@components'
import { Support } from '@email';

const story = {
  title: 'email/components/Support',
  component: Support
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Support 
        supportItems={[
          { 
            href:'https://client.joinforma.com/explore/massage_envy/membership?utm_source=one_time_send&utm_medium=email&utm_campaign=user_massage', 
            title: 'Find help',
            descp: 'Visit our detailed Help Center to find answers to commonly asked questions',
            buttonTitle: 'Visit Help Center'
          },
          { 
            spacing: 'medium',
            href:'https://client.joinforma.com/explore/massage_envy/membership?utm_source=one_time_send&utm_medium=email&utm_campaign=user_massage', 
            title: 'Chat with us',
            descp: 'Chat with our support team online 24/7 when you login to Forma, or email support@joinforma.com',
            buttonTitle: 'Got to Forma'
          }
        ]}
      />
    </Block>
  </SiteContainer>

)

