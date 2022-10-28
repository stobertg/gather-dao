import React from 'react'
import { styled } from '@theme'
import { Card, Heading, Text, Illustration, Chip } from '@components'

const ContentWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: 'calc( 100% - 48px )',
  margin: '0 auto'
})

const ContentHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

const ContentLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative'
})

const ContentLeftText = styled('div', {
  position: 'relative',
  width: '70%',
  marginLeft: 24,

  '> *': {
    marginBottom: 8
  }
})

const ContentRight = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  marginRight: 32,

  '> *:not(:last-child)': {
    marginRight: 32
  },

  '> div > *:not(:last-child)': {
    marginBottom: 8
  }
})

const LinkContainer = styled('div', {
  position: 'relative',
  marginTop: 20,

  a: {
    marginRight: 32,
    fontSize: '$s1'
  }
})

// -------------- Typescript declarations -------------- //

interface BenefitCardProps {
  illustration?: any
  title: string
  chipTitle?: string
  text: string
  rightItems?: {
    title: string
    subtitle: string
  }[]
  links: {
    href: string
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const BenefitCard = ({
    illustration,
    title,
    text,
    rightItems,
    links,
    chipTitle
  }: BenefitCardProps ) => {
  
  return(

    <Card>  
      <ContentWrap>
        <ContentLeft>
          <Illustration size="l1" image={ illustration ? illustration : 'account-wellness' } />

          <ContentLeftText>
            <ContentHeader>
              <Heading bold size="l3" title={ title } />
              <Chip size="small" text="allCaps" bgColor="gray" title={ chipTitle } />
            </ContentHeader>

            <Text fontSize="l0">{ text }</Text>

            <LinkContainer>
              { links.map(( link, i ) => (
                <a key={`link-${ i }`} href={ link.href }>{ link.title }</a>
              ))}
            </LinkContainer>
          </ContentLeftText>
        </ContentLeft>

        { rightItems ? (
          <ContentRight>
            { rightItems.map(( item, i ) => (
              <div key={`item-${ i }`}>
                <Heading title={ item.title } />
                <Heading color="gray" size="l0" title={ item.subtitle } />
              </div>
            ))}
          </ContentRight>
        ) : null }
      </ContentWrap>
    </Card>
    
  )
}
