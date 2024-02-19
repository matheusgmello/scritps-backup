import pyautogui
import time

time.sleep(10)

# Define a mensagem desejada
mensagem = "Bom dia seven"


tempo_inicial = time.time()

# Define a duração total em segundos que você deseja enviar a mensagem
duracao_total = 60

# Loop enquanto o tempo atual menos o tempo inicial for menor que a duração total
while (time.time() - tempo_inicial) < duracao_total:

    pyautogui.write(mensagem)
    

    pyautogui.press('enter')
    
 
    time.sleep(0) 


print("O período de envio de mensagens terminou")

time.sleep(5)

print("Script finalizado")
