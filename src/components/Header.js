import React from "react";

const Header = ({ titulo }) => {
  return (
    <header className="bg-metallic text-center py-4 shadow-lg">
      <h1 className="text-gray-100 font-staatliches uppercase text-3xl">
        {titulo}
      </h1>
    </header>
  );
};

export default Header;
