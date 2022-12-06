import bocchiGIF from './img/chr/bocchi.gif'
import ryoGIF from './img/chr/ryo.gif'
import nijikaGIF from './img/chr/nijika.gif'
import kitaGIF from './img/chr/kita.gif'

import bocchiSong from './songs/Guitar, Loneliness and Blue Planet.mp3'
import ryoSong  from './songs/Karakara.mp3'
import nijikaSong  from './songs/What is wrong with.mp3'
import kitaSong  from './songs/Distortion.mp3'

const Characters = {
  bocchi: {
    name: 'Goto Hitori',
    image: bocchiGIF,
    songTitle: 'Guitar, Loneliness and Blue Planet',
    color: 'FDC6DA',
    song: bocchiSong,
  },

  ryo: {
    name: 'Yamada Ryo',
    image: ryoGIF,
    songTitle: 'Karakara',
    color: '3C6B9F',
    song: ryoSong,
  },

  nijika: {
    name: 'Ijichi Nijika',
    image: nijikaGIF,
    songTitle: 'What is wrong with',
    color: 'FDD195',
    song: nijikaSong,
  },

  kita: {
    name: 'Kita Ikuyo',
    image: kitaGIF,
    songTitle: 'Distortion',
    color: 'F75551',
    song: kitaSong,
  },
}

export default Characters
