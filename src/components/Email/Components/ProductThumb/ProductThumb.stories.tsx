import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Email } from '../../Email'
import { ProductThumb } from '@email'
import { SiteContainer, Block } from '@components'

const story = {
  title: 'email/components/ProductThumb',
  component: ProductThumb
}
export default story

export const Primary = () => (
  
  <SiteContainer>
    <Block alignment="center">
      <Email withoutFooter>
        <ProductThumb 
          productList={[
            { 
              href: 'http://tylerstober.com',
              marginRight: 6, 
              productImage: "/products/sony/earbuds-noisecancelling.png",
              product: 'Sont Earbuds',
              buttonTitle: 'Shop Forma Store'
            },
            { 
              href: 'http://tylerstober.com',
              marginLeft: 6, 
              productImage: "/products/sony/earbuds-noisecancelling.png",
              product: 'Sont Earbuds',
              buttonTitle: 'Shop Forma Store'
            },
          ]}
        />
      </Email>
    </Block>
  </SiteContainer>

)

