import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Signup () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('',{name, email, password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }
    
  return (
    <>
        
        <div className="container mt-5 w-96 border border-dark rounded-3xl p-4">
      <h2 className="mb-4 text-3xl">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            placeholder='Enter Name'
            className="form-control" 
            id="name" 
            name="name" 
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            placeholder='email'
            className="form-control" 
            id="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            placeholder='password'
            name="password" 
            className="form-control" 
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-secondary w-80 bg-emerald-700">Register</button>
</div>
        </form>
        <div className="d-flex justify-content-center align-items-center mt-4">
        <p className='mr-5'>Alredy have an account</p>
        <Link to="/login" type="submit" className="btn btn-primary w-32">Login</Link>
        </div>
    </div>
    </>
  )
}

export default Signup