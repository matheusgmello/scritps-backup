import os
import time

# Defina o tempo em segundos (3600 segundos é equivalente a 1 hora)
tempo_para_desligar = 300

time.sleep(tempo_para_desligar)

os.system('shutdown /s /t 0')
