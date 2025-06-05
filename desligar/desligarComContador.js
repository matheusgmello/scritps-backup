const { exec } = require('child_process');

function shutdown() {
  exec('shutdown /s /f /t 0', (error, stdout, stderr) => {
    if (error) {
      console.error(`\nErro ao tentar desligar o PC: ${error}`);
      return;
    }
    console.log('\nDesligamento iniciado!');
  });
}

/**
 * Agenda o desligamento do PC com um contador regressivo no terminal.
 * @param {number} hours O número de horas para o desligamento.
 */
function scheduleShutdownWithCountdown(hours) {
  let totalSeconds = hours * 60 * 60; // Converte horas para segundos

  console.log(`\nO PC será desligado em ${hours} hora(s).`);
  console.log('--- Contador Regressivo ---');

  const isTTY = process.stdout.isTTY; // Verifica se o ambiente é um TTY

  const countdownInterval = setInterval(() => {
    const remainingHours = Math.floor(totalSeconds / 3600);
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    const timeString = `Tempo restante: ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;

    if (isTTY) {
      // Se for um TTY, limpa a linha e reescreve
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(timeString);
    } else {
      // Se não for um TTY, imprime em uma nova linha
      console.log(timeString);
    }

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval); // Para o contador
      if (isTTY) {
        process.stdout.clearLine(0); // Limpa a última linha do contador
        process.stdout.cursorTo(0);
      }
      console.log('Tempo esgotado! Desligando o PC...');
      shutdown(); // Chama a função de desligamento
    }
    totalSeconds--;
  }, 1000); // Atualiza a cada 1 segundo
}

// COLOQUE O TEMPO EM HORAS AQUI
const tempoEmHoras = 1;
scheduleShutdownWithCountdown(tempoEmHoras);