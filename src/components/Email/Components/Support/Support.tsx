import React from 'react'
import { Table, Tr, Td, Heading, Text, Button } from '@email'

// -------------- Typescript declarations -------------- //

interface SupportProps {
  supportItems: {
    spacingTop?: 'small' | 'medium'
    href: string
    title: string
    descp: string
    buttonTitle: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Support = ({
    supportItems
  }: SupportProps ) => {
  
  return(

    <>
      { supportItems.map(( item, i ) => (

        <Tr key={`support-${ i }`} spacingTop={ item.spacingTop }>
          <Td>
            <Heading 
              size="medium" 
              title={ item.title }
            />

            <Text spacing="small">
              { item.descp }
            </Text>

            <Button 
              spacing="small" 
              variant="secondary" 
              title={ item.buttonTitle } 
              href={ item.href }
            />
          </Td>
        </Tr>

      ))}
    </>
    
  )
}
