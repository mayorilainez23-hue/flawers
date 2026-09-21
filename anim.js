// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "A've heard it said", time: 12 },
  { text: "That people come into our lives", time: 13 },
  { text: "For a reason", time: 19 },
  { text: "Bringing something we must learn", time: 21 },
  { text: "And we are led", time: 23 },
  { text: "To those who help us most to grow", time: 28 },
  { text: "if we let them", time: 32 },
  { text: "And we help them in return", time: 35 },
  { text: "well, i don't know if", time: 37 },
  { text: "I believe that's true", time: 40 },
  { text: "But i know i'm who i am today", time: 46 },
  { text: "Because i knew you", time: 48 },
  { text: "like a comet pulled from orbit", time: 55 },
  { text: "As it passes a sun", time: 58 },
  { text: "Like a stream that meets a boulder", time: 60 },
  { text: "Halfway through the wood", time: 64 },
  { text: "Who can say ", time: 68 },
  { text: "if i've been changed", time: 70 },
  { text: "For the better?", time: 72 },
  { text: "but because i knew you", time: 75 },
  { text: "i have been changed", time: 84 },
  { text: "For good", time: 87 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 9s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 9000); // Espera 9 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 900000);