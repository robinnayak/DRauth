import React,{useState} from 'react'
import  axios from "axios";
import { useHistory } from "react-router-dom";
function Login() {
    const history = useHistory()
    const [token,setToken] = useState()
    const [loggedData,setLoggedData] = useState({
        username:'',
        password:'',
    })
    const {username, password} = loggedData

    const onhandlechange = (e)=>{
        setLoggedData({
            ...loggedData,
            [e.target.name] : e.target.value,
        })
    }
    const onhandleSubmit = async (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            setToken(token)
            console.log("login successful")
        })
        .catch(err => {
            console.log(err)
        })
        history.push('/data')
    }
    return (
        <div>
            <form action="" onSubmit={onhandleSubmit}>
                <div>
                <label htmlFor="">
                    Username: 
                </label>
                <input type="text" name="username" value={username} onChange={(e)=>onhandlechange(e)} />
                </div>
                <div>
                <label htmlFor="">
                    Password: 
                </label>
                <input type="password" name="password" value={password} onChange={(e)=>onhandlechange(e)} />
                </div>
                <input type="submit" value="Login" />
            </form>
            <div>
                <h1>Token : {token}</h1>
            </div>
        </div>
    )
}

export default Login
