import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  const CharacterPhoto = styled.div`
    text-align: center;
    border-radius: 10px;
  `;
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <CharacterPhoto>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </CharacterPhoto>
      </header>
    </section>
  );
}
