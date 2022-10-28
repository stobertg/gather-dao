// import React from 'react';
// import { Intro, Heading, Text, Image, ProductHero, ProductThumb } from '@email'
// import { Email } from './Email';

const story = {
  title: 'email/Email',
  component: Email
}
export default story

export const Layout1 = () => (

  <Email>
    <Intro 
      spacingTop="small"
      logoOnDarkBg
      sideSpacing="medium"
      bgColor="#150050"
    >
      <Heading 
        spacing="medium"
        size="large" 
        title={ <>Jane, treat yourself to <span style={{ color: '#fa9bfa' }}>reinvigorate your body, mind, and soul</span></> } 
      />

      <Image 
        spacing="small" 
        src="/illustration/why-switch.png" 
        alt="Forma Illustration" 
      />

      <Text spacing="small">
        We have hand picked few top quality eligible wellness products with great discounts.   
      </Text>
    </Intro>
  </Email>

)

export const Layout2 = () => (

  <Email>
    <Intro padding="large">
      <Heading 
        spacing="medium"
        bold
        size="large" 
        title="Bring play, creativity, flow to your home office."
      />

      <Text spacing="medium" fontSize="medium">
        There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
        that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
        products, and we highly encourage you to use your benefit funds on some of these products.   
      </Text>
    </Intro>

    <ProductHero
      sideSpacing="small"
      productWidth="small"
      image="/products/sony/sony-noise-canceling.png"
      deal="Save 10%"
      title="Sony inteligent industry-leading noise canceling headphones - black"
      buttonTitle="Hurry up, limited time offer"
    />

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

    <ProductHero
      spacingTop="small"
      sideSpacing="small"
      image="/products/fluidstance/board.png"
      deal="Best Deal"
      title="FluidStance Springboard Active-Standing Mat"
      buttonTitle="Hurry up, limited time offer"
    />

    <ProductThumb 
      productList={[
        { 
          href: 'http://tylerstober.com',
          productHeight: 150,
          marginRight: 6, 
          productImage: "/products/fluidstance/naturalwood.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 150,
          marginLeft: 6, 
          productImage: "/products/fluidstance/graphite.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 63,
          marginRight: 6, 
          productImage: "/products/fluidstance/dryerase.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 63,
          marginLeft: 6, 
          productImage: "/products/fluidstance/whiteboard.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        }
      ]}
    />
  </Email>

)




















import React from 'react'
import { Email, Intro, Heading, Text, Image, ProductHero, ProductThumb } from '@email'

export const Tutorial = () => (

  <Email>
    <Intro padding="large">
      <Heading 
        spacing="medium"
        bold
        size="large" 
        title="Bring play, creativity, flow to your home office."
      />

      <Text spacing="medium" fontSize="medium">
        There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
        that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
        products, and we highly encourage you to use your benefit funds on some of these products.   
      </Text>
    </Intro>

    <ProductHero
      sideSpacing="small"
      productWidth="small"
      image="/products/sony/sony-noise-canceling.png"
      deal="Save 10%"
      title="Sony inteligent industry-leading noise canceling headphones - black"
      buttonTitle="Hurry up, limited time offer"
    />

    <ProductThumb 
      productList={[
        { 
          href: 'http://tylerstober.com',
          marginRight: 6, 
          productImage: "/products/sony/earbuds-noisecancelling.png",
          product: 'Sony Earbuds',
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

    <ProductHero
      spacingTop="small"
      sideSpacing="small"
      image="/products/fluidstance/board.png"
      deal="Best Deal"
      title="FluidStance Springboard Active-Standing Mat"
      buttonTitle="Hurry up, limited time offer"
    />    

    <ProductThumb 
      productList={[
        { 
          href: 'http://tylerstober.com',
          productHeight: 150,
          marginRight: 6, 
          productImage: "/products/fluidstance/naturalwood.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 150,
          marginLeft: 6, 
          productImage: "/products/fluidstance/graphite.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 63,
          marginRight: 6, 
          productImage: "/products/fluidstance/dryerase.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 63,
          marginLeft: 6, 
          productImage: "/products/fluidstance/whiteboard.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        }
      ]}
    />
  </Email>

)












