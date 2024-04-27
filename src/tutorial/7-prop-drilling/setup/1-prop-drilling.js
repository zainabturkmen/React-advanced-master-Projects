import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people)=> {
      return people.filter((person)=> person.id !== id)
    })
  }
  return (
    <section className="">
      <h3>Prop drilling</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  return (
    <div className="item">
      <h4>single item</h4>
    </div>
  );
};
export default PropDrilling;
