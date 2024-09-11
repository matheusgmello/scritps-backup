const { exec } = require('child_process');

function shutdown() {

  exec('shutdown /s /f /t 0', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao tentar desligar o computador: ${error}`);
      return;
    }
    console.log('Desligando o computador...');
  });
}

function scheduleShutdown(seconds) {
  console.log(`O computador será desligado em ${seconds} segundos.`);
  setTimeout(shutdown, seconds * 1000);
}

// Defina o tempo em segundos
const tempoEmSegundos = 60; // 3600 = 1 hora
scheduleShutdown(tempoEmSegundos);
