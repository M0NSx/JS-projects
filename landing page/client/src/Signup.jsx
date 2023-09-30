import { useState } from 'react'
import './Signup.css'
import { BsPerson, BsKey } from 'react-icons/bs';
import { MdDriveFileRenameOutline } from 'react-icons/md';

function Signup() {

    return (
        <>
        <section>
        <div class="register-box">
            <form>
                <h2>Register</h2>
                <div class="input-box">
                    <span class="icon">
                        <MdDriveFileRenameOutline />
                    </span>
                    <input type="text" name="nickname" placeholder='Nickname' required />
                </div>
                <div class="input-box">
                    <span class="icon">
                        <BsPerson />
                    </span>
                    <input type="text" name="nickname" placeholder='Nickname' required />
                </div>
                <div class="input-box">
                    <span class="icon">
                        <BsKey />
                    </span>
                    <input type="Password" name="password" placeholder='Passowrd' required />
                </div>
                <button type="button" class="btn btn-primary">Create</button>
                <div class="register-link">
                    <p>Dont have an account? <a>Register</a></p>
                </div>
            </form>
        </div>
    </section>
        </>
    )
}

export default Signup
