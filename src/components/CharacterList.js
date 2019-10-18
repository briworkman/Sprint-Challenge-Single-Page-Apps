import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

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

  return (
    <section className="character-list">
      <SearchForm
        placeholder="Search"
        value={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </section>
  );
};

function CharacterDetails({ character }) {
  const { name, gender, status, image } = character;
  return (
    <Link to={`/components/CharacterCard`}>
      <div className="character-card">
        <h2>{name}</h2>
        <img src={image} alt="Character Image" />
        <p>{gender}</p>
        <p>{status}</p>
      </div>
    </Link>
  );
}

export default CharacterList;
