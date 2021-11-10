"""Play audio sample then wait 10 seconds before playing again"""
import audiocore
import board
import time
import audiobusio
import digitalio

wave_file = open("StreetChicken.wav", "rb")
wave = audiocore.WaveFile(wave_file)

audio = audiobusio.I2SOut(board.GP10, board.GP11, board.GP9)

while True:
    audio.play(wave)
    time.sleep(10)

while audio.playing:
    pass
    time.sleep(0.1)
