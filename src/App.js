import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeFullName = (event) => {
        setFullName(event.target.value)
    }
    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    //submit using axios
    const onSubmit = (event) => {
        event.preventDefault()

        const registered = {
            fullName: fullName,
            username: username,
            email: email,
            password: password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        // window.location = '/'   setting the next page
        setFullName("")
        setUsername("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className='container'>
                <div className='form-div'>
                    <form onSubmit={onSubmit}>
                        <input type='text'
                            placeholder='Full Name'
                            onChange={changeFullName}
                            value={fullName}
                            className='form-control form-group'
                        />
                        <input type='text'
                            placeholder='Username'
                            onChange={changeUsername}
                            value={username}
                            className='form-control form-group'
                        />
                        <input type='text'
                            placeholder='E-mail'
                            onChange={changeEmail}
                            value={email}
                            className='form-control form-group'
                        />
                        <input type='password'
                            placeholder='Password'
                            onChange={changePassword}
                            value={password}
                            className='form-control form-group'
                        />
                        <input type='submit' className='btn btn-danger btn-block' value='submit'/>

                    </form>
                </div>
            </div>
        </>
    )
}


export default App;