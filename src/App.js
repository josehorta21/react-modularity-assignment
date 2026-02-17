import React from "react";

import Header from "./components/Header"; // default import
import Footer from "./components/Footer"; // default import
import { ContentA } from "./components/ContentA"; // named import
import { ContentB } from "./components/ContentB"; // named import

function App() {
  return (
    <div style={{ padding: 16, fontFamily: "Arial, sans-serif" }}>
      <Header />
      <main style={{ maxWidth: 900 }}>
        <ContentA />
        <ContentB />
      </main>
      <Footer />
    </div>
  );
}

export default App;