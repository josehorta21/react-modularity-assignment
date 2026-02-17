import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>React Modularity Assignment</h1>
      <p style={styles.subtitle}>Default + Named exports/imports</p>
    </header>
  );
}

const styles = {
  header: {
    padding: "16px",
    borderBottom: "1px solid #ddd",
  },
  title: { margin: 0 },
  subtitle: { margin: "6px 0 0", color: "#555" },
};