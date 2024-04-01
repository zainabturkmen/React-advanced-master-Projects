import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";

// const url = "https://api.github.com/users";
const url = "https://api.github.com/users/zainabturkmen/followers?per_page=100";

const UseEffectFetchData = () => {
 const [users, setUsers] = useState([]);

const githubUsers = async() => {
  const response = await fetch(url);
  const users = await response.json();
  setUsers(users);
}

 useEffect(() => {
  githubUsers();
 }, [])


 return(
  <>
  <h3>github users</h3>
  </>
 )
};

export default UseEffectFetchData;
