import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";

// const url = "https://api.github.com/users";
const url = "https://api.github.com/users/zainabturkmen/followers?per_page=100";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const githubUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    githubUsers();
  },[]);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
