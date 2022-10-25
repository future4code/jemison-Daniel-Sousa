type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//C) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
//Usaria o comando tsc, com esse comando, ele localiza a pasta onde os arquico esta e faz a transpilação, gerando um arquivo js e o o aquirivo js.map, caso esteva em uma past src


//D) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
//Usando o tsc -w, ele faz a transpilação em tempo real, de todos os arquivos que criamos ou vamos criar, gerando um arquivo js e o o aquirivo js.map, caso esteva em uma past src