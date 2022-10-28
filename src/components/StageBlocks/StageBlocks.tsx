import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const StageBlockTitles = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',
  marginBottom: 20,
  textAlign: 'center',

  variants: {
    columns: {
      5: { '> *': { width: '20%' }},
      4: { '> *': { width: '25%' }},
      3: { '> *': { width: '33.33%' }},
      2: { '> *': { width: '50%' }}
    }
  }
})

const StageBlocksWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  border: '1px solid $border',
  borderRadius: '$r1',
  overflow: 'hidden',

  '> *': {
    minHeight: 100,
    '&:not(:last-child)': { borderBottom: '1px solid $border' }
  },

  variants: {
    columns: {
      5: { '> * > *': { width: '20%' }},
      4: { '> * > *': { width: '25%' }},
      3: { '> * > *': { width: '33.33%' }},
      2: { '> * > *': { width: '50%' }}
    }
  }
})

interface StageBlocksProps {
  titles?: {
    title: string
  }[]
  children: React.ReactNode
  columns: '2' | '3' | '4' | '5'
} 

// ---------- This is the end of declarations ---------- //

export const StageBlocks = ({ titles, columns, children }:StageBlocksProps) => {
  
  return(

    <>
      { titles ? (
        <StageBlockTitles {...{ columns }}>
          { titles.map(( title, i ) => ( 
            <Heading key={`title-${ i }`} bold size="l0" color="gray" title={ title.title } /> 
          ))}
        </StageBlockTitles>
      ) : null }

      <StageBlocksWrap {...{ columns }}>{ children }</StageBlocksWrap>
    </>
    
  )
}
