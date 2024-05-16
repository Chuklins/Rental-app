// import React from 'react';

import FirstSection from "../../components/FirstSection.jsx";
import Header from "../../components/Header.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import LastSection from "../../components/LastSection.jsx";
import SecondSection from "../../components/SecondSection.jsx";
import ThirdSection from "../../components/ThirdSection.jsx";

function index() {
  return (
    <>
      <Header />
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </>
  );
}

export default index;
