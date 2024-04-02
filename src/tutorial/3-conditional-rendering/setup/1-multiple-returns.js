import React, { useState, useEffect, useCallback } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [erroe, setError] = useState(false);
  const [user, setUsers] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if(res.status >= 200 && res.status <= 299){
          return res.json();
        }
      })
      .then((user) => {
        const { login } = user;
        setUsers(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
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
