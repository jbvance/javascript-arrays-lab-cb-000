const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens;
};

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
  return kittens;
};
