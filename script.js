/* =====================================================
   365 REASONS — MAGICAL DISCOVERY EXPERIENCE
   ===================================================== */

let currentBatch = 0;

const BATCH_SIZE = 10;

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


/* =====================================================
   RANDOM POSITIONS
   ===================================================== */

const positions = [
  { x: 4,  y: 5,  r: -6 },
  { x: 55, y: 3,  r: 5 },
  { x: 27, y: 21, r: -3 },
  { x: 70, y: 25, r: 7 },
  { x: 2,  y: 42, r: 4 },
  { x: 42, y: 43, r: -7 },
  { x: 73, y: 52, r: -4 },
  { x: 18, y: 61, r: 6 },
  { x: 50, y: 70, r: -5 },
  { x: 4,  y: 76, r: 3 }
];


function shuffle(array) {

  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}


/* =====================================================
   SHOW BATCH
   ===================================================== */

function showBatch() {

  reasonField.innerHTML = "";

  const start = currentBatch * BATCH_SIZE;

  const end = Math.min(
    start + BATCH_SIZE,
    reasons.length
  );

  batchStart.textContent =
    String(start + 1).padStart(3, "0");

  batchEnd.textContent =
    String(end).padStart(3, "0");


  /*
    Shuffle the visual positions.

    The actual reason numbers do NOT change.
    Only where they appear on screen changes.
  */

  const randomPositions = shuffle(positions);


  for (let i = start; i < end; i++) {

    const note = document.createElement("div");

    note.className = "reason-note";


    const number = document.createElement("span");

    number.className = "number";

    number.textContent =
      `#${String(i + 1).padStart(3, "0")}`;


    const text = document.createElement("span");

    text.textContent = reasons[i];


    note.appendChild(number);
    note.appendChild(text);


    const position =
      randomPositions[i - start];


    note.style.left = `${position.x}%`;
    note.style.top = `${position.y}%`;

    note.style.transform =
      `rotate(${position.r}deg)`;


    /*
      Every note enters at a different time.
    */

    note.style.animationDelay =
      `${(i - start) * 0.08}s`;


    note.addEventListener("click", () => {

      openReason(i);

      note.classList.add("opened");

    });


    reasonField.appendChild(note);
  }


  /*
    Final batch has 5 reasons:
    361, 362, 363, 364, 365
  */

  if (end === 365) {

    nextBatch.textContent =
      "Finish the journey ♡";

    instruction.textContent =
      "The last five are waiting for you…";

  } else {

    nextBatch.innerHTML =
      "Discover 10 more <span>→</span>";

    instruction.textContent =
      "Tap any reason to discover it ♡";
  }
}


/* =====================================================
   OPEN REASON POPUP
   ===================================================== */

function openReason(index) {

  popupNumber.textContent =
    `REASON ${String(index + 1).padStart(3, "0")}`;

  popupText.textContent =
    reasons[index];


  reasonOverlay.classList.add("show");
}


/* =====================================================
   CLOSE POPUP
   ===================================================== */

function closeReason() {

  reasonOverlay.classList.remove("show");

}


closePopup.addEventListener(
  "click",
  closeReason
);


/*
  Tapping outside the card closes it.
*/

reasonOverlay.addEventListener(
  "click",
  (event) => {

    if (event.target === reasonOverlay) {
      closeReason();
    }

  }
);


/*
  Escape key.
*/

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      closeReason();
    }

  }
);


/* =====================================================
   NEXT 10
   ===================================================== */

nextBatch.addEventListener(
  "click",
  () => {

    /*
      If this is the final batch,
      #365 has already been displayed.
      
      Only NOW do we show the ending.
    */

    if (currentBatch === 36) {

      finalScreen.classList.add("show");

      return;
    }


    currentBatch++;

    showBatch();


    /*
      Small scroll adjustment for mobile.
    */

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =====================================================
   RESTART
   ===================================================== */

restartButton.addEventListener(
  "click",
  () => {

    currentBatch = 0;

    finalScreen.classList.remove("show");

    showBatch();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =====================================================
   INITIAL LOAD
   ===================================================== */

showBatch();
