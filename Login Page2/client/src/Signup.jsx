import React, { useState } from 'react';
import './Signup.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import ImageL from './img/Site-logo.png';
import ImageBG from './img/BF-BG2.png';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Signup() {

    const [nickname, setNickname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            nickname: nickname,
            email: email,
            password: password
        };
    
        axios.post('http://localhost:3001/register', userData)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <img className='image-bf' src={ImageBG} />
            <div className='container'>
                <div className='container-box'>
                    <form onSubmit={handleSubmit} className='form'>
                        <img className='logo-site' src={ImageL} />
                        <h1>Register</h1>
                        <div className='input-box'>
                            <span className='icon'><i className="bi bi-person"></i></span>
                            <input type="text" name='nickname' placeholder='Nickname' required
                            onChange={(e) => setNickname(e.target.value)}
                            />
                        </div>
                        <div className='input-box'>
                            <span className='icon'><i className="bi bi-envelope"></i></span>
                            <input type="email" name='email' placeholder='Email' required 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='input-box'>
                            <span className='icon'><i className="bi bi-key"></i></span>
                            <input type="password" name='password' placeholder='Password' required 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div id='settings-create' className="d-flex justify-content-between align-items-center">
                            <div>
                                <input
                                    type='checkbox'
                                    name='rememberme'
                                    className='remember-me'
                                />
                                    <span className='remember-me-span'>
                                        Remember me
                                    </span>
                            </div>
                            <Link to='/login'>Already Have an account?</Link>
                        </div>
                        <button className='btn btn-primary'>Create</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default Signup;
