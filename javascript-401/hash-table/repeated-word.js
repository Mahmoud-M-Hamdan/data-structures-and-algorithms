'use strict';

const HashTable = require('./hashtable');

function repeatedWord(string) {
  const newHashTable = new HashTable();

  let repeatedWord;

  let statement = string.split(' ');

  console.log(statement);

  for (let i = 0; i < statement.length; i++) {
    if (newHashTable.contains(statement[i])) {
      repeatedWord = statement[i];
      break;
    }

    newHashTable.add(statement[i].toLowerCase(), statement[i].toLowerCase());
  }


  return repeatedWord;
}

let string =
  'It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

console.log(repeatedWord(string));


module.exports=repeatedWord;
