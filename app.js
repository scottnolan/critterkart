const racers = [
  { name: "🦚 Pierre Plume", color: "#d94135", accent: "#f2b93b", votes: 18, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Pierre-Plume.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Pierre-Plume.png" },
  { name: "🐱 Lady Whiskerfluff", color: "#2f9e68", accent: "#ffd34f", votes: 22, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Lady-Whiskerfluff.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Lady-Whiskerfluff.png" },
  { name: "🐠 Captain Bubbles", color: "#f9f7ef", accent: "#1d2528", votes: 15, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Captain-Bubbles.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Captain-Bubbles.png" },
  { name: "🐵 Bananas McChimp", color: "#1d2528", accent: "#f9f7ef", votes: 16, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Bananas-McChimp.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Bananas-McChimp.png" },
  { name: "🐸 Lily Flip Ribbit", color: "#f2b93b", accent: "#1d2528", votes: 20, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Lily-Flip-Ribbit.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Lily-Flip-Ribbit.png" },
  { name: "🐨 Snoozer & Gum", color: "#2473d4", accent: "#8bd3ff", votes: 17, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Snoozer+Gum.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Snoozer+Gum.png" },
  { name: "🐶 Chief Spotterson", color: "#47a447", accent: "#f57d2a", votes: 24, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Chief-Spotterson.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Chief-Spotterson.png" },
  { name: "🐊 Skidjaw Chomp", color: "#d9eef8", accent: "#ffffff", votes: 14, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Skidjaw-Chomp.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Skidjaw-Chomp.png" },
  { name: "🐬 Turbo Fin", color: "#f57d2a", accent: "#ffcf4a", votes: 21, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Turbo-Fin.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Turbo-Fin.png" },
  { name: "🐰 C. Hopper", color: "#f8e56a", accent: "#ffffff", votes: 12, heroImage: "./assets/cars/Cars-Hero/Car-Hero-C-Hopper.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-C-Hopper.png" },
  { name: "🦁 King Leo", color: "#18a7a8", accent: "#174d92", votes: 19, heroImage: "./assets/cars/Cars-Hero/Car-Hero-King-Leo.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-King-Leo.png" },
  { name: "🦜 Captain Scarlet Squawk", color: "#ffffff", accent: "#d94135", votes: 13, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Captain-Scarlet-Squawk.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Captain-Scarlet-Squawk.png" },
];

const supabaseConfig = {
  url: "https://dailselxcskddfleeemt.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhaWxzZWx4Y3NrZGRmbGVlZW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MzA5MTIsImV4cCI6MjA5NTAwNjkxMn0.09ZwREefIlHfwJK6s_NBIXlDCrOZfziskMVKOpF_r9Q",
};

const obstacleAssets = [
  { color: "#f57d2a", image: "" },
  { color: "#f2b93b", image: "" },
  { color: "#ffffff", image: "" },
  { color: "#2473d4", image: "" },
];

const trackArt = {
  image: "",
};

const imageCache = new Map();
const bestDistanceKey = "critterKartBestDistance";
const selectedRacerKey = "critterKartSelectedRacer";
const voteSubmittedKey = "critterKartVoteSubmitted";

const state = {
  selectedIndex: 0,
  pendingVoteIndex: null,
  controlMode: "buttons",
  voted: false,
  game: {
    running: false,
    paused: false,
    playerX: 0.5,
    targetX: 0.5,
    distance: 0,
    best: Number(localStorage.getItem(bestDistanceKey) || 0),
    speed: 4,
    roadOffset: 0,
    lastTime: 0,
    obstacles: [],
    spawnTimer: 0,
    keys: new Set(),
    holdingLeft: false,
    holdingRight: false,
    tilt: 0,
    animationFrame: 0,
  },
};

const pollPage = document.querySelector("#pollPage");
const gamePage = document.querySelector("#gamePage");
const pollOptions = document.querySelector("#pollOptions");
const racerGrid = document.querySelector("#racerGrid");
const voteSubmitPanel = document.querySelector("#voteSubmitPanel");
const submitVote = document.querySelector("#submitVote");
const skipVote = document.querySelector("#skipVote");
const resultsPanel = document.querySelector("#resultsPanel");
const resultsList = document.querySelector("#resultsList");
const raceCta = document.querySelector("#raceCta");
const carouselTrack = document.querySelector("#carouselTrack");
const carouselViewport = document.querySelector("#carouselViewport");
const carouselDots = document.querySelector("#carouselDots");
const prevKart = document.querySelector("#prevKart");
const nextKart = document.querySelector("#nextKart");
const startGameButton = document.querySelector("#startGame");
const backToVote = document.querySelector("#backToVote");
const buttonsMode = document.querySelector("#buttonsMode");
const tiltMode = document.querySelector("#tiltMode");
const controlHint = document.querySelector("#controlHint");
const startPanel = document.querySelector("#startPanel");
const playPanel = document.querySelector("#playPanel");
const endPanel = document.querySelector("#endPanel");
const canvas = document.querySelector("#gameCanvas");
const ctx = canvas?.getContext("2d");
const distanceText = document.querySelector("#distanceText");
const bestText = document.querySelector("#bestText");
const pauseGameButton = document.querySelector("#pauseGame");
const gameMenuButton = document.querySelector("#gameMenu");
const finalScore = document.querySelector("#finalScore");
const retryGame = document.querySelector("#retryGame");
const chooseKart = document.querySelector("#chooseKart");
const touchControls = document.querySelector("#touchControls");
const leftControl = document.querySelector("#leftControl");
const rightControl = document.querySelector("#rightControl");
const isPollPage = Boolean(racerGrid);
const isGamePage = Boolean(gamePage);
let carouselTouchStartX = 0;

function isSupabaseConfigured() {
  return Boolean(supabaseConfig.url && supabaseConfig.anonKey);
}

function getSupabaseHeaders(extraHeaders = {}) {
  return {
    apikey: supabaseConfig.anonKey,
    Authorization: `Bearer ${supabaseConfig.anonKey}`,
    ...extraHeaders,
  };
}

function getInitialRacerIndex() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = Number(params.get("racer"));
  if (Number.isInteger(fromQuery) && fromQuery >= 0 && fromQuery < racers.length) {
    return fromQuery;
  }

  const fromStorage = Number(localStorage.getItem(selectedRacerKey) || 0);
  if (Number.isInteger(fromStorage) && fromStorage >= 0 && fromStorage < racers.length) {
    return fromStorage;
  }

  return 0;
}

function kartMarkup(racer) {
  if (racer.heroImage) {
    return `<img class="kart-image" src="${racer.heroImage}" alt="" />`;
  }

  return `
    <div class="kart-art" style="--kart-color:${racer.color};--kart-accent:${racer.accent}">
      <span class="kart-body"></span>
      <span class="kart-nose"></span>
      <span class="kart-cockpit"></span>
      <span class="kart-wheel kart-wheel--back"></span>
      <span class="kart-wheel kart-wheel--front"></span>
    </div>
  `;
}

function getAssetImage(src) {
  if (!src) return undefined;
  if (!imageCache.has(src)) {
    const image = new Image();
    image.src = src;
    imageCache.set(src, image);
  }
  return imageCache.get(src);
}

function renderRacers() {
  if (!racerGrid) return;
  racerGrid.innerHTML = racers
    .map(
      (racer, index) => `
        <button class="racer-card ${index === state.pendingVoteIndex ? "racer-card--selected" : ""}" type="button" data-racer="${index}">
          ${kartMarkup(racer)}
          <span class="racer-name">${racer.name}</span>
        </button>
      `,
    )
    .join("");
  submitVote.disabled = state.voted || state.pendingVoteIndex === null;
  voteSubmitPanel?.classList.toggle("vote-submit-panel--visible", !submitVote.disabled);
}

function renderResults() {
  if (!resultsList) return;
  const ranked = racers
    .map((racer, index) => ({
      ...racer,
      index,
    }))
    .sort((a, b) => b.votes - a.votes);
  const maxVotes = Math.max(1, ...ranked.map((racer) => racer.votes));

  resultsList.innerHTML = ranked
    .slice(0, 6)
    .map(
      (racer, index) => `
        <div class="result-row">
          <span class="result-rank">${index + 1}</span>
          <div class="result-bar" style="--bar-color:${racer.color};--bar-width:${(racer.votes / maxVotes) * 100}%">
            <span></span>
          </div>
          <span class="result-label">${racer.name}</span>
        </div>
      `,
    )
    .join("");
}

function goToRace(index = state.selectedIndex) {
  const racerIndex = Number.isInteger(index) && index >= 0 && index < racers.length ? index : 0;
  localStorage.setItem(selectedRacerKey, String(racerIndex));
  window.location.href = `./race.html?racer=${racerIndex}`;
}

async function submitVoteToSupabase(index) {
  if (!isSupabaseConfigured()) return;

  const endpoint = `${supabaseConfig.url.replace(/\/$/, "")}/rest/v1/racer_votes`;
  const racer = racers[index];

  const response = await fetch(endpoint, {
    method: "POST",
    headers: getSupabaseHeaders({
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    }),
    body: JSON.stringify({
      racer_index: index,
      racer_name: racer.name,
    }),
  });

  if (!response.ok) {
    throw new Error(`Vote submission failed with status ${response.status}`);
  }
}

async function syncVoteTotalsFromSupabase() {
  if (!isSupabaseConfigured()) return;

  const endpoint = `${supabaseConfig.url.replace(/\/$/, "")}/rest/v1/racer_vote_totals?select=racer_index,vote_count`;
  const response = await fetch(endpoint, {
    headers: getSupabaseHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Vote totals failed with status ${response.status}`);
  }

  const totals = await response.json();
  racers.forEach((racer) => {
    racer.votes = 0;
  });
  totals.forEach((row) => {
    if (racers[row.racer_index]) {
      racers[row.racer_index].votes = Number(row.vote_count) || 0;
    }
  });
  renderResults();
}

function focusRacer(index) {
  window.requestAnimationFrame(() => {
    racerGrid?.querySelector("[data-racer=\"" + index + "\"]")?.focus();
  });
}

function getPollColumnCount() {
  if (!racerGrid) return 1;
  return Math.max(1, getComputedStyle(racerGrid).gridTemplateColumns.split(" ").length);
}

function selectRacer(index) {
  state.pendingVoteIndex = index;
  renderRacers();
  submitVote.disabled = false;
  voteSubmitPanel?.classList.add("vote-submit-panel--visible");
  focusRacer(index);
}

function movePollSelection(offset) {
  if (state.voted) return;
  const currentIndex = state.pendingVoteIndex ?? 0;
  const nextIndex = (currentIndex + offset + racers.length) % racers.length;
  selectRacer(nextIndex);
}

function handlePollKeydown(event) {
  if (!event.target.closest("[data-racer]")) return;
  const columns = getPollColumnCount();

  if (event.key === "ArrowRight") {
    event.preventDefault();
    movePollSelection(1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    movePollSelection(-1);
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    movePollSelection(columns);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    movePollSelection(-columns);
  } else if (event.key === "Home") {
    event.preventDefault();
    selectRacer(0);
  } else if (event.key === "End") {
    event.preventDefault();
    selectRacer(racers.length - 1);
  } else if (event.key === "Enter") {
    event.preventDefault();
    submitSelectedVote();
  }
}

async function submitSelectedVote() {
  if (state.voted || state.pendingVoteIndex === null) return;
  state.voted = true;
  state.selectedIndex = state.pendingVoteIndex;
  localStorage.setItem(selectedRacerKey, String(state.selectedIndex));
  localStorage.setItem(voteSubmittedKey, "true");
  racers[state.selectedIndex].votes += 1;
  try {
    await submitVoteToSupabase(state.selectedIndex);
    await syncVoteTotalsFromSupabase();
  } catch (error) {
    console.warn(error);
  }
  renderRacers();
  renderResults();
  submitVote.disabled = true;
  voteSubmitPanel?.classList.remove("vote-submit-panel--visible");
  pollOptions.classList.add("poll-options--exit");
  window.setTimeout(() => {
    pollOptions.hidden = true;
    resultsPanel.hidden = false;
    resultsPanel.classList.add("results-panel--enter");
    resultsPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 330);
}

function updateCarouselPosition() {
  if (!carouselTrack || !carouselViewport) return;
  const activeCard = carouselTrack.querySelector(".carousel-card--active");
  if (!activeCard) return;

  const viewportCenter = carouselViewport.clientWidth / 2;
  const activeCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
  carouselTrack.style.transform = `translateX(${viewportCenter - activeCenter}px)`;
}

function renderCarousel() {
  if (!carouselTrack || !carouselDots) return;
  if (!carouselTrack.children.length) {
    carouselTrack.innerHTML = racers
      .map((racer, index) => {
      return `
        <div class="carousel-card" data-carousel-racer="${index}" style="--kart-color:${racer.color};--kart-accent:${racer.accent}">
          ${kartMarkup(racer)}
          <strong>${racer.name}</strong>
        </div>
      `;
    })
    .join("");
  }

  carouselTrack.querySelectorAll("[data-carousel-racer]").forEach((card) => {
    const index = Number(card.dataset.carouselRacer);
    card.classList.toggle("carousel-card--active", index === state.selectedIndex);
  });

  carouselDots.innerHTML = racers
    .map(
      (_, index) => `
        <button class="dot-button ${index === state.selectedIndex ? "dot-button--active" : ""}" type="button" data-dot="${index}" aria-label="Choose racer ${index + 1}"></button>
      `,
    )
    .join("");
  window.requestAnimationFrame(updateCarouselPosition);
}

function setScreen(screen) {
  pollPage?.classList.toggle("screen--active", screen === "poll");
  gamePage?.classList.toggle("screen--active", screen === "game");
}

function setGamePanel(panel) {
  startPanel?.classList.toggle("game-panel--active", panel === "start");
  playPanel?.classList.toggle("game-panel--active", panel === "play");
  endPanel?.classList.toggle("game-panel--active", panel === "end");
}

function focusFirstMenuOption() {
  if (!isGamePage) return;
  window.requestAnimationFrame(() => {
    if (startPanel?.classList.contains("game-panel--active")) {
      carouselViewport?.focus();
    } else if (endPanel?.classList.contains("game-panel--active")) {
      retryGame?.focus();
    }
  });
}

function setControlMode(mode) {
  state.controlMode = mode;
  buttonsMode?.classList.toggle("segment--active", mode === "buttons");
  tiltMode?.classList.toggle("segment--active", mode === "tilt");
  touchControls?.classList.toggle("touch-controls--hidden", mode === "tilt");
  if (controlHint) {
    controlHint.textContent =
    mode === "tilt"
      ? "Tilt your phone left and right during the race."
      : "Use the left and right buttons during the race.";
  }
}

function requestTiltPermission() {
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    return DeviceOrientationEvent.requestPermission().catch(() => "denied");
  }
  return Promise.resolve("granted");
}

function changeKart(direction) {
  state.selectedIndex = (state.selectedIndex + direction + racers.length) % racers.length;
  localStorage.setItem(selectedRacerKey, String(state.selectedIndex));
  renderRacers();
  renderCarousel();
}

function resetGame() {
  const game = state.game;
  game.running = true;
  game.paused = false;
  game.playerX = 0.5;
  game.targetX = 0.5;
  game.distance = 0;
  game.speed = 4;
  game.roadOffset = 0;
  game.lastTime = performance.now();
  game.obstacles = [];
  game.spawnTimer = 0;
  game.tilt = 0;
  if (pauseGameButton) pauseGameButton.textContent = "Pause";
  distanceText.textContent = "0 m";
  bestText.textContent = `${Math.round(game.best)} m`;
}

function startGame() {
  resetGame();
  setGamePanel("play");
  startGameButton?.blur();
  cancelAnimationFrame(state.game.animationFrame);
  state.game.animationFrame = requestAnimationFrame(updateGame);
}

function endGame() {
  const game = state.game;
  game.running = false;
  cancelAnimationFrame(game.animationFrame);
  const score = Math.round(game.distance);
  if (score > game.best) {
    game.best = score;
    localStorage.setItem(bestDistanceKey, String(score));
  }
  finalScore.textContent = `${score} m`;
  bestText.textContent = `${Math.round(game.best)} m`;
  setGamePanel("end");
  focusFirstMenuOption();
}

function pauseGame() {
  const game = state.game;
  if (!game.running || game.paused) return;
  game.paused = true;
  if (pauseGameButton) pauseGameButton.textContent = "Resume";
  cancelAnimationFrame(game.animationFrame);
}

function resumeGame() {
  const game = state.game;
  if (!game.running || !game.paused) return;
  game.paused = false;
  game.lastTime = performance.now();
  if (pauseGameButton) pauseGameButton.textContent = "Pause";
  game.animationFrame = requestAnimationFrame(updateGame);
}

function togglePause() {
  if (state.game.paused) {
    resumeGame();
  } else {
    pauseGame();
  }
}

function returnToGameMenu() {
  const game = state.game;
  game.running = false;
  game.paused = false;
  game.holdingLeft = false;
  game.holdingRight = false;
  game.keys.clear();
  cancelAnimationFrame(game.animationFrame);
  if (pauseGameButton) pauseGameButton.textContent = "Pause";
  renderCarousel();
  setGamePanel("start");
  focusFirstMenuOption();
}

function drawBrickPattern(x, y, width, height, colorA, colorB, brickSize = 24) {
  ctx.fillStyle = colorA;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = colorB;
  ctx.lineWidth = 2;
  for (let row = 0; row < height / brickSize + 1; row += 1) {
    const offset = row % 2 === 0 ? 0 : brickSize / 2;
    for (let col = -1; col < width / brickSize + 1; col += 1) {
      ctx.strokeRect(x + col * brickSize + offset, y + row * brickSize, brickSize, brickSize);
    }
  }
}

function drawKart(x, y, width, height, racer) {
  const asset = getAssetImage(racer.gameImage);
  if (asset?.complete && asset.naturalWidth > 0) {
    ctx.drawImage(asset, x - width / 2, y - height / 2, width, height);
    return;
  }

  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = racer.color;
  ctx.strokeStyle = "rgba(0,0,0,0.3)";
  ctx.lineWidth = 5;
  roundRect(-width * 0.35, -height * 0.22, width * 0.7, height * 0.56, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = racer.accent;
  roundRect(width * 0.15, -height * 0.13, width * 0.28, height * 0.34, 10);
  ctx.fill();

  ctx.fillStyle = "#d9eef8";
  ctx.beginPath();
  ctx.arc(-width * 0.04, -height * 0.2, width * 0.17, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#1d2528";
  ctx.beginPath();
  ctx.arc(-width * 0.27, height * 0.33, width * 0.15, 0, Math.PI * 2);
  ctx.arc(width * 0.27, height * 0.33, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawObstacle(obstacle) {
  const asset = getAssetImage(obstacle.image);
  if (asset?.complete && asset.naturalWidth > 0) {
    ctx.drawImage(
      asset,
      obstacle.x - obstacle.size / 2,
      obstacle.y - obstacle.size / 2,
      obstacle.size,
      obstacle.size,
    );
    return;
  }

  ctx.save();
  ctx.translate(obstacle.x, obstacle.y);
  ctx.fillStyle = obstacle.color;
  ctx.strokeStyle = "rgba(0,0,0,0.25)";
  ctx.lineWidth = 4;
  roundRect(-obstacle.size / 2, -obstacle.size / 2, obstacle.size, obstacle.size, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.fillRect(-obstacle.size * 0.28, -obstacle.size * 0.28, obstacle.size * 0.2, obstacle.size * 0.2);
  ctx.fillRect(obstacle.size * 0.08, obstacle.size * 0.02, obstacle.size * 0.2, obstacle.size * 0.2);
  ctx.restore();
}

function drawGame() {
  const { width, height } = canvas;
  const game = state.game;
  const roadX = width * 0.18;
  const roadW = width * 0.64;
  const racer = racers[state.selectedIndex];

  const trackImage = getAssetImage(trackArt.image);
  if (trackImage?.complete && trackImage.naturalWidth > 0) {
    const tileHeight = height;
    for (let y = (game.roadOffset % tileHeight) - tileHeight; y < height; y += tileHeight) {
      ctx.drawImage(trackImage, 0, y, width, tileHeight);
    }
  } else {
    drawBrickPattern(0, 0, width, height, "#65b96b", "#57a55d", 36);
    drawBrickPattern(roadX, 0, roadW, height, "#d8c08a", "#c7ad76", 42);

    ctx.fillStyle = "#1d2528";
    for (let y = (game.roadOffset % 96) - 96; y < height; y += 96) {
      ctx.fillRect(width * 0.49, y, width * 0.025, 48);
    }

    ctx.fillStyle = "#f9f7ef";
    ctx.fillRect(roadX + 12, 0, 10, height);
    ctx.fillRect(roadX + roadW - 22, 0, 10, height);
  }

  game.obstacles.forEach(drawObstacle);

  const playerX = roadX + game.playerX * roadW;
  const playerY = height * 0.89;
  drawKart(playerX, playerY, width * 0.32, height * 0.17, racer);
}

function spawnObstacle() {
  const { width } = canvas;
  const roadX = width * 0.18;
  const roadW = width * 0.64;
  const lane = Math.floor(Math.random() * 3);
  const laneX = roadX + roadW * (0.2 + lane * 0.3);
  const asset = obstacleAssets[Math.floor(Math.random() * obstacleAssets.length)];
  state.game.obstacles.push({
    x: laneX,
    y: -40,
    size: 54 + Math.random() * 18,
    color: asset.color,
    image: asset.image,
  });
}

function rectanglesOverlap(a, b) {
  return (
    Math.abs(a.x - b.x) * 2 < a.width + b.width &&
    Math.abs(a.y - b.y) * 2 < a.height + b.height
  );
}

function updateGame(now) {
  const game = state.game;
  if (!game.running || game.paused) return;

  const delta = Math.min((now - game.lastTime) / 1000, 0.04);
  game.lastTime = now;
  game.speed += delta * 0.11;
  game.distance += delta * game.speed * 13;
  game.roadOffset += delta * game.speed * 78;

  const buttonDirection = Number(game.holdingRight || game.keys.has("ArrowRight")) - Number(game.holdingLeft || game.keys.has("ArrowLeft"));
  const tiltDirection = Math.max(-1, Math.min(1, game.tilt / 18));
  const direction = state.controlMode === "tilt" ? tiltDirection : buttonDirection;
  game.targetX = Math.max(0.08, Math.min(0.92, game.targetX + direction * delta * 1.35));
  game.playerX += (game.targetX - game.playerX) * Math.min(1, delta * 16);

  game.spawnTimer -= delta;
  if (game.spawnTimer <= 0) {
    spawnObstacle();
    game.spawnTimer = Math.max(0.58, 1.15 - game.speed * 0.06);
  }

  game.obstacles.forEach((obstacle) => {
    obstacle.y += delta * game.speed * 112;
  });
  game.obstacles = game.obstacles.filter((obstacle) => obstacle.y < canvas.height + 80);

  const playerBox = {
    x: canvas.width * (0.18 + game.playerX * 0.64),
    y: canvas.height * 0.89,
    width: canvas.width * 0.15,
    height: canvas.height * 0.1,
  };
  const hitObstacle = game.obstacles.some((obstacle) =>
    rectanglesOverlap(playerBox, {
      x: obstacle.x,
      y: obstacle.y,
      width: obstacle.size * 0.58,
      height: obstacle.size * 0.58,
    }),
  );

  distanceText.textContent = `${Math.round(game.distance)} m`;
  bestText.textContent = `${Math.round(Math.max(game.best, game.distance))} m`;
  drawGame();

  if (hitObstacle) {
    endGame();
    return;
  }

  game.animationFrame = requestAnimationFrame(updateGame);
}

function bindHold(button, property) {
  const set = (value) => {
    state.game[property] = value;
  };
  button.addEventListener("pointerdown", () => set(true));
  button.addEventListener("pointerup", () => set(false));
  button.addEventListener("pointercancel", () => set(false));
  button.addEventListener("pointerleave", () => set(false));
}

racerGrid?.addEventListener("keydown", handlePollKeydown);

racerGrid?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-racer]");
  if (!card) return;
  selectRacer(Number(card.dataset.racer));
});

submitVote?.addEventListener("click", submitSelectedVote);

skipVote?.addEventListener("click", () => {
  goToRace(getInitialRacerIndex());
});

raceCta?.addEventListener("click", () => {
  goToRace(state.selectedIndex);
});

prevKart?.addEventListener("click", () => changeKart(-1));
nextKart?.addEventListener("click", () => changeKart(1));
carouselDots?.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-dot]");
  if (!dot) return;
  state.selectedIndex = Number(dot.dataset.dot);
  localStorage.setItem(selectedRacerKey, String(state.selectedIndex));
  renderRacers();
  renderCarousel();
});

carouselTrack?.addEventListener("pointerdown", (event) => {
  carouselTouchStartX = event.clientX;
});

carouselTrack?.addEventListener("pointerup", (event) => {
  const deltaX = event.clientX - carouselTouchStartX;
  if (Math.abs(deltaX) < 36) return;
  changeKart(deltaX > 0 ? -1 : 1);
});

buttonsMode?.addEventListener("click", () => setControlMode("buttons"));
tiltMode?.addEventListener("click", async () => {
  const permission = await requestTiltPermission();
  if (permission === "granted") {
    setControlMode("tilt");
  }
});

startGameButton?.addEventListener("click", startGame);
pauseGameButton?.addEventListener("click", togglePause);
gameMenuButton?.addEventListener("click", returnToGameMenu);
retryGame?.addEventListener("click", startGame);
chooseKart?.addEventListener("click", () => {
  renderCarousel();
  setGamePanel("start");
  focusFirstMenuOption();
});
backToVote?.addEventListener("click", () => setScreen("poll"));

function moveFocus(options, direction) {
  const focusable = options.filter(Boolean);
  const currentIndex = focusable.indexOf(document.activeElement);
  const nextIndex =
    currentIndex === -1
      ? 0
      : (currentIndex + direction + focusable.length) % focusable.length;
  focusable[nextIndex]?.focus();
}

function handleMenuKeydown(event) {
  if (!isGamePage) return false;

  if (startPanel?.classList.contains("game-panel--active")) {
    const startOptions = [carouselViewport, startGameButton, buttonsMode, tiltMode];

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(startOptions, -1);
      return true;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(startOptions, 1);
      return true;
    }

    if (document.activeElement === carouselViewport) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        changeKart(-1);
        return true;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        changeKart(1);
        return true;
      }
    }

    if (document.activeElement === buttonsMode || document.activeElement === tiltMode) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const target = document.activeElement === buttonsMode ? tiltMode : buttonsMode;
        target?.focus();
        return true;
      }
    }
  }

  if (endPanel?.classList.contains("game-panel--active")) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus([retryGame, chooseKart], event.key === "ArrowDown" ? 1 : -1);
      return true;
    }
  }

  return false;
}

window.addEventListener("keydown", (event) => {
  if (handleMenuKeydown(event)) return;
  if (
    playPanel?.classList.contains("game-panel--active") &&
    state.game.running &&
    !state.game.paused &&
    (event.key === "ArrowLeft" || event.key === "ArrowRight")
  ) {
    state.game.keys.add(event.key);
  }
});

window.addEventListener("keyup", (event) => {
  state.game.keys.delete(event.key);
});

window.addEventListener("resize", updateCarouselPosition);

window.addEventListener("deviceorientation", (event) => {
  if (typeof event.gamma === "number") {
    state.game.tilt = event.gamma;
  }
});

if (leftControl) bindHold(leftControl, "holdingLeft");
if (rightControl) bindHold(rightControl, "holdingRight");

if (isPollPage) {
  state.selectedIndex = getInitialRacerIndex();
  if (localStorage.getItem(voteSubmittedKey) === "true") {
    goToRace(state.selectedIndex);
  }
  renderRacers();
  renderResults();
  syncVoteTotalsFromSupabase().catch((error) => console.warn(error));
}

if (isGamePage) {
  state.selectedIndex = getInitialRacerIndex();
  localStorage.setItem(selectedRacerKey, String(state.selectedIndex));
  renderCarousel();
  setControlMode("buttons");
  drawGame();
  focusFirstMenuOption();
}
