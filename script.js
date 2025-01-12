const songs = [
  {
    title: "Carolina Carol Bela",
    artist: "Jorge Ben Jor",
    src: "musicas/Carolina Carol Bela - Jorge Ben Jor.mp3",
    cover: "assets/1.png",
  },
  {
    title: "Ela partiu",
    artist: "Tim Maia",
    src: "musicas/Tim Maia - Ela partiu.mp3",
    cover: "assets/2.png",
  },
  {
    title: "Cotidiano",
    artist: "Chico Buarque",
    src: "musicas/Chico Buarque - Cotidiano.mp3",
    cover: "assets/3.png",
  },
];

let currentIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const coverImage = document.getElementById("cover-image");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  coverImage.src = song.cover;
}

function playSong() {
  audio.play();
  playButton.querySelector("img").src = "buttons/pause.png"; // Alterna para botão de pausa
}

function pauseSong() {
  audio.pause();
  playButton.querySelector("img").src = "buttons/play.png"; // Alterna para botão de play
}

playButton.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
});

// Load the first song initially
loadSong(currentIndex);
