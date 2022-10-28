import React from 'react'
import { Tbody } from '@email'

// -------------- Typescript declarations -------------- //

interface TableProps {
  tableWidth?: 'small' | 'medium'
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Table = ({
    tableWidth,
    contentWidth,
    bgColor,
    children
  }: TableProps ) => {
  
  return(

    <table
      style={{
        display: 'table',
        padding: tableWidth == 'small' ? '40px 50px' : tableWidth == 'medium' ? 20 : 0
      }}
    >
      <Tbody width={ contentWidth } {...{ bgColor }}>
        { children }
      </Tbody>
    </table>
     
  )
}
