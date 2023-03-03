import React from "react";
import useJsonFetch from "../../hooks/useJsonFetch";

const Data = ({ url }) => {
  const [{ data, isLoading, error }] = useJsonFetch(url);

  return (
    <div className="box">
      {isLoading && <p>...Loading</p>}
      {data && <p>Status: {data.status}</p>}
      {error && console.log(error)}
    </div>
  );
};

export default Data;
