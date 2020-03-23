import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled from "styled-components";

// TODO: Add useState to track data from useEffect
const CharacterList = props => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    };
    getCharacters();
  }, [search]);

  const handleChange = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(`submitting Name: ${search}`);
  };

  const Search = styled.div`
    text-align: center;
  `;

  return (
    <section className="character-list">
      <Search>
        <SearchForm
          placeholder="Search"
          value={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Search>
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </section>
  );
};

function CharacterDetails({ character }) {
  const { name, gender, status, image } = character;
  const Container = styled.div`
    display: inline-block;
    margin: 50px;
  `;

  const CharacterContainer = styled.div`
    background-color: rgba(247, 247, 247, 0.8);
    border: 1px solid #443e3e;
    box-shadow: 0px 5px 20px rgb(71, 71, 71);
    width: 400px;
    margin: 0 auto;
  `;

  const CharacterHeading = styled.h1`
    color: #443e3e;
    font-weight: bold;
    text-align: center;
  `;

  const CharacterPhoto = styled.div`
    text-align: center;
    border-radius: 10px;
  `;

  const CharacterInfo = styled.p`
    color: #443e3e;
    text-align: center;
  `;
  return (
    <Container>
      <CharacterContainer>
        <CharacterHeading>{name}</CharacterHeading>
        <CharacterPhoto>
          <img src={image} alt="Character Image" />
        </CharacterPhoto>
        <CharacterInfo>Gender: {gender}</CharacterInfo>
        <CharacterInfo>Status: {status}</CharacterInfo>
      </CharacterContainer>
    </Container>
  );
}

export default CharacterList;
