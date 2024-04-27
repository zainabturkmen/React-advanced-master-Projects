import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { type } from "@testing-library/user-event/dist/type";

// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state]
    return {
      ...state,
      people: [],
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  throw new Error ("no matching action type")
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({ type: "  ADD_ITEM", payload: newItem });
    } else {
      dispatch({type: "RANDOM"})
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};
export default Index;
