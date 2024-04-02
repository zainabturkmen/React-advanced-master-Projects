import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(false);
  const [erroe, setError] = useState(false);
  const [user, setUsers] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((user)=> {
        
      })
      .catch((error) => console.log(error));
  }, []);

  if (isloading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  if (erroe) {
    return (
      <div>
        <h1>Erorr....</h1>
      </div>
    );
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
