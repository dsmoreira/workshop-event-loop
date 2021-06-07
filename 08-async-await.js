function logInfo(msg) {
  debugger;
  console.log(msg);
}

function carregarAplicacao() {
  logInfo("Iniciando execução da aplicação");

  async function operacao() {
    return 15;
  }

  debugger;
  operacao().then((result) => {
    logInfo(`Resultado da operação: ${result}`);
  });

  //   var result = await operacao();
  //   logInfo(`Resultado da operação: ${result}`);

  logInfo("Finalizando execução da aplicação");
}

carregarAplicacao();
