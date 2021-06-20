import axios from 'axios';
import React,{ useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import Forms from "./component/forms/Forms";
import Update from "./component/forms/Update";
function FetchData() {
    const history = useHistory()
    const [showdatas, setShowdata] = useState()
    const [details, setDetail] = useState("details")
    const [islogged,setIslogged] = useState(false)
    const [ID, setID] = useState()
    const apiUrl = 'http://localhost:8000/list/';
    useEffect(()=>{
        // const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        axios.get(apiUrl)
        .then((res)=> setShowdata(res.data.reverse()))
        .catch(err => console.log(err))
    },[])
    const onbtndetail = (id) =>{
        axios.get(apiUrl + `detail/${id}`)
        .then(res=> setDetail(res.data))
    }
    const onbtnclick = (id) =>{
        setIslogged(true)
        setID(id)
    }
    const onbtndelete = async (id)=>{
        console.log("delete btn is clicked.",id)
        await axios.delete(apiUrl +`detail/${id}/`);
        history.push("/fake")
    } 

    return (
        <div>
            fetching data....
            <ul>
                {
                    showdatas? showdatas.map(showdata=>{
                        return (
                            <div key={showdata.id}>
                                <li>{showdata.list}</li>
                                <button onClick={()=>onbtndetail(showdata.id)}>detail</button>
                                <button onClick={()=>onbtnclick(showdata.id)}>update</button>
                                <button onClick={()=>onbtndelete(showdata.id)}>delete</button>
                            </div>
                        )
                    })
                    : "Loading..."
                }
            </ul>
            <div>
                {details.list}
                <div>
                    <Forms apiUrl={apiUrl} />
                </div>
                <div>
                    {
                        islogged ? <Update ID = {ID} apiUrl = {apiUrl}/> : "Updating" 
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default FetchData
