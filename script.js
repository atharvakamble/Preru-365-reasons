/* =========================================================
   WEBSITE 3 — 365 REASONS
   Magical Random Reason Discovery
   ========================================================= */

const reasons = [
  "Because your smile can change my entire mood.",
  "Because you made ordinary days feel special.",
  "Because I loved the way you made me feel understood.",
  "Because your little expressions are impossible to forget.",
  "Because you became my favorite person to talk to.",
  "Because even your simplest “hi” could make me smile.",
  "Because your happiness always mattered to me.",
  "Because you have a beautiful heart.",
  "Because you never had to try hard to make me care.",
  "Because somehow, you became home to me.",
  "Because I loved hearing you talk about random things.",
  "Because your laugh is one of my favorite sounds.",
  "Because you made me look forward to tomorrow.",
  "Because every little memory with you feels different.",
  "Because you made me feel lucky.",
  "Because I loved seeing you happy.",
  "Because your presence was enough to make a day better.",
  "Because you became part of my everyday thoughts.",
  "Because I could never stay angry at your smile for long.",
  "Because you gave me memories I’ll always carry.",
  "Because I remember the excitement of talking to you.",
  "Because I loved discovering new things about you.",
  "Because you made conversations feel effortless.",
  "Because even our silly moments became precious memories.",
  "Because I loved the little nicknames between us.",
  "Because you could make me laugh without even trying.",
  "Because I loved knowing the tiny things about you.",
  "Because you became someone I genuinely cared about deeply.",
  "Because your voice could instantly get my attention.",
  "Because you made my world a little softer.",
  "Because I loved making you smile.",
  "Because your happiness could become my happiness.",
  "Because I still remember countless little moments with you.",
  "Because you showed me how beautiful attachment can feel.",
  "Because I loved being able to call you mine.",
  "Because you became a part of so many of my memories.",
  "Because I loved the way we could be completely silly together.",
  "Because even our random conversations meant something to me.",
  "Because you gave me moments I never want to erase.",
  "Because loving you made me notice the little things.",
  "Because you taught me that love isn’t always perfect.",
  "Because our difficult days taught me things about myself.",
  "Because I understand some things now that I didn’t understand then.",
  "Because I wish I had handled some moments with more patience.",
  "Because I know that saying sorry doesn’t erase everything.",
  "Because I wish I’d listened better when you needed to be heard.",
  "Because I learned that love also means making someone feel safe.",
  "Because I understand that trust takes time to build.",
  "Because despite our difficult moments, I still value what we had.",
  "Because no matter how complicated our story became, it was real to me.",

  "Because your presence always meant something to me.",
  "Because I loved the way you cared about little things.",
  "Because you could make me smile without realizing it.",
  "Because your happiness was always worth celebrating.",
  "Because I loved knowing what made you excited.",
  "Because even your random stories stayed in my mind.",
  "Because you became someone I wanted to share everything with.",
  "Because I loved hearing about your day.",
  "Because your little habits became familiar to me.",
  "Because I could recognize your mood from just a few words.",
  "Because I loved being there for your good days.",
  "Because I wanted to be there through the difficult ones too.",
  "Because you made me care about things I never expected to care about.",
  "Because I loved seeing the person behind your smile.",
  "Because you were never just another person in my life.",
  "Because you became a beautiful part of my story.",
  "Because our inside jokes still make me smile.",
  "Because some memories with you need no explanation.",
  "Because I still remember the little details others would forget.",
  "Because you gave meaning to so many ordinary moments.",
  "Because I loved making plans with you.",
  "Because even simple time together felt special.",
  "Because I loved having someone to look forward to.",
  "Because you made my phone feel more exciting.",
  "Because seeing your name could instantly change my mood.",
  "Because I loved knowing there was someone special waiting to talk to me.",
  "Because your attention meant more to me than I ever said.",
  "Because I loved the comfort of being myself around you.",
  "Because you saw sides of me that many people never did.",
  "Because I trusted you with parts of myself I usually kept hidden.",
  "Because I loved the way we could laugh at absolutely nothing.",
  "Because our stupid moments became some of my favorite memories.",
  "Because I loved teasing you.",
  "Because I loved when you teased me back.",
  "Because even our little arguments became lessons for me.",
  "Because I learned that being right isn’t always more important than being kind.",
  "Because I learned that listening matters more than simply replying.",
  "Because I learned that words can leave deeper marks than we realize.",
  "Because I wish I had understood some things sooner.",
  "Because knowing where I went wrong made me want to become better.",
  "Because I don’t want to remember only the difficult days.",
  "Because the beautiful moments deserve to be remembered too.",
  "Because you gave me memories worth keeping forever.",
  "Because our story had moments that felt genuinely beautiful.",
  "Because I still appreciate the time you gave me.",
  "Because I still appreciate the trust you once placed in me.",
  "Because I understand that trust is something you have to protect.",
  "Because I wish I had protected it better.",
  "Because I’ve learned that loving someone also means understanding their feelings.",
  "Because somewhere along the way, you became a part of me.",

  "Because you made me feel special in ways you probably never noticed.",
  "Because I loved the comfort of talking to you.",
  "Because your little reactions always made me smile.",
  "Because I loved knowing the things that made you happy.",
  "Because your happiness was never something small to me.",
  "Because I loved being part of your ordinary days.",
  "Because even boring conversations with you felt worth having.",
  "Because I could talk to you about the smallest things.",
  "Because you made silence feel comfortable too.",
  "Because I loved simply having you around.",
  "Because you became the person I wanted to tell things to first.",
  "Because your opinion started mattering to me deeply.",
  "Because I loved sharing my excitement with you.",
  "Because I wanted to know what was happening in your world.",
  "Because I cared about the things you cared about.",
  "Because I remembered little details about you without trying.",
  "Because your happiness could make my entire day better.",
  "Because your sadness made me wish I could make everything okay.",
  "Because I never wanted you to feel alone.",
  "Because caring about you became natural to me.",
  "Because you made me experience a kind of love I’d never known before.",
  "Because you showed me how deeply one person can matter.",
  "Because I loved the feeling of being important to you.",
  "Because I loved making memories with you.",
  "Because every picture with you carries a story.",
  "Because I can still remember feelings attached to certain memories.",
  "Because some places remind me of you.",
  "Because some songs remind me of you.",
  "Because some random moments still bring you to my mind.",
  "Because you left beautiful traces throughout my memories.",
  "Because I loved your genuine side.",
  "Because I loved your silly side.",
  "Because I loved your caring side.",
  "Because I loved the way you could be completely yourself.",
  "Because you never needed to be perfect to be special to me.",
  "Because your imperfections were part of what made you you.",
  "Because I loved learning how your mind worked.",
  "Because you always had little things that surprised me.",
  "Because there was always something new to discover about you.",
  "Because knowing you felt like discovering a whole person, not just a face.",
  "Because I loved the moments when we understood each other without words.",
  "Because I loved when one look said everything.",
  "Because our connection had moments I can’t properly explain.",
  "Because some memories still feel incredibly close.",
  "Because I still value the love we shared.",
  "Because I don’t regret caring about you.",
  "Because meeting you changed my life in ways I didn’t expect.",
  "Because you became an important chapter of my life.",
  "Because I became a little different after knowing you.",
  "Because knowing you taught my heart what it means to truly care about someone.",

  "Because you made me want to become a better version of myself.",
  "Because you showed me that little things can mean a lot.",
  "Because I learned to appreciate moments I once took for granted.",
  "Because you made me understand how valuable someone’s presence can be.",
  "Because I loved having someone who knew my softer side.",
  "Because you saw parts of me I didn’t show everyone.",
  "Because I felt comfortable being vulnerable with you.",
  "Because I trusted you with my feelings.",
  "Because I cared about your feelings too, even when I didn’t show it properly.",
  "Because I wish I had always shown you that care better.",
  "Because I learned that love needs patience.",
  "Because I learned that listening is an act of love.",
  "Because I learned that apologies need actions behind them.",
  "Because I learned that trust cannot be demanded.",
  "Because I learned that someone’s feelings shouldn’t be dismissed.",
  "Because I learned that love isn’t about winning an argument.",
  "Because I learned that sometimes understanding matters more than explaining.",
  "Because difficult moments showed me things about myself I needed to see.",
  "Because I recognize that I wasn’t always the person you needed me to be.",
  "Because I genuinely wish I had handled some moments differently.",
  "Because I don’t want to hide from my mistakes.",
  "Because I don’t want my mistakes to erase the good memories.",
  "Because I remember the happiness we shared too.",
  "Because I remember how much we could laugh together.",
  "Because I remember how comfortable some moments felt.",
  "Because I remember the excitement of seeing you.",
  "Because I remember looking forward to our conversations.",
  "Because I remember the feeling of being close to you.",
  "Because those feelings were real to me.",
  "Because those memories still matter to me.",
  "Because you taught me that relationships need effort from both hearts.",
  "Because you made me understand how important reassurance can be.",
  "Because I learned that insecurity shouldn’t become someone’s burden.",
  "Because I learned to think about how my actions affect someone I love.",
  "Because I learned that words said during anger can hurt deeply.",
  "Because I learned that love should feel safe, not stressful.",
  "Because I wish I had understood that earlier.",
  "Because I wish I had listened instead of becoming defensive sometimes.",
  "Because I wish I had chosen calmness more often.",
  "Because I wish I had protected our peaceful moments better.",
  "Because despite everything, I still appreciate what you gave me.",
  "Because you gave me moments I’ll never be able to recreate.",
  "Because you became part of memories I’ll carry for a long time.",
  "Because I still smile at some of the things we experienced together.",
  "Because some of my happiest memories have you in them.",
  "Because you made a chapter of my life incredibly meaningful.",
  "Because I will always be grateful that our paths crossed.",
  "Because knowing you taught me more than I expected.",
  "Because our story changed me.",
  "Because whatever happens next, I’ll always be grateful that I got to know you this deeply.",

  "Because you showed me how much one person can mean.",
  "Because I learned to notice the little things because of you.",
  "Because your happiness became something I genuinely cared about.",
  "Because I loved seeing you excited about something.",
  "Because I loved listening to your stories.",
  "Because I loved the random things you’d tell me.",
  "Because even your smallest updates felt important to me.",
  "Because I wanted to know how your day went.",
  "Because I loved being part of your everyday life.",
  "Because you made ordinary conversations memorable.",
  "Because I loved the moments when we laughed until nothing else mattered.",
  "Because our silly moments are still some of my favorites.",
  "Because I loved making you laugh.",
  "Because your laugh was always worth hearing again.",
  "Because I loved your reactions to my stupid jokes.",
  "Because we created little jokes that only we understood.",
  "Because those inside jokes became tiny pieces of our story.",
  "Because I loved our random conversations at unexpected times.",
  "Because I never needed a special reason to want to talk to you.",
  "Because simply hearing from you could make a normal day better.",
  "Because I loved the feeling of being close to you.",
  "Because I loved knowing someone so deeply.",
  "Because I loved learning your likes and dislikes.",
  "Because I remembered details about you that mattered to me.",
  "Because you made me curious about everything that made you who you are.",
  "Because I loved discovering your different sides.",
  "Because you were never boring to me.",
  "Because there was always something new to learn about you.",
  "Because knowing you became one of my favorite experiences.",
  "Because I never saw you as ordinary.",
  "Because you made me believe in the beauty of small moments.",
  "Because a simple conversation could become a favorite memory.",
  "Because a simple picture could hold an entire feeling.",
  "Because a simple day with you could feel special.",
  "Because you made memories without even trying.",
  "Because I still remember the feeling behind many of them.",
  "Because some memories with you still make me smile unexpectedly.",
  "Because some memories still feel like little pieces of home.",
  "Because I don’t want to forget the beautiful parts of our story.",
  "Because they deserve to be remembered with kindness.",
  "Because I know I wasn’t perfect.",
  "Because I know there were moments when I hurt you.",
  "Because I understand now that some things I did affected you deeply.",
  "Because I wish I’d recognized your feelings sooner.",
  "Because I wish I’d listened without trying to defend myself.",
  "Because I wish I’d given you more peace when you needed it.",
  "Because I’m learning that loving someone means respecting their boundaries too.",
  "Because I’m learning that trust is earned through consistency.",
  "Because I’m learning that saying “I love you” isn’t enough without showing it.",
  "Because knowing my mistakes doesn’t make me love you less—it makes me want to understand love better.",

  "Because you deserved more patience from me.",
  "Because you deserved to feel heard.",
  "Because you deserved to feel understood.",
  "Because your feelings were never something I wanted to make small.",
  "Because I wish I’d handled difficult moments with more maturity.",
  "Because I wish I’d chosen understanding before reacting.",
  "Because I’ve realized that love also means giving someone space to breathe.",
  "Because I’ve learned that trust needs time, not pressure.",
  "Because I’ve learned that reassurance should come with consistency.",
  "Because I’ve learned that actions speak louder than promises.",
  "Because I don’t want to repeat the mistakes I’ve already made.",
  "Because I want to grow from what happened between us.",
  "Because the difficult days taught me things the easy days couldn’t.",
  "Because I learned more about myself through our relationship.",
  "Because I learned how important communication really is.",
  "Because I learned that anger shouldn’t decide what love says.",
  "Because I learned that listening can prevent so much hurt.",
  "Because I learned that sometimes “I’m sorry” needs to be followed by change.",
  "Because I understand that forgiveness can never be demanded.",
  "Because whatever you choose, your feelings deserve respect.",
  "Because I still remember the person I was when we first met.",
  "Because I remember how naturally you became important to me.",
  "Because I remember how excited I was about us.",
  "Because I remember the happiness in our early moments.",
  "Because I remember how much I wanted to make you smile.",
  "Because I remember how special it felt when you chose me.",
  "Because I remember the little moments that made us “us.”",
  "Because I remember how quickly ordinary things became memories.",
  "Because I remember feeling lucky to have you.",
  "Because those feelings weren’t pretend.",
  "Because you made me care more deeply than I expected.",
  "Because you taught me vulnerability.",
  "Because you taught me patience.",
  "Because you taught me that love needs understanding.",
  "Because you taught me that people can love each other and still hurt each other.",
  "Because you taught me that love alone doesn’t solve everything.",
  "Because you made me realize how important emotional safety is.",
  "Because you made me look at my own actions more honestly.",
  "Because knowing you gave me reasons to become more self-aware.",
  "Because I want the lessons from us to make me better, not bitter.",
  "Because I appreciate every moment you chose to stay.",
  "Because I appreciate every time you listened to me.",
  "Because I appreciate every time you made me smile.",
  "Because I appreciate every memory you helped create.",
  "Because I appreciate the love you gave me.",
  "Because I appreciate the trust you once placed in me.",
  "Because I appreciate even the little things you probably forgot.",
  "Because some of those little things meant everything to me.",
  "Because I’ll always be grateful for the chapter we shared.",
  "Because you were never just a chapter I wanted to finish—you were a chapter I wanted to understand.",

  "Because I still remember how naturally you became important to me.",
  "Because you made my days feel a little less ordinary.",
  "Because I loved having someone whose happiness mattered so much to me.",
  "Because you gave me countless moments worth smiling about.",
  "Because your presence brought a different kind of comfort.",
  "Because I loved the feeling of being understood by you.",
  "Because I loved knowing that you understood sides of me others didn’t.",
  "Because you became someone I could be completely honest with.",
  "Because I trusted you with my happiest moments and my weakest ones.",
  "Because you saw me through more than just my good days.",
  "Because I still care about the person behind every memory.",
  "Because I don’t want the difficult moments to define everything we were.",
  "Because our story had far more than just arguments.",
  "Because there were smiles between the tears.",
  "Because there were beautiful moments between the difficult ones.",
  "Because there was genuine love between us.",
  "Because I know I made mistakes, and I don’t want to hide from them.",
  "Because I want to remember what they taught me.",
  "Because I want to carry the lessons, not the bitterness.",
  "Because you deserve to be remembered with love, not just regret.",
  "Because I still admire the person you are.",
  "Because I love the little things that make you uniquely you.",
  "Because you never needed to be perfect to be special.",
  "Because your flaws never erased your beautiful qualities.",
  "Because I loved seeing the real you.",
  "Because your personality became familiar in the sweetest way.",
  "Because I could recognize your little moods.",
  "Because I knew the difference between your serious and silly moments.",
  "Because knowing those little details made me feel close to you.",
  "Because I loved knowing you beyond the surface.",
  "Because some people enter your life and quietly change it.",
  "Because you were one of those people for me.",
  "Because meeting you gave me memories I wouldn’t have otherwise.",
  "Because you became part of a version of me I’ll always remember.",
  "Because you showed me how deeply I could care.",
  "Because you made me understand why someone’s presence can matter so much.",
  "Because you gave me reasons to smile when I needed them.",
  "Because you gave me moments of happiness I will always appreciate.",
  "Because you were important to me then.",
  "Because you are still important to me now.",
  "Because I don’t expect one website to fix everything.",
  "Because I don’t want these words to pressure you into anything.",
  "Because I just wanted you to know what was in my heart.",
  "Because you deserve honesty from me.",
  "Because you deserve appreciation that isn’t limited to perfect days.",
  "Because I wanted to remember the good without ignoring the difficult.",
  "Because I wanted to acknowledge what I could have done better.",
  "Because I wanted you to know that I learned from our story.",
  "Because whatever you feel after reading this, I respect it.",
  "Because I wanted these 365 reasons to remind you of one simple thing: you mattered to me more than I ever knew how to explain.",

  "Because some memories are too beautiful to let time erase them.",
  "Because I still remember the happiness behind so many of our moments.",
  "Because I still smile when an old memory suddenly comes back.",
  "Because you gave me moments I’ll always be thankful for.",
  "Because I still appreciate the person who once stood beside me.",
  "Because I understand now that love needs more than feelings.",
  "Because it needs patience, trust, communication, and respect.",
  "Because I wish I’d understood that when it mattered most.",
  "Because I can’t change everything that happened.",
  "Because I can only learn from it and become better.",
  "Because I don’t want my mistakes to be the only thing you remember about me.",
  "Because I hope you remember that there was genuine love behind my imperfect attempts.",
  "Because no matter where life takes us, I’ll always be grateful our paths crossed.",
  "Because after everything, I still wanted you to know how deeply you were loved.",
  "३६४ कारण लिहूणसुद्धा,मी तुझ्या वर का प्रेम करतो हे सांगता येणार नाही… कदाचित तुझ्या प्रेम करण्यासाठी मला कधी कारणांची गरजच पडली नाही. मी फक्त तुझ्यावर प्रेम केल ♾️🤍. आणि नकळत कधी तू माझ्या आयुष्यातली सगळ्यात खास आणि माझ्यासाठी सर्वात महत्वाची व्यक्ती बनली कळाल ही नाही ❤️‍🩹"
];


