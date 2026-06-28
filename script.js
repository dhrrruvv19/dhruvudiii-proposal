/*
  COMPLETE CUSTOMIZED SCRIPT.JS
  For Dhruvi / Dhruvudiii
*/

const CONFIG = {
  herName: "Dhruvi",
  herNickname: "Dhruvudiii",
  yourName: "Your favourite headache",

  secretCode: "Dhruvi Gandhi",
  page1Kicker: "A secret surprise for Dhruvudiii",
  page1Title: "For My Favourite Calm in My Chaos",
  page1Subtitle:
    "I made this little world only for you. No crowd, no pressure, just a surprise from my heart.",
  unlockButtonText: "Unlock Surprise ❤️",

  page2Heading: "A Letter I Was Too Shy To Say Directly",
  letter:
    "Hey Dhruvudiii,\n\nI don’t know how to say all this perfectly, so I made this small surprise instead. You are honestly one of the most unexpected and special parts of my life.\n\nYou are calm in my chaos, but also somehow the reason for half of my chaos. You annoy me, confuse me, make me smile randomly, and still manage to feel like comfort at the end of the day.\n\nI don’t want to make this too filmy, but I just want you to know that you are not ordinary to me. Your presence matters. Your smile matters. Your mood matters. And somewhere between our talks, fights, jokes, and random moments, you became someone I genuinely don’t want to lose.\n\nSo open this slowly, page by page, because every part of this little world is made only for you.\n\nFrom,\nYour favourite headache",

  page3Heading: "Somehow, You Became My Favourite Chapter",
  page3Subtitle:
    "Not every story starts perfectly. Some stories grow slowly through jokes, fights, care, silence, and random moments.",
  timeline: [
    {
      title: "When you became familiar",
      text:
        "At first, it was just normal conversations, random talks, and small moments. But slowly, your presence started feeling different."
    },
    {
      title: "When your calm became special",
      text:
        "You became the calm in my chaos, but also the reason behind some of my cutest confusion."
    },
    {
      title: "When I started choosing you silently",
      text:
        "I may not have said it properly every time, but somewhere inside, I knew you were becoming someone I genuinely cared about."
    },
    {
      title: "Today",
      text:
        "So I made this page. Not because it is perfect, but because you deserve something made only for you."
    }
  ],

  page4Heading: "My Favourite Kind of Pretty",
  page4Subtitle:
    "Some photos are just photos, and then there are photos that make me stop for a second and smile like an idiot.",
  captions: [
    "This one has ‘main character’ energy written all over it.",
    "That soft smile should honestly come with a warning.",
    "Pink looks good on you, but this smile is the actual problem.",
    "Even when you are looking away, you still manage to look like peace."
  ],

  page5Heading: "The Little Things I Notice About You",
  page5Subtitle:
    "This is not copied from any romantic quote page. This is the kind of thing I would actually say to you.",
  chatMessages: [
    { from: "me", text: "I made something for you..." },
    { from: "her", text: "What did you do now? 😭" },
    { from: "me", text: "Something cute. Something honest. Something very me." },
    { from: "me", text: "I just wanted you to know that you are not ordinary to me." },
    { from: "her", text: "Okay now I am listening 👀" },
    { from: "me", text: "You are my calm, but also somehow my daily chaos." },
    { from: "me", text: "And the last page has the real question ❤️" }
  ],

  page6Heading: "Why I Choose You",
  reasons: [
    { icon: "✨", text: "You make even normal conversations feel special." },
    { icon: "😊", text: "Your smile has the power to fix my entire mood." },
    { icon: "🌙", text: "You are calm, but somehow you still create the cutest chaos in my life." },
    { icon: "🫶", text: "You are not just pretty. You feel like comfort." },
    { icon: "❤️", text: "I do not just like your good side. I choose the real you." },
    { icon: "💫", text: "Somewhere between our talks, fights, jokes, and random moments, you became very special to me." }
  ],

  page7Heading: "I Don’t Want Perfect. I Want Real.",
  promise:
    "I cannot promise that every day will be filmy or perfect. But I can promise effort, honesty, loyalty, respect, care, random teasing, serious support, and choosing you even on the days when things are not easy.\n\nI want to be someone who makes you feel safe, heard, valued, and loved without forcing anything. I want us to grow slowly, genuinely, and beautifully.",

  proposalTitle: "Dhruvudiii, Will You Be Mine?",
  proposalMessage:
    "Not just for the cute pictures, not just for the good days, and not just for the romantic moments.\n\nI want us in the real way — with friendship, care, fights, laughter, understanding, annoying each other, supporting each other, and creating memories that belong only to us.\n\nSo today, with all my heart, I want to ask you…\n\nWill you be mine?",

  finalHeading: "You said yes ❤️",
  finalText:
    "Now send me your answer before I start smiling at my phone like an idiot.",

  whatsappNumber: "919702426035",
  whatsappMessage: "Yes, I will be yours ❤️"
};

