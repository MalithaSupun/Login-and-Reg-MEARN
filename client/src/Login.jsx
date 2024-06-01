import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login () {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{ email, password})
        .then(result => {console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            }
        })
        .catch(err=> console.log(err))
    }
    
  return (
    <>
    <div className="container mt-5 w-96 border border-dark rounded-3xl p-4">
      <h2 className="mb-4 text-4xl">Login</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            placeholder='Enter email'
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
            placeholder='Enter password'
            name="password" 
            className="form-control" 
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <div className="d-flex justify-content-center">
        <button to="/login" type="submit" className="btn btn-primary w-32">Login</button>

</div>
        </form>
        <div className="d-flex justify-content-center align-items-center mt-4">
        <p className='mr-5'>Alredy have an account</p>
        <Link to="/register" type="submit" className="btn btn-secondary w-32 bg-emerald-700">Register</Link>
        </div>
    </div>
    </>
  )
}

export default Login