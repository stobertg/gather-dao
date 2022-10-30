import React from 'react'
import { styled } from '@theme'
import { Avatar, ButtonContainer, Button, Text } from '@components'

// For the mast container of the discussion board post
// This holds the response a user has to a Discussion Board question and renders a single post
// And subsequent posts, for responses to continue within the component 

const PostWrap = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '100%',
  margin: '0 auto',
  background: '#222328',
  borderRadius: '$r3'
})

// For the container of all of the content within the post
// This holds the user info on the top, action items to the right, post below the header,
// And the reply and like button on the bottom

const PostContent = styled('div', {
  position: 'relative',
  width: '87%',
  margin: '0 auto',
  padding: '50px 0',

  // For the autospacing between the items within the post content

  '> *:not(:last-child)': {
    marginBottom: 32
  }
})

// For the header container on the top of the component
// This holds the user on the left and the action buttons on the right

const PostHeader = styled('header', {

})


// -------------- Typescript declarations -------------- //

interface DiscussionPostProps {

}

// ---------- This is the end of declarations ---------- //

export const DiscussionPost = ({

  }: DiscussionPostProps ) => {
  
  return(

    <PostWrap>
      <PostContent>
        <PostHeader>
          <Avatar 
            size="l1" 
            name="Richard III" 
            image="/monarchs/richardiii.jpg" 
            date="05.29.1989"
            timeStamp="12:30 pm"
          />
        </PostHeader>
        
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt metus mi, vitae varius ligula laoreet in. 
            Donec eget convallis arcu. Mauris vitae purus mauris. Donec lobortis odio sit amet augue posuere vulputate. 
            Praesent pretium convallis varius. Sed eget vehicula sapien.
          </p>

          <p>
            Suspendisse quis arcu non magna scelerisque scelerisquequis ut nulla. Nulla laoreet, risus at commodo vulputate, 
            dui urna facilisis ligula, eu luctus elit nisl vel nisi. Aenean erat lacus, eleifend quis ornare sit amet, egestas 
            eget tellus. Nulla semper scelerisque dictum. Aliquam malesuada tincidunt mauris, eu feugiat urna ullamcorper vel. 
          </p>
        </Text>

        <ButtonContainer>
          <Button variant="primary" icon="heart" />
          <Button variant="secondary" title="Comment" icon="chat-bubble" />
        </ButtonContainer>
      </PostContent>
    </PostWrap>
    
  )
}
