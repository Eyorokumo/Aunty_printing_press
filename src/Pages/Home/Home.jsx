import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../Context/data/myContext";
import HeroSection from "../../Components/herosection/HeroSection";
import Filter from "../../Components/filter/Filter";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
    </Layout>
  );
}

export default Home;
