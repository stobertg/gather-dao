import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import { FormWrap } from './Parts'
import { Input, InputCheckbox, InputSelect, Textarea } from '@components'
import emailjs from '@emailjs/browser'

// -------------- Typescript declarations -------------- //

type FormValues = {
  name: ""
  email: ""
  message: ""
}

interface FormProps {
  title?: string
  descp?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Form = ({
    title,
    descp,
    children
  }: FormProps ) => {

  const form = useRef<HTMLFormElement>(null);

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
    mode: "onChange"
  })
  
  const onSubmit = ( data:FormValues ) => {
    emailjs.sendForm('contact_form', 'template_continuum', form.current, 'JIo1rNfaUflvW0z-3')
    .then((result) => {
        console.log(result.text);     
    }, (error) => {
        console.log(error.text);
    });
  }
  
  return(

    <FormWrap   
      formRef={ form }
      {...{ title, descp }}
      onSubmit={ handleSubmit(onSubmit) }
    >
      { children }
      <Input label="Full name" control={ control } name="name" rules={{ required: true }} />
      <Input label="Email" type="email" control={ control } name="email" rules={{ required: true }} />
      <Textarea name="message" control={ control } rules={{ required: true }} />
    </FormWrap> 

  )
}
