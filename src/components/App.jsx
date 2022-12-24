import React from "react";
import emojipedia from "../emojipedia";
import Pair from "./Pair.jsx";
function showEmoji(emojis) {
  return (
    <Pair
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(showEmoji)}</dl>
    </div>
  );
}

export default App;
