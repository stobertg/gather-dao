import React from 'react'
import Head from 'next/head'
import { styled } from '@theme'
import { HeadTags, SiteHeader } from '@components'

// For the master container of the foundational SiteContainer component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const SiteWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  minHeight: '100vh'
})

// For all of the content within the site
// This positions the content centered horizontally within the container

const SiteContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  // The only variant option for this component is to automate the spacing between content blocks within the site
  // This will eventally space out all of the content for consistancy between blocks

  variants: {
    spacing: {
      l0: {},
      l1: { padding: '75px 0' },
      l2: { padding: '150px 0'}
    },

    blockSpacing: {
      l0: { '> *': { marginBottom: 32 }},
      l1: { '> *': { marginBottom: 50 }},
      l2: { '> *': { marginBottom: 100 }},
      l3: { '> *': { marginBottom: 150, '@media(max-width: 767px)': { marginBottom: 75 }}},
    }
  }
})

// -------------- Typescript declarations -------------- //

interface SiteContainerProps {
  spacing?: 'l0' | 'l1' | 'l2'
  content?: string
  shareURL?: string
  pageTitle?: string
  blockSpacing?: 'l0' | 'l1' | 'l2' | 'l3'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const SiteContainer = ({
    spacing,
    blockSpacing, // Optional - For the uniform spacing between each of the blocks that make up the page
    children // Required - For all of the content within a page
  }: SiteContainerProps ) => {
  
  return(

    <SiteWrap>
      <HeadTags />

      <>
        <SiteHeader />
        <SiteContent {...{ spacing, blockSpacing }}>
          { children }
        </SiteContent>
      </>
    </SiteWrap>
    
  )
}
