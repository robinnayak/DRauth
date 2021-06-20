import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function ArticleDetail({ BaseApi }) {
  const history = useHistory()
  const [values, setValue] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(BaseApi, values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      history.push('/fake')
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          value={values.title}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="">
        Description:
        <input
          type="text"
          name="description"
          id="description"
          value={values.description}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default ArticleDetail;
