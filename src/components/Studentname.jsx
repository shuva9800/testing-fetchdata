import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Studentname() {
    const [posts, setPost] = useState([]);
   const apicall = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      setPost(data);
      console.log("fatched data is:", data);
      console.log("satate data is:", posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apicall();
  }, []);
  return <div>
    {
        posts.map((student)=>(
            <Link to={`/details/${student.id}`} key={student.id}>
                    <p>{student.price}</p>
            </Link>
        ))
    }
  </div>;
}
