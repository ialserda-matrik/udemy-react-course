import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} - We are currently open.
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" width="200" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, Mozarella, spinach and Ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
