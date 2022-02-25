import React from "react";
import Elements from "./Elements";
import Navbar from "./Navbar";

const Jumbotron = () => {
  return (
    <div className="flex flex-col bg-hero-img bg-cover bg-center px-2 md:px-20 py-5">
      <Navbar />
      <div className="text-white mt-56 md:mt-32 lg:w-1/3 md:w-10/12">
        <h1 className="text-4xl md:text-7xl font-libre-baskerville">Cari Cari</h1>
        <p className="mt-3 opacity-60">Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
      </div>
      <Elements />
    </div>
  );
};

export default Jumbotron;
