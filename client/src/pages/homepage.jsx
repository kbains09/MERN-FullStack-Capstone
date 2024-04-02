import React from "react";
import Featured from "../components/Home/Featured/Featured";
import Gallery from "../components/Home/Gallery/Gallery";
import Hero from "../components/Home/Hero/Hero";
import Newsletter from "../components/Home/Newsletter/Newsletter";
import Why from "../components/Home/Why/Why";


function Homepage() {
  return (
    <div>
      <Hero />
      <Featured />
      <Why />
      <Newsletter />
      <Gallery />
    </div>
  );
}

export default Homepage;