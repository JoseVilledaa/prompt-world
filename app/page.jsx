import React from "react";

import  { Feed }  from "../components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubre Y Comparte
        <br className="max-md:hidden " />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt World es una plataforma para compartir y descubrir prompts de IA.
      </p>

      <Feed/>
      
    </section>
  );
};

export default Home;
