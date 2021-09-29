import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
 
  const [profileCell, setProfileCell] = useState("");
  const getData = async () => {
    try {
      const res = await axios.get("https://course-api.com/react-tours-project");
      setProfileCell(res.data[0].name);
      console.log(setProfileCell)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <p>{profileCell}</p>
    </div>
  );
};

export default Axios;

// import axios from 'axios';

// const getPostsData = () => {
//     axios
//     .get("https://course-api.com/react-tours-project")
//     .then(data => {console.log(data.data)})
//     .catch(error => console.log(error));
//     };
//    getPostsData();
   
// export default getPostsData;

