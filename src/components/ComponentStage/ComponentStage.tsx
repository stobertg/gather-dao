import React from 'react'
import { styled } from '@theme'
import { Tabs } from '@components'

const StageWrap = styled('div', {
  position: 'relative',
  width: '100%',
  paddingTop: 8,
  border: '1px solid $border',
  borderRadius: '$r2',
  overflow: 'hidden'
})

const StageContent = styled('div', {
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: '50px 0',
  borderRadius: '$r2',
  background: '$brandSecondary'
})

const StageFooter = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface ComponentStageProps {
  defaultTab?: number
  tabs?: any
  tabContent?: any
  children: React.ReactNode
  bgColor?: 'primary' | 'secondary' | 'tertiary'
  border?: 'noBorder'
  tabSize?: 'tiny' | 'small'
  contentWidth?: 'small' | 'medium' | 'large'
}

// ---------- This is the end of declarations ---------- //

export const ComponentStage = ({
    defaultTab,
    tabs,
    tabContent,
    children,
    bgColor,
    border,
    tabSize,
    contentWidth
  }: ComponentStageProps ) => {
  
  return(

    <StageWrap>
      { tabs 
        ? ( <Tabs {...{ defaultTab, contentWidth, bgColor, border, tabSize, tabContent }} triggers={ tabs } /> ) 
        : ( <StageContent>{ children }</StageContent> )
      }
      <StageFooter></StageFooter>
    </StageWrap>
    
  )
}
