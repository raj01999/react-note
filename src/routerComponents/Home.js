import React, { useState } from "react";
import Card from "../components/Card";

export default function Home({ searchKey, reload }) {
  const [notes, setNotes] = useState(
    localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : []
  );
  const [inputText, setInputText] = useState("");
  const [deleteAleart, setDeleteAleart] = useState(false);
  const [addAleart, setAddAleart] = useState(false);

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputText.length === 0) return;
      setNotes([...notes, inputText]);
      localStorage.setItem("key", JSON.stringify([...notes, inputText]));
      setInputText("");

      setAddAleart(true);
      setTimeout(() => {
        setAddAleart(false);
      }, 500);
    }
  };

  const deleting = (idx) => {
    const temp = [...notes];
    temp.splice(idx, 1);
    setNotes([...temp]);
    localStorage.setItem("key", JSON.stringify([...temp]));

    setDeleteAleart(true);
    setTimeout(() => {
      setDeleteAleart(false);
    }, 500);
  };

  return (
    <div className="container">
      {addAleart && (
        <p
          style={{
            fontSize: "2rem",
            color: "green",
            position: "absolute",
            top: "7.5rem",
          }}
        >
          Note Added
        </p>
      )}
      {deleteAleart && (
        <p
          style={{
            fontSize: "2rem",
            color: "red",
            position: "absolute",
            top: "7.5rem",
          }}
        >
          Deleted
        </p>
      )}
      {/* {console.log("Home Rander")} */}
      <textarea
        value={inputText}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      ></textarea>
      {notes.length
        ? notes.map((para, idx) => {
            return (
              <Card
                key={"key: " + idx}
                para={para}
                idx={idx}
                deleting={deleting}
                searchKey={searchKey}
                reload={reload}
                notes={notes}
              />
            );
          })
        : "Please Add Some Note"}
    </div>
  );
}
