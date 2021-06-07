console.log("Abrindo a tela.");

//console.time();
setTimeout(function () {
  //console.timeEnd();
  console.log("Tela carregada.");
}, 2000);

// var operacao = new Promise(resolve => {
//   setTimeout(() => resolve(), 2000);
// });

// operacao.then(() => {
//   console.log("Tela carregada.");
// });

console.log("Obtendo informações da tela.");

//Alternativas:
// A)
//  Abrindo a tela.
//  Tela carregada.
//  Obtendo informações da tela.
// B)
//  Abrindo a tela.
//  Obtendo informações da tela.
//  Tela carregada.
