import { useState, useEffect } from "react";

const UseEff = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(`Current text: ${text}`);
  }, [text]);

  return (
    <div>
      <h1>useEffect </h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Current text length: {text.length}</p>
      <button onClick={() => setText("")}>Clear</button>
    </div>
  );
};

export default UseEff;