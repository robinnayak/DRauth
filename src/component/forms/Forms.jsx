import React,{useState} from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom";
function Forms({apiUrl}) {
    const history = useHistory()
    const [values,setValue] = useState({
        list: "",
    });
    // console.log(apiUrl)
    const handleChange = (e)=>{
        setValue({
            ...values,
            [e.target.name] : e.target.value,
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post(apiUrl,values)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
        history.push("/fake")
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                New List: 
                <input type="text"
                    name="list" 
                    id="list" 
                    value={values.list} 
                    onChange={(e)=>handleChange(e)}
                    />
            </label>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default Forms
