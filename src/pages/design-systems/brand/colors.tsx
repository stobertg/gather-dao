import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Tabs, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'
import { ColorSwatchList } from '../../components/ColorSwatch/ColorSwatchList'
import { ColorSwatchesLight } from '../../components/ColorSwatch/Parts/lightTheme'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Colors"
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
        <Tabs
          defaultTab={ 1 }
          triggers={[
            { title: 'Light Theme' },
            { title: 'All Colors' }
          ]}
          tabContent={[
            { content: <ColorSwatchesLight /> },
            { content: <ColorSwatchList /> }
          ]}
        />
      </Block>
    </SiteContainer>

  )
}

export default Page
