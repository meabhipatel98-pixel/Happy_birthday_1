// ================================
// Birthday Website - script.js
// ================================

// Get all screens
const screens = ["intro", "birthday", "letter", "final"]
  .map(id => document.getElementById(id));

// Get buttons
const openBtn = document.getElementById("openBtn");
const letterBtn = document.getElementById("letterBtn");
const wishBtn = document.getElementById("wishBtn");
const againBtn = document.getElementById("againBtn");

// Letter text
const typedText = document.getElementById("typedText");

// Music
const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

let timer;


// ================================
// SOUMYA'S LETTER
// ================================

const message = `Dear Soumya, 💗

Instagram par ek random si mulaqat se shuru hui humari story kab itni special ban gayi, pata hi nahi chala.

Pehle baatein hui, phir dosti hui, aur uske baad toh jhagde bhi full package mein aaye. 😂❤️ Kabhi gussa, kabhi misunderstanding, kabhi block… phir bhi somehow hum har baar wapas baat kar hi lete hain.

Shayad humari friendship perfect nahi hai, but it's real. Aur honestly, mujhe khushi hai ki un hazaaron Instagram accounts mein se main tumse mila. 🥹

Aaj tumhare birthday par bas itna kehna hai — hamesha khush rehna, smile karti rehna aur apne dreams ko chase karna. ❤️

Aur haan… future mein kitne bhi jhagde ho, permanently block mat karna yaar. 😭😂

Once again, Happy Birthday, Soumya! 🎂💖

Chahe waqt badle, situations badlein ya hum kitna bhi ladein, tumhari friendship mere liye hamesha special rahegi. ❤️

I'm genuinely grateful that life somehow brought you into my story.

I hope humari ye story yahin khatam na ho, balki aage bhi bahut saari beautiful memories likhe. 🥹💗

— Abhishek ❤️`;


// ================================
// CHANGE SCREEN
// ================================

function showScreen(index) {
  screens.forEach((screen, i) => {
    if (i === index) {
      screen.classList.remove("hidden");
    } else {
      screen.classList.add("hidden");
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ================================
// CONFETTI
// ================================

function confetti() {
  const symbols = ["🎀", "💗", "✨", "🌸", "🎉", "♡"];

  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("div");

    piece.className = "confetti-piece";
    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize =
      10 + Math.random() * 15 + "px";
    piece.style.animationDelay =
      Math.random() * 1.2 + "s";

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4500);
  }
}


// ================================
// FLOATING HEARTS
// ================================

function floatingHearts() {
  const box = document.querySelector(".hearts");

  if (!box) return;

  setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent =
      ["♡", "♥", "💗", "✨"][
        Math.floor(Math.random() * 4)
      ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =
      14 + Math.random() * 24 + "px";

    heart.style.animationDuration =
      6 + Math.random() * 6 + "s";

    box.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 13000);

  }, 700);
}


// ================================
// TYPE LETTER
// ================================

function typeMessage() {
  if (!typedText) return;

  typedText.textContent = "";

  let i = 0;

  clearInterval(timer);

  timer = setInterval(() => {

    typedText.textContent =
      message.slice(0, i);

    i++;

    if (i > message.length) {
      clearInterval(timer);
    }

  }, 18);
}


// ================================
// OPEN SURPRISE
// INTRO → BIRTHDAY
// ================================

if (openBtn) {
  openBtn.addEventListener("click", () => {

    showScreen(1);

    // Birthday confetti
    confetti();

    // Try to start music
    if (music) {
      music.play().catch(() => {
        // Browser may block autoplay.
        // User can start it using the music button.
      });
    }

  });
}


// ================================
// BIRTHDAY → LETTER
// ================================

if (letterBtn) {
  letterBtn.addEventListener("click", () => {

    showScreen(2);

    // Start typing the letter
    typeMessage();

  });
}


// ================================
// LETTER → FINAL
// ================================

if (wishBtn) {
  wishBtn.addEventListener("click", () => {

    clearInterval(timer);

    showScreen(3);

    // More confetti for the final surprise
    confetti();

  });
}


// ================================
// FINAL → INTRO / REPLAY
// ================================

if (againBtn) {
  againBtn.addEventListener("click", () => {

    clearInterval(timer);

    if (typedText) {
      typedText.textContent = "";
    }

    showScreen(0);

  });
}


// ================================
// MUSIC BUTTON
// ================================

if (musicButton && music) {

  musicButton.addEventListener("click", () => {

    if (music.paused) {

      music.play()
        .then(() => {
          musicButton.textContent = "⏸️ Pause Music";
        })
        .catch(() => {
          musicButton.textContent = "🎵 Play Music";
        });

    } else {

      music.pause();

      musicButton.textContent =
        "🎵 Play Music";

    }

  });

}


// ================================
// START FLOATING HEARTS
// ================================

floatingHearts();


// ================================
// INITIAL SCREEN
// ================================

showScreen(0);
