import React, { useState } from 'react'
import '../App.css'; // CSS dosyasının doğru konumunu belirtin
import karakter from './oyunresimleri/karakter.png';
import bitki from './oyunresimleri/bitkiengeli.png';
const Game = () => {
    const [character,setCharacter]=useState();
    const [plant,setPlant]=useState();

    const zipla=()=>{
        setCharacter(karakter);
        character.add("karakter-anim");
        setTimeout(() => {
            character.remove("karakter-anim")
        }, 500);
    }
  return (
    <div className='oyun'>
    <div className='trex'>
      <div className="karakter">
        <img src={karakter} alt="karakter" />
      </div>
      <div className='bitki'>
      <img src={bitki} alt="bitki" />
      </div>
    </div>
  </div>
  )
}

export default Game