/* =========================================================
   SAFETY CHECK
   ========================================================= */

console.log(`365 Reasons loaded: ${reasons.length}`);

if (reasons.length !== 365) {
  console.error(
    `ERROR: Expected 365 reasons but found ${reasons.length}.`
  );
}


/* =========================================================
   ELEMENTS
   ========================================================= */

const reasonField = document.getElementById("reasonField");
const batchStart = document.getElementById("batchStart");
const batchEnd = document.getElementById("batchEnd");
const nextBatch = document.getElementById("nextBatch");
const instruction = document.getElementById("instruction");

const reasonOverlay = document.getElementById("reasonOverlay");
const popupNumber = document.getElementById("popupNumber");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const finalScreen = document.getElementById("finalScreen");
const restartButton = document.getElementById("restartButton");


/* =========================================================
   STATE
   ========================================================= */

let currentBatch = 0;

const BATCH_SIZE = 10;


/* =========================================================
   RANDOM POSITION SYSTEM
   ========================================================= */

const positions = [
  { x: 3,  y: 3,  r: -6 },
  { x: 57, y: 2,  r: 5 },
  { x: 28, y: 18, r: -3 },
  { x: 70, y: 24, r: 7 },
  { x: 1,  y: 40, r: 4 },
  { x: 42, y: 40, r: -7 },
  { x: 73, y: 51, r: -4 },
  { x: 17, y: 59, r: 6 },
  { x: 49, y: 69, r: -5 },
  { x: 3,  y: 75, r: 3 }
];


