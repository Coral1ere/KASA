import React from "react";
import "../data/logements.json";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../style/home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
