import { PokerChip, MagnifyingGlass, Hash } from "phosphor-react";

export default function App() {
async function fetchData(){
  const data= await
  fetch('"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"')
  .then((response) => response.json())

  
}
return (
<div className= "flex flex-col mb-12">
<header className="flex flex-col bg-red-700 w-full items-start px-6 py-4 drop-shadow-lg">
<div className="flex items-center gap-4 text-white font-bold py-4">
<PokerChip size={44} />

<h1 className="text-3xl">Pokedex</h1>
</div>

<div className="flex w-full gap-12 items-center justify-between">
<div className="flex flex-1 border bg-white rounded-full items-center">
<span className="flex pl-4">
<MagnifyingGlass size={25} weight="bold" className= "text-red-700" />

</span>

<input
type="text"
placeholder="digite o nome de um pokemon"
className="w-full py-3 px-6 rounded-full text-red-700"
/>


</div>
<Hash 
size={"46"}/>
</div>
</header>
<main className="grid grid-cols-2">

</main>
</div>
)
}