function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [
      result[j],
      result[i]
    ];
  }

  return result;
}


/* =========================================================
   SHOW 10 REASONS
   ========================================================= */

function showBatch() {

  reasonField.innerHTML = "";

  const start = currentBatch * BATCH_SIZE;

  const end = Math.min(
    start + BATCH_SIZE,
    reasons.length
  );

  const randomPositions = shuffle(positions);

  batchStart.textContent =
    String(start + 1).padStart(3, "0");

  batchEnd.textContent =
    String(end).padStart(3, "0");


  for (let i = start; i < end; i++) {

    const note = document.createElement("button");

    note.type = "button";

    note.className = "reason-note";

    const number = document.createElement("span");

    number.className = "number";

    number.textContent =
      `#${String(i + 1).padStart(3, "0")}`;


    const text = document.createElement("span");

    text.textContent = reasons[i];


    note.appendChild(number);
    note.appendChild(text);


    /*
      Use different random locations every batch.
    */

    const position =
      randomPositions[i - start];


    note.style.left =
      `${position.x}%`;

    note.style.top =
      `${position.y}%`;

    note.style.transform =
      `rotate(${position.r}deg)`;


    note.style.animationDelay =
      `${(i - start) * 0.09}s`;


    note.addEventListener(
      "click",
      () => openReason(i)
    );


    reasonField.appendChild(note);
  }


  /*
    Last batch = 361–365.
  */

  if (end === 365) {

    nextBatch.innerHTML =
      "Finish the journey ♡";

    instruction.textContent =
      "Five little reasons remain…";

  } else {

    nextBatch.innerHTML =
      "Discover 10 more <span>→</span>";

    instruction.textContent =
      "Tap any reason to open it ♡";
  }
}


