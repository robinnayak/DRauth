import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

function Articlelist({ BaseApi }) {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const userlogged = useSelector((state) => state.auth.userlogged);
  console.log("token", token);
  const list = JSON.parse(localStorage.getItem("token"));
  const userlist = localStorage.getItem("userlogged");
  console.log(list, userlist);
  const [lists, setList] = useState([]);

  if (token === null) {
    history.push("/login");
  }

  useEffect(() => {
    axios
      .get(BaseApi, {
        headers: {
          authorization: `Token ${token}`,
        },
      })
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onhandleclick = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div>
      Article list are here username : {userlogged}
      <div>
        <button type="submit" onClick={(e) => onhandleclick(e)}>
          logout
        </button>
      </div>
      {lists.map((list) => (
        <div key={list.id}>
          <div>
            <h1>Title:{list.title} </h1>
          </div>
          <div>
            Description:
            <p>{list.description}</p>
          </div>
          <div>
            <button>update</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articlelist;
