import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Heading, Text, BenefitCard, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Benefit Card"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=7361%3A11097"
          storybookLink="/"
          githubLink="/"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non erat nibh. Sed eget posuere sapien. Nullam ut 
            justo volutpat, consequat ligula et, cursus erat. Nulla vitae mattis ligula. Ut et nisi at ipsum tempor dapibus. 
            Maecenas luctus nisl leo, sit amet bibendum sem tempor commodo. Nullam quis viverra augue.
          </p>
        </ProjectInfo>
      </Block>

      <Block blockItemSpacing="l0">
        <BlockItem>
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
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>BenefitCard</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>illustration</CodeBlue>=<CodeOrange>"account-custom"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Benefit Program Name"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>chipTitle</CodeBlue>=<CodeOrange>"Program Status"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>text</CodeBlue>=<CodeOrange>"Add one to three lines of text to describe the purpose and usage of this benefit program."</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
