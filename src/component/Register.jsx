import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
function Register({BaseApi}) {
    const history = useHistory()
    const [values, setValue] = useState({
        username:'',
        email:'',
        password1:'',
        password2:''
    })
    const handleChange = (e)=>{
        setValue({
            ...values,
            [e.target.name] : e.target.value,
        });
    }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        await axios.post(BaseApi+'rest-auth/register/',values)
        .then((res)=> console.log(res))
        .catch(err=>console.log(err))
        history.push('/login')
    }
    const {username,email,password1,password2} = values
    return (
        <div>
            <h1>Registration Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    UserName: 
                </label>
                <input type="text" name='username' id='username' value={username} onChange={(e)=> handleChange(e)} />
                <label htmlFor="">
                    Email: 
                </label>
                <input type="email" name='email' id='email' value={email} onChange={(e)=> handleChange(e)} />
                <label htmlFor="">
                    Password: 
                </label>
                <input type="password" name='password1' id='password1' value={password1} onChange={(e)=> handleChange(e)} />
                <label htmlFor="">
                    confirm-password: 
                </label>
                <input type="password" name='password2' id='password2' value={password2} onChange={(e)=> handleChange(e)} />
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Register
