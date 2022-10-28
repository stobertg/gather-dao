import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@email';
import { SiteContainer, Block } from '@components'

const story = {
  title: 'email/components/Text',
  parameters: { layout: 'centered' },
  component: Text
}
export default story

export const Default = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Text>
        There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
        that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
        products, and we highly encourage you to use your benefit funds on some of these products.
      </Text>
    </Block>
  </SiteContainer>

)

export const Large = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Text fontSize="large">
        There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
        that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
        products, and we highly encourage you to use your benefit funds on some of these products.
      </Text>
    </Block>
  </SiteContainer>

)

export const Medium = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Text fontSize="medium">
        There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
        that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
        products, and we highly encourage you to use your benefit funds on some of these products.
      </Text>
    </Block>
  </SiteContainer>

)

export const Small = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Text fontSize="small">
        There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
        that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
        products, and we highly encourage you to use your benefit funds on some of these products.
      </Text>
    </Block>
  </SiteContainer>

)

export const Bold = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Text bold fontSize="small">
        Employee benefits that flex to fit everyone&apos;s life
      </Text>
    </Block>
  </SiteContainer>

)

