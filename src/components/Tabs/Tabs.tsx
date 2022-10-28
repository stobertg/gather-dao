import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the tabs
// this contains the tab triggers on the top and the content click below the tabs

const TabsWrap = styled( TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%'
})

// For the master containers of the tabs on the top of the container
// This contains the triggers that show the different content contextual to the tab that is clicked

const TabsList = styled( TabsPrimitive.List, {
  display: 'flex',
  position: 'relative',
  width: '100%',
  borderBottom: '1px solid $border',

  variants: {
    border: {
      noBorder: { borderBottom: 'none' }
    }
  }
})

// For the indivudual shared stying of the tab triggers within the master container
// Clicking on these will change the content below

const TabsTrigger = styled( TabsPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: 55,
  padding: '0 24px',
  color: '$textSecondary',
  fontSize: '$s1',
  transition: '$s1',
  userSelect: 'none',

  // For the line on the bottom of the container
  // This lines shows when the tab is active, once the user has clicks on a trigger
  // By default, this will always shows the selected tab usually being the first tab

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    borderRadius: '$pill',
    background: 'currentColor',
    opacity: 0,
    transition: '$s1'
  },

  // Change the color and add the bottom board on hover
  // This is to give the button the afforance that it is cickable

  '&:hover': { 
    color: '$textPrimary',
    '&:after': { opacity: 1 }
  },

  // For when the user clicks on a tab and the default tab
  // This shows the primary color, with the button unclickable and shows the border on the bottom of the container

  '&[data-state="active"]': {
    color: '$textPrimary',
    pointerEvents: 'none',
    '&:after': { opacity: 1 }
  },

  variants: {
    tabSize: {
      tiny: { '*': { fontSize: '$s1' }},
      small: { '*': { fontSize: 'initial' }}
    }
  }
})

const TabsContent = styled( TabsPrimitive.Content, {
  flexGrow: 1,
  padding: '32px 0',
  backgroundColor: 'white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px black` },

  variants: {
    bgColor: {
      primary: { background: '$brandPrimary' },
      secondary: { background: '$brandSecondary' },
      tertiary: { background: '$brandTertiary' }
    },

    width: {
      small: {},
      medium: {},
      large: { width: '90%', margin: '32px auto', borderRadius: '$r2' }
    }
  }
})
  
// -------------- Typescript declarations -------------- //

interface TabsProps {
  triggers: { title: string }[]
  tabContent: { content: React.ReactNode }[]
  defaultTab?: number
  bgColor?: 'primary' | 'secondary' | 'tertiary'
  border?: 'noBorder'
  tabSize?: 'tiny' | 'small'
  contentWidth?: 'small' | 'medium' | 'large'
}

// ---------- This is the end of declarations ---------- //

export const Tabs = ({ 
    triggers,
    tabContent,
    defaultTab,
    bgColor,
    border,
    tabSize,
    contentWidth
  }: TabsProps) => {
  return (


    <TabsWrap defaultValue={ `tab${ defaultTab ? defaultTab : 1 }` }>
      <TabsList aria-label="Manage your account" {...{ border }}>
        { triggers.map(( trigger, i ) => (
          <TabsTrigger 
            {...{ tabSize }}
            key={ `trigger-${ i }`} 
            value={`tab${ i + 1 }`}
          >
            <Heading size="l2" title={ trigger.title } />
          </TabsTrigger>
        ))}
      </TabsList>
      
      { tabContent.map(( content, i ) => (
        <TabsContent 
          {...{ bgColor }}
          key={`tab-${ i }`} 
          value={`tab${ i + 1 }`}
          width={ contentWidth }
        >
          { content.content }
        </TabsContent>
      ))}
    </TabsWrap>
    
  )
}
