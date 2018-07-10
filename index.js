/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

function response() {
  const inputstring = document.getElementById('sourceLangText').value;
  let output = '';
  for (let i = 0; i < inputstring.length; i += 1) {
    for (let x = 0; x < englishToBrailleLiteralSet.length; x += 1) {
      if (inputstring[i] === englishToBrailleLiteralSet[x][0]) {
        output += englishToBrailleLiteralSet[x][1];
      }
    }
  }
  document.getElementById('targetLangText').innerHTML = output;
}

window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', response);
};