/* =========================================================
   OPEN REASON
   ========================================================= */

function openReason(index) {

  popupNumber.textContent =
    `REASON ${String(index + 1).padStart(3, "0")}`;

  popupText.textContent =
    reasons[index];


  reasonOverlay.classList.add("show");

  document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE REASON
   ========================================================= */

function closeReason() {

  reasonOverlay.classList.remove("show");

  document.body.style.overflow = "";
}


closePopup.addEventListener(
  "click",
  closeReason
);


reasonOverlay.addEventListener(
  "click",
  (event) => {

    if (event.target === reasonOverlay) {
      closeReason();
    }

  }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      closeReason();
    }

  }
);


/* =========================================================
   NEXT BATCH
   ========================================================= */

nextBatch.addEventListener(
  "click",
  () => {

    /*
      There are 37 batches:
      
      Batch 0 = 1–10
      Batch 1 = 11–20
      ...
      Batch 35 = 351–360
      Batch 36 = 361–365

      Therefore #365 has already been shown
      when currentBatch === 36.
    */

    if (currentBatch === 36) {

      finalScreen.classList.add("show");

      document.body.style.overflow = "hidden";

      createFinalParticles();

      return;
    }


    currentBatch++;

    showBatch();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);


/* =========================================================
   FINAL SCREEN
   ========================================================= */

function createFinalParticles() {

  const container =
    finalScreen.querySelector(".final-stars");

  if (!container) return;

  container.innerHTML = "";


  for (let i = 0; i < 55; i++) {

    const star =
      document.createElement("span");

    star.textContent =
      Math.random() > 0.5 ? "✦" : "·";

    star.style.left =
      `${Math.random() * 100}%`;

    star.style.top =
      `${Math.random() * 100}%`;

    star.style.animationDelay =
      `${Math.random() * 3}s`;

    star.style.fontSize =
      `${6 + Math.random() * 12}px`;

    container.appendChild(star);
  }
}


/* =========================================================
   RESTART
   ========================================================= */

restartButton.addEventListener(
  "click",
  () => {

    currentBatch = 0;

    finalScreen.classList.remove("show");

    document.body.style.overflow = "";

    showBatch();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);


/* =========================================================
   SWIPE BETWEEN BATCHES
   ========================================================= */

let touchStartX = 0;
let touchEndX = 0;


reasonField.addEventListener(
  "touchstart",
  (event) => {

    touchStartX =
      event.changedTouches[0].screenX;
  },
  { passive: true }
);


reasonField.addEventListener(
  "touchend",
  (event) => {

    touchEndX =
      event.changedTouches[0].screenX;

    const distance =
      touchEndX - touchStartX;


    /*
      Swipe left = next 10.
    */

    if (distance < -80) {

      if (currentBatch < 36) {

        currentBatch++;

        showBatch();
      }
    }


    /*
      Swipe right = previous 10.
    */

    if (distance > 80) {

      if (currentBatch > 0) {

        currentBatch--;

        showBatch();
      }
    }
  },
  { passive: true }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

showBatch();
/* =========================================================
   WEBSITE 3 — MUSIC SYSTEM
   ========================================================= */

/* =========================================================
   WEBSITE 3 — MUSIC SYSTEM
   ========================================================= */

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicTrackButton = document.getElementById("musicTrackButton");
const musicTrackName = document.getElementById("musicTrackName");
const musicMenu = document.getElementById("musicMenu");
const musicOptions = document.querySelectorAll(".music-option");


/* =========================================================
   PLAYLIST
   ========================================================= */

const playlist = [
  {
    name: "Song 01 ♡",
    file: "./music/01.mp3"
  },
  {
    name: "Song 02 ♡",
    file: "./music/02.mp3"
  },
  {
    name: "Song 03 ♡",
    file: "./music/03.mp3"
  },
  {
    name: "Song 04 ♡",
    file: "./music/04.mp3"
  },
  {
    name: "Song 05 ♡",
    file: "./music/05.mp3"
  }
];


let currentSong = 0;


/* =========================================================
   MUSIC VOLUME
   ========================================================= */

music.volume = 0.35;


/* =========================================================
   LOAD SONG
   ========================================================= */

function loadSong(index, autoplay = false) {

  if (!playlist[index]) return;

  currentSong = index;

  music.src = playlist[index].file;

  musicTrackName.textContent =
    playlist[index].name;


  musicOptions.forEach((button, i) => {

    button.classList.toggle(
      "active",
      i === index
    );

  });


  if (autoplay) {

    music.play()
      .then(() => {

        updateMusicButton();

      })
      .catch((error) => {

        console.log(
          "Music requires user interaction.",
          error
        );

      });

  }

}


/* =========================================================
   UPDATE MUSIC BUTTON
   ========================================================= */

function updateMusicButton() {

  if (music.paused) {

    musicToggle.textContent = "♪";

    musicToggle.classList.remove("playing");

    musicToggle.setAttribute(
      "aria-label",
      "Play music"
    );

  } else {

    musicToggle.textContent = "♫";

    musicToggle.classList.add("playing");

    musicToggle.setAttribute(
      "aria-label",
      "Pause music"
    );

  }

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

async function toggleMusic() {

  if (music.paused) {

    try {

      await music.play();

      updateMusicButton();

    } catch (error) {

      console.log(
        "Music could not start.",
        error
      );

    }

  } else {

    music.pause();

    updateMusicButton();

  }

}


/* =========================================================
   MUSIC BUTTON
   ========================================================= */

musicToggle.addEventListener(
  "click",
  toggleMusic
);


/* =========================================================
   CHANGE SONG
   ========================================================= */

function changeSong(index) {

  if (!playlist[index]) return;

  const wasPlaying =
    !music.paused;

  loadSong(
    index,
    wasPlaying
  );

  musicMenu.classList.remove(
    "open"
  );

}


/* =========================================================
   AUTOMATICALLY PLAY NEXT SONG
   ========================================================= */

music.addEventListener(
  "ended",
  () => {

    let nextSong =
      currentSong + 1;

    /*
      After Song 05,
      return to Song 01.
    */

    if (
      nextSong >= playlist.length
    ) {

      nextSong = 0;

    }

    loadSong(
      nextSong,
      true
    );

  }
);


/* =========================================================
   OPEN / CLOSE PLAYLIST
   ========================================================= */

musicTrackButton.addEventListener(
  "click",
  (event) => {

    event.stopPropagation();

    musicMenu.classList.toggle(
      "open"
    );

  }
);


/* =========================================================
   SELECT SONG
   ========================================================= */

musicOptions.forEach(
  (button) => {

    button.addEventListener(
      "click",
      (event) => {

        const index =
          Number(
            event.currentTarget
              .dataset.song
          );

        changeSong(index);

      }
    );

  }
);


/* =========================================================
   CLOSE PLAYLIST WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    if (
      !musicMenu.contains(event.target) &&
      !musicTrackButton.contains(event.target)
    ) {

      musicMenu.classList.remove(
        "open"
      );

    }

  }
);


/* =========================================================
   INITIAL SONG
   ========================================================= */

loadSong(0);

updateMusicButton();
