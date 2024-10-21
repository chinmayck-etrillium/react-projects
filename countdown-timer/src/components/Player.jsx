import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [name, setName] = useState();
  const playerName = useRef();
  return (
    <section id="player">
      <h2>Welcome {name || "player"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button
          onClick={() => {
            setName(playerName.current.value);
            playerName.current.value = "";
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
