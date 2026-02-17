import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <small>© {new Date().getFullYear()} — React Modularity Assignment</small>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "16px",
    borderTop: "1px solid #ddd",
    marginTop: "24px",
    color: "#555",
  },
};