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
src:'https://mp3bob.ru/download/muz/MARU_-_Ya_Tvoya_sample.mp3'
  },
  {
    name:'Konfuz',
    src:'https://mp3bob.ru//download/muz/Laurell_-_Habit_sample.mp3'
      }
]

// Песня по умолчанию

let songIndex = 0

// init

function init(song){
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