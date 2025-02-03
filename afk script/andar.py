import time
import pyautogui 

def simulate_key_press():
    pyautogui.keyDown('d')
    pyautogui.keyDown('a')
    time.sleep(0.1) 
    pyautogui.keyUp('d')
    pyautogui.keyUp('a')

# COLOCA EM MINUTOS
duration_minutes = 30
duration_seconds = duration_minutes * 60

start_time = time.time()

while time.time() - start_time < duration_seconds:
    simulate_key_press()
    time.sleep(1) 

print('SÓ PARA DPS DO TEMPO, QUISER CANCELAR APERTA CTRL + C NO TERMINAL')
