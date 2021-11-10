import audiocore
import board
import audiobusio

wave_file = open("StreetChicken.wav", "rb")
wave = audiocore.WaveFile(wave_file)

audio = audiobusio.I2SOut(board.D1, board.D0, board.D9)

while True:
    audio.play(wave)

while audio.playing:
    pass
