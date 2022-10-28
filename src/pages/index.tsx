import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, Heading, Text, ColorSwatch, Tabs } from '@components'
import { ColorSwatchList } from '../components/ColorSwatch/ColorSwatchList'
import { ColorSwatchesLight } from 'src/components/ColorSwatch/Parts/lightTheme'

const Home: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block width="medium" blockItemSpacing='l0'>
        <BlockItem><Heading bold size="l3" title="Brand Colors" /></BlockItem>

        <BlockItem>
          <Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim tellus at sem tempus 
              tristique. Fusce nec turpis vestibulum, molestie dui sit amet, hendrerit arcu. Cras quis rutrum ante. 
              Sed egestas urna egestas, hendrerit justo non, iaculis odio. Donec mattis nibh elit. Suspendisse 
              semper arcu in nulla euismod dignissim.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim tellus at sem tempus 
              tristique. Fusce nec turpis vestibulum, molestie dui sit amet, hendrerit arcu. Cras quis rutrum ante. 
              Sed egestas urna egestas, hendrerit justo non, iaculis odio. Donec mattis nibh elit.
            </p>
          </Text>
        </BlockItem>
      </Block>

      <Block width="medium">
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

export default Home
