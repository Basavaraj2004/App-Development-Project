import './App.css'

import {useState} from 'react'

const LoginForm = () =>{
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUsername('');
        setPassword('');
    };

    return(
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className='lap1'>
                <div>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e)=> setUsername(e.target.value)} 
                        required
                    />
                </div><br></br>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)} 
                        required
                    />
                </div><br></br>
                </div>
                <button className='basa' type="submit">LogIn</button>
            </form>
        </div>
    )
}

export default LoginForm;