import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled from "styled-components";

// TODO: Add useState to track data from useEffect
const LocationsList = props => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getLocations = () => {
      axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
          console.log(response);
          setLocations(response.data.results);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    };
    getLocations();
  }, []);

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
    <section className="location-list">
      <Search>
        <SearchForm
          placeholder="Search"
          value={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Search>
      {locations.map(location => (
        <LocationDetails key={location.id} location={location} />
      ))}
    </section>
  );
};

function LocationDetails({ location }) {
  const { name, dimension, residents } = location;
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

  const CharacterInfo = styled.p`
    color: #443e3e;
    text-align: center;
  `;
  return (
    <Container>
      <CharacterContainer>
        <CharacterHeading>{name}</CharacterHeading>
        <CharacterInfo>{dimension}</CharacterInfo>
        <CharacterInfo>Residents: {residents.length}</CharacterInfo>
      </CharacterContainer>
    </Container>
  );
}
export default LocationsList;
