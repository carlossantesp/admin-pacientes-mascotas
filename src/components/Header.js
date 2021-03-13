import React from "react";
import { GiDogHouse } from "react-icons/gi";
const Header = ({ titulo }) => {
  return (
    <header className="bg-metallic text-center py-4 shadow-lg">
      <h1 className="text-gray-100 font-staatliches uppercase text-3xl">
        <GiDogHouse className="inline-block mr-4" />
        {titulo}
      </h1>
    </header>
  );
};

export default Header;
