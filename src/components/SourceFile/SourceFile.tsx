import React from 'react'
import { styled } from '@theme'
import { List } from '@components'

// For the master container of the source links buttons on the top right of each of the documentation pages
// This holds the optional links to Figma, Storybook, and GitHub

const SourceWrap = styled('a', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  minHeight: 36,
  padding: 4,
  border: '1px solid $border',
  borderRadius: '$r1',
  background: '$white50',
  color: '$textPrimary',
  transition: '$s1',

  '&:hover': { 
    color: '$textPrimary', 
    borderColor: '$textLink' 
  }
})

// For the container of the image that sits on the left of the container. This displays the logo of the service the link is pointing to
// This holds the logo in the center of the container within the light peach background color

const SourceImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 36,
  height: 36,
  background: '$peach200',
  borderRadius: 12,

  // For the height of the image within the container
  // This allows for all the icons within the container to observe the same height and keeps the icons similar

  img: { height: '50%' }
})

// For the container of the text to the right of the icon
// This displays the text that the file is associated with

const SourceText = styled('div', {
  position: 'relative',
  margin: '0 16px 0 12px',
  fontSize: '$s0',
  textTransform: 'capitalize'
})

// -------------- Typescript declarations -------------- //

interface SourceFileProps {
  figmaLink?: string
  storybookLink?: string
  githubLink?: string
  googleDriveLink?: string
}

// ---------- This is the end of declarations ---------- //

export const SourceFile = ({
    figmaLink, // Optional - for the link to the Figma file
    storybookLink, // Optional - for the link to the Storybook
    githubLink, // Optional - for the link to the Github
    googleDriveLink
  }: SourceFileProps ) => {

  const Base = ({ href, title }:any) => {
    return(
      <li key={`item-${ title }`}>
        <SourceWrap {...{ href }} target="_blank">
          <SourceImage><img src={`/global/sources/${ title }.svg`} alt={`${ title } Logo`} /></SourceImage>
          <SourceText>{ title }</SourceText>
        </SourceWrap>
      </li>
    )
  }
  
  return(

    <List direction="horizontal" spacing="l1r">
      { figmaLink ? ( <Base href={ figmaLink } title="figma" /> ) : null}
      { storybookLink ? ( <Base href={ storybookLink } title="storybook" /> ) : null }
      { githubLink ? ( <Base href={ githubLink } title="github" /> ) : null }
      { googleDriveLink ? ( <Base href={ googleDriveLink } title="drive" /> ) : null }
    </List>
    
  )
}
