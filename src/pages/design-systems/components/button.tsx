import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Button, Heading, StageBlocks, StageBlockRow, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Button"
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
          <StageBlocks
            columns="5"
            titles={[
              { title: 'Text' },
              { title: 'Primary' },
              { title: 'Secondary' },
              { title: 'Danger' },
              { title: 'Disabled' }
            ]}
          >

            <StageBlockRow>
              <div><Button title="Action" /></div>
              <div><Button variant="primary" title="Action" /></div>
              <div><Button variant="secondary" title="Action" /></div>
              <div><Button variant="danger" title="Action" /></div>
              <div><Button variant="disabled" title="Action" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Button icon="config" title="Action" /></div>
              <div><Button icon="plus-circle" variant="primary" title="Action" /></div>
              <div><Button icon="plus-circle" variant="secondary" title="Action" /></div>
              <div><Button icon="trash" variant="danger" title="Action" /></div>
              <div><Button icon="download" variant="disabled" title="Action" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Button iconPlacement="right" icon="config" title="Action" /></div>
              <div><Button iconPlacement="right" icon="plus-circle" variant="primary" title="Action" /></div>
              <div><Button iconPlacement="right" icon="plus-circle" variant="secondary" title="Action" /></div>
              <div><Button iconPlacement="right" icon="trash" variant="danger" title="Action" /></div>
              <div><Button iconPlacement="right" icon="download" variant="disabled" title="Action" /></div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Button</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Action"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>icon</CodeBlue>=<CodeOrange>"icon-name"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>iconPlacement</CodeBlue>=<CodeOrange>"right"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>variant</CodeBlue>=<CodeOrange>"primary" | "secondary" | "danger" | "disabled"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>onClick</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeOrange>&#40;&#41;</CodeOrange><CodeBlue>&#61;&#62;</CodeBlue>&nbsp;<CodeOrange>function</CodeOrange>&nbsp;<CodeBlue>&#125;</CodeBlue>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>pageLink</CodeBlue>=<CodeOrange>"/path-to-internal-page"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>href</CodeBlue>=<CodeOrange>"https://url-to-external-site"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
