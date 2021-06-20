import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom";
function Update({ID,apiUrl}) {
    const history = useHistory()
    const [values,setValue] = useState({
        list: "",
    });
    // const [getdata, setGetData] = useState()
    useEffect(()=>{
        axios.get(apiUrl + `detail/${ID}`)
        .then(res=>{setValue({
            list:res.data.list
        })})
    },[])
    const handleChange = (e)=>{
        setValue({
            ...values,
            [e.target.name] : e.target.value,
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log("submitted");
        await axios.put(apiUrl + `detail/${ID}/`,values)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
        history.push("/fake")
    }
    return (
        <div>
            <h3>update data of id : {ID}</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    List:
                    <input 
                    type="text"
                    onChange={(e)=>handleChange(e)}
                    name='list'
                    value={values.list}
                    />
                </label>
                <input type="submit" value="update"/>
            </form>
        </div>
    )
}

export default Update
