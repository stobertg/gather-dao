import React from 'react'
import { Tr, Support, DownloadApp, Legal, Logo } from '@email'

interface FooterProps {
  withoutFooter?: boolean
}

export const Footer = ({ withoutFooter }:FooterProps) => {
  return(

    <>
      { withoutFooter ? null : (
        <Tr 
          spacingTop="large" 
          sideSpacing="medium"
          bgColor="#fff" 
          padding="large"
        >

          { 
            /* For the support item, to find help, or contact us. This component can be infinite, where copying a bracket info and replacing 
              the lines with what is needed
            */ 
          }

          <Support 
            supportItems={[
              { 
                href:'https://client.joinforma.com/explore/massage_envy/membership?utm_source=one_time_send&utm_medium=email&utm_campaign=user_massage', 
                title: 'Find help',
                descp: 'Visit our detailed Help Center to find answers to commonly asked questions',
                buttonTitle: 'Visit Help Center'
              },
              { 
                spacingTop: 'medium',
                href:'https://client.joinforma.com/explore/massage_envy/membership?utm_source=one_time_send&utm_medium=email&utm_campaign=user_massage', 
                title: 'Chat with us',
                descp: 'Chat with our support team online 24/7 when you login to Forma, or email support@joinforma.com',
                buttonTitle: 'Got to Forma'
              }
            ]}
          />

          { /* For the Forma logo, right above the download apps container */ }

          <Logo 
            spacingTop="large" 
            text="Employee benefits that flex to fit everyone&apos;s life" 
          />

          { /* For the container to download the app on Apple or the Google Play store */ }

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

          { /* For the contat and legal information on the bottom of the container */ }

          <Legal 
            items={[
              { title: '47000 Warm Springs Blvd, Fremont, CA 94539 USA' },
              { title: 'Copyright ©2022 Forma, Inc. All rights reserved.' },
              { title: <>Questions about this email? Contact <a style={{ textDecoration: 'underline' }} href="mailto:support@joinforma.com">support@joinforma.com</a></> }
            ]}
          />
        </Tr>
      )}
    </>
    
  )
}
