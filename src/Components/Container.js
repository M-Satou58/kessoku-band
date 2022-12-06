import { useState, useEffect }  from 'react'
import Characters from '../Characters'
const Container = ({chr, setChr, song}) => {

  const chrList = ['bocchi', 'ryo', 'nijika', 'kita']
  const [chrIndex, setChrIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const playSong = () => {
    if (song.paused){
      song.play()
      setIsPlaying(true)
    } else{
      song.pause() 
      setIsPlaying(false)

    }
  }

  const newSong = () => {
    if (chrIndex === 3){
      setChrIndex(0)
      setIsPlaying(false)
    }else{ 
      setChrIndex(chrIndex + 1)
      setIsPlaying(false)
    }
  }

  const prevSong = () => {
    if (chrIndex === 0){
      setChrIndex(3)
      setIsPlaying(false)
    }else{ 
      setChrIndex(chrIndex - 1)
      setIsPlaying(false)
    }
  }

  useEffect(() => {
      song.pause()
      song.setInterval = 0
      setChr(Characters[chrList[chrIndex]])
  }, [chrIndex])

  
  return (
    <div className="container" style={{color:  `#${chr.color}`}}>
      <h1 className="chr-name">{chr.name}</h1>
      <img className="chr-image" src={chr.image} alt="hitori" />
      <h1 className="chr-song-title">{chr.songTitle}</h1>

      <div className="vis" style={{backgroundColor: `#${chr.color}`}}></div>

      <div className="audio-controls">
        <img className="like" src={`https://img.icons8.com/ios-glyphs/60/${chr.color}/filled-like.png`} alt="like.png"/>
        <img 
          className="rewind" src={`https://img.icons8.com/ios-glyphs/60/${chr.color}/rewind-button-round.png`}alt="rewind.png"
          onClick={prevSong}/>
        <img 
          
          src={isPlaying ? `https://img.icons8.com/ios-glyphs/60/${chr.color}/circled-pause.png`: 
                           `https://img.icons8.com/ios-glyphs/60/${chr.color}/play-button-circled--v1.png`}
          onClick={() => playSong(song)}
          alt="play/pause.png"
          />
        <img 
          src={`https://img.icons8.com/ios-glyphs/60/${chr.color}/fast-forward-round.png`}
          onClick={newSong}
          alt="forward.png"
        />
        <img className="share" src={`https://img.icons8.com/ios-glyphs/60/${chr.color}/share-rounded.png`} alt="share.png"/>
      </div>
    </div>
  )
}

export default Container
