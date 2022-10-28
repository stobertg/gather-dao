import React from 'react';
import { SiteContainer, Block } from '@components'
import { DownloadApp } from '@email';

const story = {
  title: 'email/components/DownloadApp',
  component: DownloadApp
}
export default story

export const Primary = () => (
  <SiteContainer>
    <Block width="tiny" alignment="center">
      <DownloadApp 
        title="Benefits on the go with the Forma app"
        appProviders={[
          { 
            href: 'https://storage.googleapis.com/assets.twicapp-production.twic.ai/sendgrid/member-stipend/AnimaPackage-Web-PJgaj/img/large-reminder-expiration-download-store-ios-531F0136-FE67-41EA-9836-1446029E3D85@2x.png',
            provider: 'apple',
            title: 'Download from the App store'
          },
          { 
            href: 'https://storage.googleapis.com/assets.twicapp-production.twic.ai/sendgrid/member-stipend/AnimaPackage-Web-PJgaj/img/large-reminder-expiration-download-store-play-37D4ED26-D807-486B-B077-331820EDD4FF@2x.png',
            provider: 'google',
            title: 'Download from the Google Play store'
          }
        ]}
      />
    </Block>
  </SiteContainer>
)

