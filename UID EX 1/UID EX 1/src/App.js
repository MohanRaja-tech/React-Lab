import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import List from "./components/List";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Content />
        <List />
      </main>
      <Footer />
    </div>
  );
}

export default App;
