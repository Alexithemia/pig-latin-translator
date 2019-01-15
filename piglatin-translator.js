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