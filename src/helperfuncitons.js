
const getRickAndMortyStuff = async() => {
  const character = await fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 300)}`);
  return character;
}; 

export { getRickAndMortyStuff }
;
