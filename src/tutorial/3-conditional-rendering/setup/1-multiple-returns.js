import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [erroe, setError] = useState(false);
  const [user, setUsers] = useState("default user");

  if (isloading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return <h2>Multiple Loading...</h2>;
};

export default MultipleReturns;
