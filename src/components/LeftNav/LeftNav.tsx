import React from 'react'
import { styled } from '@theme'
import { NavWrap, NavHeader, NavLinks } from './Parts'

const NavLinkWrap = styled('div', {
  position: 'relative',
  overflow: 'scroll'
})

// -------------- Typescript declarations -------------- //

export interface LeftNavProps {
  links?: {
    title: string
    href: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const LeftNav = ({
    links
  }: LeftNavProps ) => {
  
  return(

    <NavWrap>
      <NavHeader />

      <NavLinkWrap>
        <NavLinks 
          title="Brand" 
          links={[
            { href: '/brand/colors', title: 'Colors' },
            { href: '/brand/logo', title: 'Logo' },
            { href: '/brand/typeface', title: 'Typeface' },
            { href: '/brand/font-sizes', title: 'Font Sizes' }
          ]} 
        />

        <NavLinks 
          title="Components" 
          links={[
            { href: '/components/button', title: 'Button' },
            { href: '/components/chip', title: 'Chip' },
            { href: '/components/input', title: 'Input' },
            { href: '/components/tabs', title: 'Tabs' },
          ]} 
        />

        <NavLinks 
          title="Modules" 
          links={[
            { href: '/components/benefit-card', title: 'Benefit Card' },
            { href: '/', title: 'Breadcrumbs' },
            { href: '/components/chip', title: 'Chip' },
            { href: '/modules/modal', title: 'Modal' },
            { href: '/', title: 'Templates' },
            { href: '/', title: 'Upload Card' }
          ]} 
        />

        <NavLinks 
          title="Emails" 
          links={[
            { href: '/', title: 'Product Hero' },
            { href: '/', title: 'Chip' },
            { href: '/', title: 'Colors' },
            { href: '/', title: 'Icon' },
            { href: '/', title: 'Image' },
            { href: '/', title: 'List' },
            { href: '/', title: 'Logo' },
            { href: '/', title: 'Menu Button' },
            { href: '/', title: 'Chip' },
          ]} 
        />
      </NavLinkWrap>
    </NavWrap>
    
  )
}
