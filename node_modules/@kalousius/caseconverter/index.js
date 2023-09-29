const lodash = require('lodash');

const sentenceCase = (name) => {
  const words = name.split(' ');
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
};

module.exports = sentenceCase;
