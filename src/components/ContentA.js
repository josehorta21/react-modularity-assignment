import React, { useState } from "react";
import { Button } from "./SharedComponents";

export function ContentA() {
  const [count, setCount] = useState(0);

  return (
    <section style={styles.card}>
      <h2>ContentA</h2>
      <p>This is dummy content for ContentA.</p>
      <p>
        Normal case counter: <strong>{count}</strong>
      </p>

      <Button label="Increase A" onClick={() => setCount((c) => c + 1)} />
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
};