
const getRickAndMortyStuff  = () => {
//   return fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 300)}`);
  return fetch('https://rickandmortyapi.com/api/character/197')
    .then(rest => {
      return rest.json();
    });
  
}; 

export default getRickAndMortyStuff
;
