import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Button, StageBlocks, StageBlockRow, Logo, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Logo"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=3162%3A8812"
          storybookLink="https://ui.joinforma.com/?path=/story/forms-button--primary"
          githubLink="/"
          googleDriveLink="https://drive.google.com/drive/folders/113ligu4NyP0C80rioDAxVBe4VoLCR69f"
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
            columns="3"
            titles={[
              { title: 'Full Logo' },
              { title: 'Logo Mark' },
              { title: 'Word Mark' },
            ]}
          >

            <StageBlockRow>
              <div><Logo /></div>
              <div><Logo variant="logo-mark" /></div>
              <div><Logo color="dark" size="l0" variant="word-mark" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Logo color="dark" /></div>
              <div><Logo color="dark" variant="logo-mark" /></div>
              <div><Logo color="dark" size="l0" variant="word-mark" /></div>
            </StageBlockRow>

            <StageBlockRow bgColor="dark">
              <div><Logo wordMarkColor="light" /></div>
              <div><Logo variant="logo-mark" /></div>
              <div><Logo color="light" size="l0" variant="word-mark" /></div>
            </StageBlockRow>

            <StageBlockRow bgColor="dark">
              <div><Logo color="light" /></div>
              <div><Logo color="light" variant="logo-mark" /></div>
              <div><Logo color="light" size="l0" variant="word-mark" /></div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Logo</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>homeLink</CodeBlue>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>variant</CodeBlue>=<CodeOrange>"logo-mark" | "word-mark"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>color</CodeBlue>=<CodeOrange>"light" | "dark"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>wordMarkColor</CodeBlue>=<CodeOrange>"light" | "dark"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>"l0" | "l1" | "l2"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
