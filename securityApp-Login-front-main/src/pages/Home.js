import { React, useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'

const Home = () => {
  console.log("Entro al home")

  return (
    <>
      <Navbar />
      <h5>Bienvenido</h5>

    </>
  );
};

export default Home;