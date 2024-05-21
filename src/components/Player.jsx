import { useState, useRef } from "react";

export default function Player() {
  const enteredPlayerName = useRef();
  const [ playerName, setPlayerName ] = useState(null);
  

  function handleSubmit() {
    setPlayerName(enteredPlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown Entity'}</h2>
      <p>
        <input type="text" ref={enteredPlayerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
