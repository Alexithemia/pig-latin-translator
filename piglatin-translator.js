exports.pigLatinTranslator = function (str) {
  if (typeof str !== 'string') {
    return 'Not a string';
  }
  if (str.indexOf('-') === -1) {
    return 'This phrase is not piglatin'
  }
  let newStr = '';
  let tempArr = [];
  let strArr = str.split(' ');
  strArr.forEach(word => {
    let temp = word.split('-');
    tempArr.push(temp[1].slice(0, -2).concat(temp[0]));
  });
  newStr = tempArr.join(' ');

  return newStr;
}

exports.toPigLatinTranslator = function (str) {
  if (typeof str !== 'string') {
    return 'Not a string';
  }
  let newStr = '';
  let tempArr = [];
  let strArr = str.split(' ');

  strArr.forEach(word => {
    let firstVowel;
    let vowelMap = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true
    }
    let count = 0;

    while (firstVowel === undefined) {
      if (vowelMap[word[count]]) {
        firstVowel = count;
      }
      count++
    }
    let temp = word.slice(0, firstVowel)
    temp += 'ay';
    let temp2 = word.slice(firstVowel, word.length)
    temp2 += '-';
    tempArr.push(temp2.concat(temp));
  });
  newStr = tempArr.join(' ');

  return newStr;
}