let currentPage = 1;
const totalPages = 8;

const pages = [...document.querySelectorAll(".page")];
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const pageCounter = document.getElementById("pageCounter");
const progressFill = document.getElementById("progressFill");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setTextByPage(pageNumber, selector, text) {
  const element = document.querySelector(`.page[data-page="${pageNumber}"] ${selector}`);
  if (element) element.textContent = text;
}

setTextByPage(1, ".kicker", CONFIG.page1Kicker);
setText("#herNameHero", CONFIG.page1Title);
setTextByPage(1, ".hero-sub", CONFIG.page1Subtitle);

const unlockBtn = document.getElementById("unlockBtn");
if (unlockBtn) unlockBtn.textContent = CONFIG.unlockButtonText;

const codeHint = document.getElementById("codeHint");
if (codeHint) codeHint.innerHTML = "Secret code hint: Try her full name ❤️";

setTextByPage(2, "h2", CONFIG.page2Heading);
setText("#letterText", CONFIG.letter);

setTextByPage(3, "h2", CONFIG.page3Heading);
setTextByPage(3, ".muted", CONFIG.page3Subtitle);

setTextByPage(4, "h2", CONFIG.page4Heading);
setTextByPage(4, ".photo-wall-subtitle", CONFIG.page4Subtitle);

setTextByPage(5, "h2", CONFIG.page5Heading);
setTextByPage(5, ".muted", CONFIG.page5Subtitle);
setText("#herNameChat", CONFIG.herNickname);

setTextByPage(6, "h2", CONFIG.page6Heading);

setTextByPage(7, "h2", CONFIG.page7Heading);
setText("#promiseText", CONFIG.promise);

setText("#proposalTitle", CONFIG.proposalTitle);
setText("#proposalMessage", CONFIG.proposalMessage);
setText("#finalHeading", CONFIG.finalHeading);
setText("#finalText", CONFIG.finalText);

const whatsappLink = document.getElementById("whatsappLink");
if (whatsappLink) {
  whatsappLink.href =
    "https://wa.me/" +
    CONFIG.whatsappNumber.replace(/\D/g, "") +
    "?text=" +
    encodeURIComponent(CONFIG.whatsappMessage);
}

function updatePage() {
  pages.forEach((p) => p.classList.toggle("active", Number(p.dataset.page) === currentPage));
  pageCounter.textContent = `${currentPage} / ${totalPages}`;
  progressFill.style.width = `${(currentPage / totalPages) * 100}%`;
  prevBtn.style.visibility = currentPage === 1 ? "hidden" : "visible";
  nextBtn.textContent = currentPage === totalPages ? "Final" : "Next";
}

function goNext() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goPrev() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

if (nextBtn) nextBtn.addEventListener("click", goNext);
if (prevBtn) prevBtn.addEventListener("click", goPrev);

document.querySelectorAll("[data-next]").forEach((btn) => btn.addEventListener("click", goNext));

if (unlockBtn) {
  unlockBtn.addEventListener("click", () => {
    const entered = document.getElementById("secretCode").value.trim().toUpperCase();
    const required = CONFIG.secretCode.trim().toUpperCase();

    if (entered === required) {
      music.play().catch(() => {});
      goNext();
    } else {
      const hint = document.getElementById("codeHint");
      hint.innerHTML = "Wrong code 😭 Hint: Try <b>Dhruvi Gandhi</b>";
      hint.style.color = "#ffd1e6";
    }
  });
}

