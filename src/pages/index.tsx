import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, BlockItem, Heading, Text } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block outline width="medium">
        <Hero image="/locations/edinburugh.jpg" imageAlt="Edinburugh" />
        This is some content
      </Block>
    </SiteContainer>

  )
}

export default Home
