import pyautogui
import time

time.sleep(10)

# Define a mensagem desejada
mensagem = "bom dia"


tempo_inicial = time.time()

# Duração de tempo da mensagem
duracao_total = 10

while (time.time() - tempo_inicial) < duracao_total:

    pyautogui.write(mensagem)
    

    pyautogui.press('enter')
    
 
    time.sleep(0) 


print("O período de envio de mensagens terminou")

time.sleep(5)

print("Script finalizado")
