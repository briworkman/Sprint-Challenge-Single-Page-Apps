import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LocationsList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocation = () => {
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
    getLocation();
  }, []);

  return (
    <div className="grid-view">
      {locations.map(location => {
        return <LocationDetails key={location.id} location={location} />;
      })}
    </div>
  );
};

const LocationDetails = ({ location }) => {
  const { name, type, dimension, residents } = location;
  const Container = styled.div`
    display: inline-block;
    margin: 50px;
  `;

  const LocationContainer = styled.div`
    background-color: rgba(247, 247, 247, 0.8);
    border: 1px solid #443e3e;
    box-shadow: 0px 5px 20px rgb(71, 71, 71);
    width: 400px;
    margin: 0 auto;
  `;

  const LocationHeading = styled.h1`
    color: #443e3e;
    font-weight: bold;
    text-align: center;
  `;

  const LocationInfo = styled.p`
    color: #443e3e;
    text-align: center;
  `;
  return (
    <Container>
      <LocationContainer>
        <LocationHeading>{name}</LocationHeading>
        <LocationInfo>
          {type} - {dimension}
        </LocationInfo>
        <LocationInfo>Residents: {residents.length}</LocationInfo>
      </LocationContainer>
    </Container>
  );
};
export default LocationsList;
