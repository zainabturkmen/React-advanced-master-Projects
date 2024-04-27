import React, { useState } from "react";
import { data } from "../.../.../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  return (
    <section className="">
      <h3>Prop drilling</h3>
      <List people={people} />
    </section>
  )


};

export default PropDrilling;
