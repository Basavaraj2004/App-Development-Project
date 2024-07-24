import './App.css';
import { useState } from "react";

const RegisterForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhoneno('');
    setPassword('');
    setCpassword('');
  };

  return (
    <div className='reg'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group'>
            <label>First Name:</label>
            <input 
              type="text" 
              value={firstname} 
              onChange={(e) => setFirstname(e.target.value)} 
              required
            />
          </div>
          <div className='form-group'>
            <label>Last Name:</label>
            <input 
              type="text" 
              value={lastname} 
              onChange={(e) => setLastname(e.target.value)} 
              required
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group'>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className='form-group'>
            <label>Phone No:</label>
            <input 
              type="text" 
              value={phoneno} 
              onChange={(e) => setPhoneno(e.target.value)} 
              required
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group'>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className='form-group'>
            <label>Confirm Password:</label>
            <input 
              type="password" 
              value={cpassword} 
              onChange={(e) => setCpassword(e.target.value)} 
              required
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
