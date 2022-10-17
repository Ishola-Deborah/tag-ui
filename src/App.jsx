import React from "react";
import { useState } from "react";
import "./App.css";

const myTag = [
  { id: 0, tag: "Benz" },
  { id: 1, tag: "corolla" },
  { id: 2, tag: "bmw" },
  { id: 3, tag: "toyoto" },
  { id: 4, tag: "camry" },
  { id: 5, tag: "lamborghini" },
];
let nextId = 6;

const App = () => {
  const [inputText, setInputText] = useState("");
  const [tagContent, setTagContent] = useState(myTag);
  const addText = () => {
    //SET TAG LENGTH,NUMBER OF TAG YOU WANT IN THE CONTAINER
    if (tagContent.length < 14) {
      setTagContent([...tagContent, { tag: inputText, id: nextId++ }]);
      setInputText("");
    }
  };

  const enterTag = (e) => {
    if (e.key === " " || e.key === "Enter") {
      addText();
    }
  };
  const deleteTag = (id) => {
    setTagContent([...tagContent].filter((tag) => tag.id !== id));
 
  };

  return (
    <div>
      <div className="app">
        <div className="hero">
          <h2>Tags</h2>
          <span className="material-symbols-outlined">help</span>
        </div>
        <div className="inputContainer">
          <div className="inputValue">
            <span className="material-symbols-outlined">loyalty</span>
            <input
              type="text"
              placeholder="enter a new tag"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyUp={enterTag}
            />
          </div>
        </div>

        <hr />

        <div className="tagContainer">
          <div className="tag_list">
            {tagContent.map((tag) => (
              <li key={tag.id} className="tagLi">
                <p>{tag.tag}</p>
                <span
                  className="delete"
                  onClick={() => {
                    deleteTag(tag.id);
                  }}
                >
                  <span className="material-symbols-outlined">close</span>
                </span>
              </li>
            ))}
          </div>
        </div>

        <footer className="footer">
          <p className="signature">
            designed by <a href="#">Debby</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
