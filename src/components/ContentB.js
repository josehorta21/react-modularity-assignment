import React, { useState } from "react";
import { Button } from "./SharedComponents";

export function ContentB() {
  const [text, setText] = useState("");

  const isEmpty = text.trim().length === 0;

  return (
    <section style={styles.card}>
      <h2>ContentB</h2>
      <p>This is dummy content for ContentB.</p>

      <label>
        Type something:
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Try leaving this empty (edge case)"
          style={styles.input}
        />
      </label>

      <p>
        Status:{" "}
        {isEmpty ? <strong>Empty (edge case)</strong> : <strong>OK</strong>}
      </p>

      <Button
        label="Submit B"
        disabled={isEmpty}
        onClick={() => alert(`Submitted: ${text}`)}
      />
    </section>
  );
}

const styles = {
  card: {
    padding: "16px",
    border: "1px solid #eee",
    borderRadius: "14px",
    marginTop: "16px",
  },
  input: {
    display: "block",
    marginTop: "8px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "100%",
    maxWidth: "420px",
  },
};