import React from "react";
import "@styles/globals.css";
import NavBar from "@components/NavBar";
import Provider from "@components/Provider";

export const metedata = {
  title: "Prompt World",
  description: "Descubre y comparte Prompts de IA",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
