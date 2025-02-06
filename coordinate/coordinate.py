import pyautogui
import time

print("Coloque o Mouse na área desejada")
time.sleep(5)

# Pega as coordernadas do mouse
x_pos, y_pos = pyautogui.position()
print(f"Coordenadas X: {x_pos}, Coordenadas Y: {y_pos}")