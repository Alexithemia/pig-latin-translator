let primeModule = require("../piglatin-translator.js");
let chai = require('chai');
let should = chai.should();

describe("The Pig-Latin translation", function () {

  it("for 'ash-tray uck-day' should be 'trash duck'", function () {
    let translation = primeModule.pigLatinTranslator('ash-tray uck-day');
    translation.should.equal('trash duck');
  });

  it("should return 'Not a string", function () {
    let translation = primeModule.pigLatinTranslator(60085);
    translation.should.equal("Not a string");
  });

  it("for 'y-may overcraft-hay is-ay ull-fay of-ay eels-ay' should be 'My hovercraft is full of eels'", function () {
    let translation = primeModule.pigLatinTranslator('y-may overcraft-hay is-ay ull-fay of-ay eels-ay');
    translation.should.equal('my hovercraft is full of eels');
  });

  it("for 'its over 9000!!!' should be 'This phrase is not piglatin'", function () {
    let translation = primeModule.pigLatinTranslator('its over 9000!!!');
    translation.should.equal('This phrase is not piglatin');
  });

  it("for 'do you come in peace?' should be 'o-day ou-yay ome-cay in-ay eace-pay'", function () {
    let translation = primeModule.toPigLatinTranslator('do you come in peace');
    translation.should.equal('o-day ou-yay ome-cay in-ay eace-pay');
  });

  it("for 'we do not consent to probing' should be 'e-way o-day ot-nay onsent-cay o-tay obing-pray'", function () {
    let translation = primeModule.toPigLatinTranslator('we do not consent to probing');
    translation.should.equal('e-way o-day ot-nay onsent-cay o-tay obing-pray');
  });

  it("should return 'Not a string", function () {
    let translation = primeModule.toPigLatinTranslator(60085);
    translation.should.equal("Not a string");
  });
});