const secretCodeInput = document.getElementById("secretCode");
if (secretCodeInput) {
  secretCodeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") unlockBtn.click();
  });
}

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play().catch(() => {});
      musicBtn.textContent = "♪";
    } else {
      music.pause();
      musicBtn.textContent = "×";
    }
  });
}

const openEnvelope = document.getElementById("openEnvelope");
if (openEnvelope) {
  openEnvelope.addEventListener("click", (event) => {
    event.currentTarget.classList.add("opened");
    setTimeout(() => {
      const letterBox = document.getElementById("letter");
      if (letterBox) letterBox.classList.remove("hidden");
    }, 520);
  });
}

const timeline = document.getElementById("timeline");
if (timeline) {
  timeline.innerHTML = "";
  CONFIG.timeline.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.dataset.step = index + 1;
    div.innerHTML = `<h4>${item.title}</h4><p>${item.text}</p>`;
    timeline.appendChild(div);
  });
}

CONFIG.captions.forEach((caption, i) => {
  const cap = document.getElementById(`caption${i + 1}`);
  if (cap) cap.textContent = caption;
});

for (let i = 1; i <= 4; i++) {
  const img = document.getElementById(`photo${i}`);
  if (img) {
    img.src = `photo${i}.jpg`;
    img.onerror = () => {
      const parent = img.closest(".polaroid");
      if (parent) parent.classList.add("no-photo");
    };
  }
}

const chatMessages = document.getElementById("chatMessages");
if (chatMessages) {
  chatMessages.innerHTML = "";
  CONFIG.chatMessages.forEach((msg, index) => {
    const div = document.createElement("div");
    div.className = `message ${msg.from === "me" ? "me" : "her"}`;
    div.style.animationDelay = `${index * 0.12}s`;
    div.textContent = msg.text;
    chatMessages.appendChild(div);
  });
}

const reasonWheel = document.getElementById("reasonWheel");
if (reasonWheel) {
  reasonWheel.innerHTML = "";
  CONFIG.reasons.forEach((reason) => {
    const div = document.createElement("div");
    div.className = "reason";
    div.innerHTML = `<div class="icon">${reason.icon}</div><p>${reason.text}</p>`;
    reasonWheel.appendChild(div);
  });
}

function createStars() {
  const stars = document.getElementById("stars");
  if (!stars) return;

  stars.innerHTML = "";
  for (let i = 0; i < 90; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";
    stars.appendChild(star);
  }
}

function createFloatingHeart() {
  const area = document.getElementById("floatingHearts");
  if (!area) return;

  const heart = document.createElement("div");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "❤" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 6 + "s";
  area.appendChild(heart);
  setTimeout(() => heart.remove(), 11000);
}

setInterval(createFloatingHeart, 520);
createStars();

const noBtn = document.getElementById("noBtn");
let noClicks = 0;

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", () => {
    noClicks++;
    const texts = [
      "Are you sure? 🥺",
      "Wrong button 😭",
      "This button is scared",
      "Please click Yes ❤️",
      "Dhruvudiii please 😭"
    ];
    noBtn.textContent = texts[Math.min(noClicks - 1, texts.length - 1)];
    moveNoButton();
  });
}

function moveNoButton() {
  if (window.innerWidth < 760 || !noBtn) return;
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random() * 220 - 110 + "px";
  noBtn.style.top = Math.random() * 120 - 60 + "px";
}

const yesBtn = document.getElementById("yesBtn");
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    const finalAnswer = document.getElementById("finalAnswer");
    if (finalAnswer) finalAnswer.classList.remove("hidden");
    launchConfetti();
  });
}

function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const colors = ["#ff4fa3", "#ff9f7f", "#facc15", "#38bdf8", "#8b5cf6", "#2dd4bf"];

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  const pieces = [];

  for (let i = 0; i < 220; i++) {
    pieces.push({
      x: Math.random() * w,
      y: Math.random() * h - h,
      size: Math.random() * 8 + 5,
      speed: Math.random() * 3.6 + 2.4,
      angle: Math.random() * Math.PI * 2,
      spin: Math.random() * 0.24 - 0.12,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    pieces.forEach((p) => {
      p.y += p.speed;
      p.x += Math.sin(frame / 18 + p.angle) * 1.4;
      p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });
    frame++;
    if (frame < 210) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, w, h);
  }
  draw();
}

updatePage();
