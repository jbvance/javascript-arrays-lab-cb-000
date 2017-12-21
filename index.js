const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens;
};
