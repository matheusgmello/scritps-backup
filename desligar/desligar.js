const { exec } = require('child_process');

function shutdown() {

  exec('shutdown /s /f /t 0', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao tentar desligar o caralho do pc: ${error}`);
      return;
    }
    console.log('Vamo funciona desliga');
  });
}

function scheduleShutdown(seconds) {
  console.log(`O pc vai ser desligado em ${seconds} segundos.`);
  setTimeout(shutdown, seconds * 1000);
}

// COLOCA O TEMPO EM SEGUNDOS CABECAO
const tempoEmSegundos = 1070; // 3600 = 1 hora
scheduleShutdown(tempoEmSegundos);
