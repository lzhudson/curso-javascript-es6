"use strict";

var arr = [1, 3, 4, 5, 6];
var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);

var teste = function teste() {
  return 'teste';
};

var soma = function soma(a, b) {
  return a + b;
};

console.log(teste());

var returnArr = function returnArr() {
  return [1, 2, 3, 4, 5];
};

var returnObj = function returnObj() {
  return {
    nome: 'Hudson'
  };
};
