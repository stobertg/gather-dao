import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, BlockItem, DiscussionPost } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block outline width="medium" blockItemSpacing="l1">
        <BlockItem>
          <Hero 
            image="/locations/edinburugh.jpg" 
            imageAlt="Edinburugh" 
            datePosted="05.29.1989"
            title="Does what we look for change what we see? Please share your reflections on the Monkey Business Video"
          />
        </BlockItem>

        <BlockItem>
          <DiscussionPost
            
          />
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Home
