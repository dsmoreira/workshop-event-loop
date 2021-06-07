console.log("Iniciando execução da aplicação");

var operacao = new Promise((resolve) => {
  setTimeout(() => resolve(), 2000);
});

operacao.then(() => {
  console.log("Execução de operação assíncrona pela Promise");
});

//Também funcionaria com setTimeout
//setTimeout(() => console.log("Execução de operação assíncrona pelo SetTimeout"), 2000);

console.log("Finalizando execução da aplicação");
