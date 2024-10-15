import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detailsofstudents() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const apicall = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      setPosts(data);
      console.log("fatched data is:", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  const details = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      {details ? (
        <div>
          <h1>{details.title}</h1>
          <p>description: {details.description}</p>
          <p>category : {details.category}</p>
        </div>
      ) : (
        <p>Loading details...</p>
      )}

      <Link to="/">goto student page</Link>
    </div>
  );
}

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function Detailsofstudents() {
//   const [posts, setPosts] = useState([]); // Fixed typo: setPost -> setPosts
//   const { id } = useParams();

//   const apicall = async () => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       const data = await response.data;
//       setPosts(data); // Fixed typo: setPost -> setPosts
//       console.log("Fetched data:", data); // Log fetched data
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   };

//   // Fetch data once when the component mounts
//   useEffect(() => {
//     apicall();
//   }, []); // Empty dependency array, so it runs once

//   // Find the post by id
//   const details = posts.find((post) => post.id === parseInt(id));

//   return (
//     <div>
//       {details ? (
//         <>
//           <h1>{details.title}</h1>
//           <p>Description: {details.description}</p>
//           <p>Category: {details.category}</p>
//         </>
//       ) : (
//         <p>Loading details...</p>
//       )}
//       <Link to="/">Go to student page</Link>
//     </div>
//   );
// }
