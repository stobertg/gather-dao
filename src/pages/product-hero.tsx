import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, Heading, Text, ComponentStage, Code } from '@components'
import { Email, ProductHero } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Home: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold size="l6" title="Product Hero" /></BlockItem>

        <BlockItem>
          <Text fontSize="l1">
            <p>
              The Product Hero component is a freqently used components within emails. This component comes with a few different
              options, which we will cover at the end of this intro.
            </p>
          </Text>
        </BlockItem>
      </Block>

      <Block blockItemSpacing="l1">
        <BlockItem>
          <ComponentStage
            tabSize="small"
            border="noBorder"
            bgColor="secondary"
            tabs={[
              { title: 'Default (Full-width image)' },
              { title: 'PNG image' }
            ]}
            tabContent={[
              { content:  
                <Email withoutFooter>
                  <ProductHero
                    sideSpacing="small"
                    productWidth="small"
                    image="/products/sony/sony-noise-canceling.png"
                    deal="Save 10%"
                    title="Sony inteligent industry-leading noise canceling headphones - black"
                    buttonTitle="Hurry up, limited time offer"
                  />
                </Email>
              },
              { content:  
                <Email withoutFooter>
                  <ProductHero
                    sideSpacing="small"
                    productWidth="small"
                    image="/products/sony/sony-noise-canceling.png"
                    deal="Save 10%"
                    title="Sony inteligent industry-leading noise canceling headphones - black"
                    buttonTitle="Hurry up, limited time offer"
                  />
                </Email>
              }
            ]}
          >
          </ComponentStage>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>ProductHero</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>sideSpacing</CodeBlue>=<CodeOrange>"small"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>productWidth</CodeBlue>=<CodeOrange>"small"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>image</CodeBlue>=<CodeOrange>"/products/sony/sony-noise-canceling.png"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>deal</CodeBlue>=<CodeOrange>"Save 10%"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Sony inteligent industry-leading noise canceling headphones - black"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>buttonTitle</CodeBlue>=<CodeOrange>"Hurry up, limited time offer"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Home
