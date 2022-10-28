// import React from 'react'
// import { styled } from '@theme'
// import { Heading, ButtonContainer, Button } from '@components'

// const ModalWrap = styled('section', {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100vw',
//   height: '100vh',
//   zIndex: 9999,

//   // For the color of the overlay background
//   // This shows the background with the opacity in place so users can see the content behind

//   '&:before': {
//     content: '',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: '$indigo800',
//     opacity: 0.5
//   }
// })

// const ModalContain = styled('section', {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'stretch',
//   position: 'relative',
//   maxWidth: 800,
//   width: '90%',
//   minHeight: 500,
//   margin: '0 auto',
//   background: '$white50',
//   borderRadius: '$r2',

//   variants: {
//     width: {
//       small: {},
//       medium: {},
//       large: {}
//     }
//   }
// })

// // For the container of all of the content that lives wihtin the modal
// // This contains the header on the top, content in the middle, and the actions buttons on the bottom of the container

// const ModalContent = styled('div', {
//   display: 'flex',
//   flex: 'auto',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   position: 'relative',
//   maxWidth: 1000,
//   width: '90%',
//   margin: '0 auto'
// })

// // For the container of the header on the top of the modal
// // This contains the title on the left and the close button on the right side of the container

// const ModalHeader = styled('header', {
//   display: 'flex',
//   flexDirection: 'row',
//   justfiyContent: 'space-between',
//   alignItems: 'center',
//   position: 'relative',
//   width: '100%',
//   margin: '0 auto',
//   padding: '32px 0'
// })

// const ModalMiddle = styled('div', {
//   display: 'flex',
//   flex: 'auto',
//   position: 'relative',
//   width: '100%',
// })

// const ModalFooter = styled('div', {
//   display: 'flex',
//   flexDirection: 'row',
//   position: 'relative',
//   width: '100%'
// })

// // For the conatainer of the actions buttons on the bottom of the modal container
// // This holds the action buttons on the right of the container, and are always fixed to the bottom of the container

// const ModalActions = styled('div', {
//   display: 'flex',
//   position: 'relative',
//   padding: '32px 0'
// })

// // -------------- Typescript declarations -------------- //

// interface ModalProps {
//   children: React.ReactNode
// }

// // ---------- This is the end of declarations ---------- //

// export const Modal = ({
//     children
//   }: ModalProps ) => {
  
//   return(

//     <ModalWrap>
//       <ModalContain>
//         <ModalContent>
//           <ModalHeader><Heading size="l5" title="Modal Header" /></ModalHeader>

//           <ModalMiddle>{ children }</ModalMiddle>

//           <ModalFooter>
//             <ModalActions>
//               <ButtonContainer
//                 buttons={[
//                   { variant: 'secondary', title: 'Cancel' },
//                   { variant: 'primary', title: 'Main Action' }
//                 ]}
//               />
//             </ModalActions>
//           </ModalFooter>
//         </ModalContent>
//       </ModalContain>
//     </ModalWrap>

//   )
// }



