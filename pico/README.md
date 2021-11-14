# Brecon Sound Forage

This repo contains the files for the installation of *Brecon Sound Forage* at Y Gaer, Brecon.

## Installation of sounds on the Raspberry Pi Pico

#### Install Circuit Python on the Pico

Plug the Pico into the computer and drag the .uf2 file on to the drive RP2.

#### Install the script and sounds

Open a new terminal.

```shell
cd /Volumes/CIRCUITPI
cp ~/Sites/forage.works/pico/mp3/003.mp3 ./sound.mp3
cp ~/Sites/forage.works/pico/mp3.py ./code.py
```

#### Time constants for each sound

| Box Number    | Sound Number  | Time constant |
| ------------- | ------------- | ------------- |
| 1             | 008           | 103           |
| 2             | 005           | 106           |
| 4             | 015           | 109           |
| 5             | 027           | 112           |
| 6             | 003           | 115           |
| 7             | 020           | 118           |
| 8             | 024           | 121           |
| 9             | 034           | 124           |
| 10            | 035           | 127           |

### Version 1

Loop a single .wav file.

- Wave file maximum mono, 22kHz, 16bit

### Version 2

Loop a sound sample then wait for the length of the sample before playing again.

- mp3 file maximum mono, 44.1kHz, 16bit, 128kbps

### Version 3 (proposed)

Use proximity sensor to play the sound as a person approaches.

### Version 4 (proposed)

Trigger the sounds with bluetooth from a phone.
