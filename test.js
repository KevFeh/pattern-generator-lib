const Generator = require('./index');
const gen = new Generator();

const pattern = '/F-/CVCVCV/-/CVCVCV/-/CVCVCV/-/000';
console.log(gen.pattern(pattern));
console.log(gen.patternComplexity(pattern));