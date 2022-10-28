import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, List, Form, Heading, Chip, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Font Sizes"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=3162%3A8812"
          storybookLink="https://ui.joinforma.com/?path=/story/forms-button--primary"
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
          <List spacing="l1" decoration="dividers">
            <li><Heading size="l10" title="Labil Grotesk 64px" /> <Chip title="$s10" /></li>
            <li><Heading size="l9" title="Labil Grotesk 56px" /></li>
            <li><Heading size="l8" title="Labil Grotesk 44px" /></li>
            <li><Heading size="l7" title="Labil Grotesk 36px" /></li>
            <li><Heading size="l6" title="Labil Grotesk 28px" /></li>
            <li><Heading size="l5" title="Labil Grotesk 24px" /></li>
            <li><Heading size="l4" title="Labil Grotesk 22px" /></li>
            <li><Heading size="l3" title="Labil Grotesk 18px" /></li>
            <li><Heading size="l2" title="Labil Grotesk 17px" /></li>
            <li><Heading size="l1" title="Labil Grotesk 14px" /></li>
            <li><Heading size="l0" title="Labil Grotesk 12px" /></li>
          </List>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Heading</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>bold</CodeBlue>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Title"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>"l0" | "l1" | "l2" | "l3" | "l4" | "l5" | "l6" | "l7" | "l8" | "l9" | "l10"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>color</CodeBlue>=<CodeOrange>"white" | "gray" | "indigo"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
