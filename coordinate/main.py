import pyautogui
import time

print("Mova o mouse para a posição desejada e aguarde 5 segundos...")
time.sleep(5)

# Obtém e imprime as coordenadas atuais do mouse
x_pos, y_pos = pyautogui.position()
print(f"Coordenadas X: {x_pos}, Coordenadas Y: {y_pos}")