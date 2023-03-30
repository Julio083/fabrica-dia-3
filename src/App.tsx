import { PokerChip, MagnifyingGlass, Hash } from "phosphor-react";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

interface IPokemon {
  name: string;
}

export default function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  async function fetchData() {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=200"
    ).then((response) => response.json());

    setPokemons(data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col mb-12">
      <header className="flex flex-col bg-red-700 w-full items-start px-6 py-4 drop-shadow-lg">
        <div className="flex items-center gap-4 text-white font-bold py-4">
          <PokerChip size={44} />

          <h1 className="text-3xl">Pokedex</h1>
        </div>

        <div className="flex w-full gap-12 items-center justify-between">
          <div className="flex flex-1 border bg-white rounded-full items-center">
            <span className="flex pl-4">
              <MagnifyingGlass
                size={25}
                weight="bold"
                className="text-red-700"
              />
            </span>

            <input
              type="text"
              placeholder="digite o nome de um pokemon"
              className="w-full py-3 px-6 rounded-full text-red-700 placeholder:text-gray focus:outline-nome"
            />
          </div>
          <Hash
            size={"46"}
            weight="bold"
            className="bg-white text-red-600 rounded-full p-3"
          />
        </div>
      </header>
      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-12 gap-3 mx-auto">
        {pokemons.map((item,index) => (
         <Card
         name={item.name}
         position={index+1}
         />
        ))}
      </main>
     
    </div>
  );
}
