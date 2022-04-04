import React, { useState } from "react";
import Card from "../components/Card";

export default function Home({ searchKey }) {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputText.length === 0) return;
      setNotes([...notes, inputText]);
      setInputText("");
    }
  };

  const deleting = (idx) => {
    const temp = [...notes];
    temp.splice(idx, 1);
    setNotes([...temp]);
  };

  return (
    <div className="container">
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
              />
            );
          })
        : "Please Add Some Note"}
    </div>
  );
}
