import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";

// const url = "https://api.github.com/users";
const url = "https://api.github.com/users/zainabturkmen/followers?per_page=100";

const UseEffectFetchData = () => {
 const [users, setUsers] = useState([])
};

export default UseEffectFetchData;
