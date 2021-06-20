import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { tokenreciever } from "../features/auth/authSlice";
function Login({BaseApi}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [values, setValue] = useState({
        username:'',
        password:'',

    })
    const {username,password} = values
    const handleChange = (e)=>{
        setValue({
            ...values,
            [e.target.name] : e.target.value,
        });
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        await axios
        .post(BaseApi + 'rest-auth/login/',values)

        .then(res=> dispatch(tokenreciever({
            token:res.data.key,
            userlogged:username,
        })))
        .catch(err=>console.log(err))
        history.push('/')
        
    }

    return (
        <div>
            <h1>login form</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    username:
                </label>
                <input type="text" name="username" id='username' value={username} onChange={(e)=> handleChange(e)} />
                
                <label htmlFor="">
                    password:
                </label>
                <input type="password" name="password" id='password' value={password} onChange={(e)=> handleChange(e)} />

                <div>
                    <input type="submit" value="login" />
                </div>
            </form>
            
        </div>
    )
}

export default Login
