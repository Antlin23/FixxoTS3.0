import React from 'react'
import {IUserContext, UserContext} from '../contexts/UserContext'

const CreateForm = () => {

  const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext


  return (
    <form onSubmit={create} className="d-grid mb-5">
    <h3>Create Product</h3>
    <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value })} type="text" className='form-Control py-2 mb-3' placeholder='Enter your first name...'></input>
    <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value })} type="text" className='form-Control py-2 mb-3' placeholder='Enter your last name...'></input>
    <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value })} type="text" className='form-Control py-2 mb-3' placeholder='Enter your email...'></input>
    <button type='submit' className='btn btn-sucess py-2 mt-3'>CREATE PRODUCT</button>
    </form> 
  )
}

export default CreateForm