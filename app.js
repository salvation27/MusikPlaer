const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.player_progres'),
      progressBar = document.querySelector('.progress'),
      titleSong = document.querySelectorAll('.player_song_title'),
      cover = document.querySelector('.player_fig_circle'),
      imgSrc = document.querySelector('.img_src')
      // imgStop = document.querySelector('.img_src_stop'),
      // imgPlay = document.querySelector('.img_src_play')


// Массив из всех песен


const audioSrc = [
   {
name:'Султан Лагучев',
src:'https://cdn1.sefon.pro/prev/A5YZb-THFchSqp56XW8G0A/1618733954/217/%D0%A1%D1%83%D0%BB%D1%82%D0%B0%D0%BD%20%D0%9B%D0%B0%D0%B3%D1%83%D1%87%D0%B5%D0%B2%20-%20%D0%93%D0%BE%D1%80%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%92%D0%BA%D1%83%D1%81%20%28192kbps%29.mp3'
  },
  {
    name:'Konfuz',
    src:'https://cdn6.sefon.pro/prev/DKy_iPLlFj--DmxMrPVEpA/1618727886/215/Konfuz%20-%20%D0%A0%D0%B0%D1%82%D0%B0%D1%82%D0%B0%20%28192kbps%29.mp3'
      }
]

// Песня по умолчанию

let songIndex = 0

// init

function init(song){
  console.log('77777',song);
  for(one of titleSong){
    one.innerHTML = song.name 
  }
  audio.src  = song.src //получаем доступ к песне
  // cover.src = `img/cover${songIndex + 1}.svg`//получаем доступ к картинке песни
}



init(audioSrc[songIndex]) // передаем в функцию песню


// функция плей


function playSong (){
  player.classList.add('played')
  cover.classList.add('activ')
  audio.play()
  imgSrc.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwfxAQG0fXuUPdMskBYNk05WfN5EE8JwYu3Wp9iTHfr2ETDO146yMQr09HPfF5R2lg-0&usqp=CAU'
  // imgPlay.classList.add('d_none')
  // imgStop.classList.remove('d_none')
}

// функция стоп 

function pauseSong (){
  player.classList.remove('played')
  cover.classList.remove('activ')
  audio.pause()
  imgSrc.src = 'https://image.flaticon.com/icons/png/512/60/60734.png'
  // imgStop.classList.add('d_none')
  // imgPlay.classList.remove('d_none')
}

// function changeImg(){

// }

playBtn.addEventListener('click',()=>{
  const isPlaying = player.classList.contains('played')
  if(isPlaying){
    pauseSong()
  }else{
    playSong()
  }
})


// next song

function nextSong(){
  songIndex ++
  if(songIndex > audioSrc.length - 1){
    songIndex = 0
  }
  init(audioSrc[songIndex])
  playSong()
}

nextBtn.addEventListener('click',nextSong)


// prev song
function prevSong(){
   songIndex --
  if(songIndex < 0){
    songIndex = audioSrc.length - 1
  }
  init(audioSrc[songIndex])
  playSong()
}

prevBtn.addEventListener('click',prevSong)

// progres bar

progressBar.style.width= 0  // установили длину прогресбара


function updateProgress(e){

const {duration,currentTime} = e.srcElement
const progressPersent = (currentTime/duration) *100
progressBar.style.width  = `${progressPersent}%`
}

audio.addEventListener('timeupdate',updateProgress)

// set Progres

function setProgress(e){
  const widthCont = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX/widthCont)*duration
}

progressContainer.addEventListener('click',setProgress)


// Autoplay

audio.addEventListener('ended',nextSong)