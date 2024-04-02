import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Loading...</h2>
};

export default MultipleReturns;
