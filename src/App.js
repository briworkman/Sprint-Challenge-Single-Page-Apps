import React from "react";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <nav>
        <div className="links">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/character-list" className="nav-links">
            Characters
          </Link>
        </div>
      </nav>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
    </main>
  );
}
