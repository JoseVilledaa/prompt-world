import React from "react";
import "@styles/globals.css";

export const metedata = {
  title: "Prompt World",
  description: "Descubre y comparte Prompts de IA",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
