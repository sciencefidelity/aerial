import audiocore
import board
import time
import audiobusio
import digitalio

from audiomp3 import MP3Decoder

mp3 = open("sound.mp3", "rb")
decoder = MP3Decoder(mp3)
audio = audiobusio.I2SOut(board.GP10, board.GP11, board.GP9)

while True:
    audio.play(decoder)
    time.sleep(99)
