"""loop a wave file"""
import audiocore
import board
import time
import audiobusio
import digitalio

wave_file = open("sound.wav", "rb")
wave = audiocore.WaveFile(wave_file)

audio = audiobusio.I2SOut(board.GP10, board.GP11, board.GP9)

audio.play(wave, loop=True)

while audio.playing:
    pass
