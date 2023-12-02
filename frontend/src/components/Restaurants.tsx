import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Restaurants() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/api/restaurant/";

  const res = useSelector((state: RootState) => state.restaurant);

  useEffect(() => {
    function fatchData() {
      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    }
    fatchData();
  }, []);
  console.log("data :>> ", data);
  return <div>Restaurants</div>;
}
