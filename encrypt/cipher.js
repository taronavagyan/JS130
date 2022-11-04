"use strict";

const CHARACTERS = "abcdefghijklmnopqrstuvwxyz";

function encode(text) {
  let chars = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  let encryptedString = chars.reduce((string, char) => {
    if (!CHARACTERS.includes(char)) {
      return string + String(char);
    } else {
      let index = CHARACTERS.split("").findIndex((letter) => letter === char);
      return string + CHARACTERS[CHARACTERS.length - index - 1];
    }
  }, "");

  return _addSpaces(encryptedString);
}

function _addSpaces(encryptedString) {
  return encryptedString
    .split("")
    .reduce((string, char) => {
      string += char;
      if (string.replace(/[^a-z0-9]/g, "").length % 5 === 0) string += " ";
      return string;
    }, "")
    .trimEnd();
}

module.exports = encode;
