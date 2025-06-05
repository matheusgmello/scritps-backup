const { exec } = require('child_process');

function shutdown() {
  exec('shutdown /s /f /t 0', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao tentar desligar o PC: ${error}`);
      return;
    }
    console.log('Desligamento iniciado!');
  });
}

function scheduleShutdown(hours) {
  const minutes = hours * 60; // Converte horas para minutos
  const seconds = minutes * 60; // Converte minutos para segundos
  console.log(`O PC vai ser desligado em ${hours} horas (${minutes} minutos ou ${seconds} segundos).`);
  setTimeout(shutdown, seconds * 1000);
}

// COLOQUE O TEMPO EM HORAS AQUI
const tempoEmHoras = 1; // Exemplo: 1 hora
scheduleShutdown(tempoEmHoras);