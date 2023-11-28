import React, { useEffect, useState } from "react";
import axios from "axios";

function Restaurants() {
  const url = "http://localhost:8080/api/restaurant/";
  const [data, setData] = useState([]);
  useEffect(() => {
    function fatchData() {
      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }
    fatchData();
  }, []);
  console.log("Data >>", data);
  return (
    <div>
      <div></div>
    </div>
  );
}

export default Restaurants;
