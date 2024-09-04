import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css';  // Assurez-vous que ce chemin est correct

function App() {
  return (
    <div className="grid-container">
      <Sidebar />
      <Header />
      <main className="main">Contenu principal ici</main>
    </div>
  );
}

export default App;
