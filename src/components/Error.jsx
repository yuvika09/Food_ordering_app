import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  
  return(
    <>
      <h2> Error {err.status}!!!</h2>
      <h2> {err.statusText}</h2>
      <h2> {err.data}</h2>
    </>
  )
};

export default Error;
