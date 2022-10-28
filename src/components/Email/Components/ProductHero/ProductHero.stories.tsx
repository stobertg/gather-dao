import React from 'react'
import { SiteContainer, Block } from '@components'
import { ProductHero } from '@email'
import { Email } from '../../Email'

const story = {
  title: 'email/components/ProductHero',
  component: ProductHero
}
export default story

export const PngProductImage = () => (

  <SiteContainer>
    <Block alignment="center">
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
    </Block>
  </SiteContainer>
  
)

export const FullWidthImage = () => (

  <SiteContainer>
    <Block alignment="center">
      <Email withoutFooter>
        <ProductHero
          spacingTop="small"
          sideSpacing="small"
          image="/products/fluidstance/board.png"
          deal="Best Deal"
          title="FluidStance Springboard Active-Standing Mat"
          buttonTitle="Hurry up, limited time offer"
        />
      </Email>
    </Block>
  </SiteContainer>
  
)

