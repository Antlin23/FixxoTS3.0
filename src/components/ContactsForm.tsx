import React, { useState } from 'react'
import './ContactsForm.css'
import { validateEmail, validateText } from '../scripts/ValidateForm'

interface IDefaultValues {
  name: string,
  email: string,
  comments: string
}

  const ContactsForm: React.FC = () => {

    const DEFAULT_VALUES: IDefaultValues = {name: '', email: '', comments: ''}

    const [formData, setFormData] = useState<IDefaultValues>(DEFAULT_VALUES)
    const [errors, setErrors] = useState<IDefaultValues>(DEFAULT_VALUES)  

    //handle name and email change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let {id, value} = e.target
      setFormData({...formData, [id]: value})
        
      if(e.target.type == 'text'){
        setErrors({...errors, [id]: validateText(id, value)})
      }
      else if(e.target.type == 'email'){
        setErrors({...errors, [id]: validateEmail(id, value)})
      }
    }

    //handle text area change
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const {id, value} = e.target
      setFormData({...formData, [id]: value})

      if (id === "comments"){
        setErrors({...errors, comments: validateText(id, value, 5)})
      }

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrors({...errors, email: validateEmail('email', formData.email), comments: validateText('comments', formData.comments, 5), name: validateText('name', formData.name)})
 
      if (formData.name !== '' && formData.email !== '' && formData.comments !== ''){
        if(errors.name === '' && errors.email === '' && errors.comments === '')
        setFormData(DEFAULT_VALUES)
      }
    }
    
  return (
    <section className="contact-form">
      <div className='container'>
          <div id='submittedMessage'>
            <h1 id='submitted-message-h1'></h1>
            <p id='submitted-message-p'></p>
          </div>
            <h1>Come in Contact with Us</h1>
            <form noValidate onSubmit={(e) => handleSubmit(e)}>
              <div>
                <input value={formData.name} id="name" type="text" onChange={(e) => handleChange(e)} placeholder="Your Name" />
                <div className='errorMessage'>{errors.name}</div>
              </div>
              <div>
                <input  value={formData.email} id="email" type="email" onChange={(e) => handleChange(e)} placeholder="Your Mail" /> 
                <div className='errorMessage'>{errors.email}</div>
              </div>
              <div className='textarea'>
                <textarea  value={formData.comments} id='comments' onChange={(e) => handleTextAreaChange(e)} placeholder="Comments" ></textarea>
                <div className='errorMessage'>{errors.comments}</div>
              </div>
              <div className='contact-button'>
                <button data-testid="formButton" type='submit' className='theme-button'>Post Comments</button>
              </div>
            </form>

      </div>
    </section>
  )
}

export default ContactsForm

//********************* OLD CODE BELOW | NOT IN USE ***************************

    // const [nameError, setNameError] = useState()
    // const [commentError, setCommentError] = useState()
    // const [emailError, setEmailError] = useState()

    // //handlesubmit
    // const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    //   e.preventDefault();

    //   let nameValue = e.target.name.value;
    //   let commentValue = e.target.comment.value;
    //   let emailValue = e.target.email.value;

    //   if(validateName(nameValue) && validateComment(commentValue) && validateEmail(emailValue)){

    //     let json = JSON.stringify({ nameValue, commentValue, emailValue });

    //       e.target.name.value = ''
    //       e.target.password.value = ''
    //       e.target.email.value = ''

    //       submitData(json)

    //     console.log('submitted')

    //   }
    // }

    // const handleChange = (e: React.FormEvent<EventTarget>) => {
    //   let value = e.target.value;

    //   switch(e.target.type){
    //     case 'text': 
    //       validateName(value);
    //       break;
    //     case 'comment':
    //       validateComment(value);
    //       break;
    //     case 'email':
    //       validateEmail(value);
    //       break;
    //   }
    // }

    // //validate name
    // const validateName = (nameValue: string) => {

    //   if(nameValue.length < 2){
    //     setNameError('not correct')
    //     return false
    //   }
    //   else{
    //     setNameError('')
    //     return true
    //   }
    // }

    // //validate password
    // const validateComment = (commentValue: string) => {

    //   if(commentValue.length < 5){
    //     setCommentError('enter at least 5 characters')
    //     return false
    //   }
    //   else{
    //     setCommentError('')
    //     return true
    //   }
    // }

    // //validate email
    // const validateEmail = (emailValue: string) => {
    //   const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    //   if(regEx.test(emailValue)){
    //     setEmailError('')
    //     return true
    //   }
    //   else{
    //     setEmailError('Enter an valid email')
    //     return false
    //   }
    // }
