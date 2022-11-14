import React from "react";
import { useState } from "react";
import AfricanApi from "./api/African";

let series = AfricanApi.African;
export default function Test() {
  const [data, setData] = useState([]);
  setData(series);
  return (
    <div>
      {data.map((se) => {
        return <div>{se}</div>;
      })}
    </div>
  );
}
