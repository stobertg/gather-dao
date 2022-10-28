import React from 'react'
import { Tr, Td, Text } from '@email'

// -------------- Typescript declarations -------------- //

interface LegalProps {
  items: {
    title: string | React.ReactNode
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Legal = ({
    items
  }: LegalProps ) => {
  
  return(

    <Tr spacingTop="small">
      <Td>
        <Text fontSize="small">
          { items.map(( item, i ) => (
            <div key={`item-${ i }`}>{ item.title }</div>
          ))}
        </Text>
      </Td>
    </Tr>

            
  )
}
