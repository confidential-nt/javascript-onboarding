const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function createDictionary(array) {
  const dictionary = {};
  for (let i = 0; i < array.length; i++) {
    dictionary[array[i]] = array[array.length - i - 1];
  }

  return dictionary;
}

function problem4(word) {
  const dictionary = createDictionary(alphabet);

  if (word.match(/[^a-zA-Z\s+]/g)) return;
  if (word.length < 1 || word.length > 1000) return;

  const splited = word.split("");

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === " ") continue;
    const replace = dictionary[splited[i].toUpperCase()];
    if (!splited[i].match(/[A-Z]/g)) {
      splited[i] = replace.toLowerCase();
    } else splited[i] = replace;
  }

  return splited.join("");
}

module.exports = problem4;
