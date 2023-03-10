import React, { useEffect } from 'react'
import {IUserContext, UserContext} from '../contexts/UserContext'

const UpdateForm = () => {
    //const id = useParams()
    const { user, setUser, get, update } = React.useContext(UserContext) as IUserContext

    // useEffect(() => {
    //     get(id)
    // }, [get, id])

  return (
    <form onSubmit={update} className="d-grid mb-5">
    <h3 className='display-6 mb-4'>Update User</h3>
    <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value })} type="text" className='form-Control py-2 mb-3' placeholder='Enter your first name...'></input>
    <input type="hidden" value={user.id} />
    <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value })} type="text" className='form-Control py-2 mb-3' placeholder='Enter your last name...'></input>
    <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value })} type="text" className='form-Control py-2 mb-3' placeholder='Enter your email...'></input>
    <button type='submit' className='btn btn-sucess py-2 mt-3'>UPDATE USER</button>
    </form> 
  )
}

export default UpdateForm