import "./App.css";
import { useState } from "react";
import abusiveWords from "./components/abusiveWords";

function App() {
  const [comment, setComment] = useState("");
  const [isAbusive, setIsAbusive] = useState(false);

  const handleCommentChange = (e) => {
    const { value } = e.target;
    setComment(value);

    // Check if the comment contains any abusive words
    const containsAbusiveWord = abusiveWords.some((word) =>
      value.toLowerCase().includes(word.toLowerCase())
    );

    // Update the state to indicate if the comment contains abusive words
    setIsAbusive(containsAbusiveWord);
  };

  return (
    <div className="App">
      <h1>Comment Box</h1>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment here..."
      />
      {isAbusive && (
        <p style={{ color: "red" }}>
          Please refrain from using abusive language.
        </p>
      )}
    </div>
  );
}

export default App;

