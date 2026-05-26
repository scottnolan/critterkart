const racers = [
  { name: "🐵 Bananas McChimp", color: "#1d2528", accent: "#f9f7ef", pollColor: "#ffff00", votes: 16, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Bananas-McChimp.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Bananas-McChimp.png" },
  { name: "🦚 Pierre Plume", color: "#d94135", accent: "#f2b93b", pollColor: "#68c3e2", votes: 18, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Pierre-Plume.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Pierre-Plume.png" },
  { name: "🐱 Lady Whiskerfluff", color: "#2f9e68", accent: "#ffd34f", pollColor: "#c8509b", votes: 22, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Lady-Whiskerfluff.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Lady-Whiskerfluff.png" },
  { name: "🐠 Captain Bubbles", color: "#f9f7ef", accent: "#1d2528", pollColor: "#ca4c0b", votes: 15, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Captain-Bubbles.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Captain-Bubbles.png" },
  { name: "🐸 Lily Flip Ribbit", color: "#f2b93b", accent: "#1d2528", pollColor: "#e2f99a", votes: 20, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Lily-Flip-Ribbit.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Lily-Flip-Ribbit.png" },
  { name: "🐨 Snoozer & Gum", color: "#2473d4", accent: "#8bd3ff", pollColor: "#58ab41", votes: 17, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Snoozer+Gum.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Snoozer+Gum.png" },
  { name: "🐶 Chief Spotterson", color: "#47a447", accent: "#f57d2a", pollColor: "#b40000", votes: 24, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Chief-Spotterson.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Chief-Spotterson.png" },
  { name: "🐊 Skidjaw Chomp", color: "#d9eef8", accent: "#ffffff", pollColor: "#00852b", votes: 14, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Skidjaw-Chomp.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Skidjaw-Chomp.png" },
  { name: "🐬 Turbo Fin", color: "#f57d2a", accent: "#ffcf4a", pollColor: "#1e5aa8", votes: 21, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Turbo-Fin.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Turbo-Fin.png" },
  { name: "🐰 C. Hopper", color: "#f8e56a", accent: "#ffffff", pollColor: "#d67923", votes: 12, heroImage: "./assets/cars/Cars-Hero/Car-Hero-C-Hopper.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-C-Hopper.png" },
  { name: "🦁 King Leo", color: "#18a7a8", accent: "#174d92", pollColor: "#fcac00", votes: 19, heroImage: "./assets/cars/Cars-Hero/Car-Hero-King-Leo.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-King-Leo.png" },
  { name: "🦜 Captain Scarlet Squawk", color: "#ffffff", accent: "#d94135", pollColor: "#5f3109", votes: 13, heroImage: "./assets/cars/Cars-Hero/Car-Hero-Captain-Scarlet-Squawk.png", gameImage: "./assets/cars/Cars-TopView/Car-TopView-Captain-Scarlet-Squawk.png" },
];

const supabaseConfig = {
  url: "https://dailselxcskddfleeemt.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhaWxzZWx4Y3NrZGRmbGVlZW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MzA5MTIsImV4cCI6MjA5NTAwNjkxMn0.09ZwREefIlHfwJK6s_NBIXlDCrOZfziskMVKOpF_r9Q",
};

const obstacleAssets = [
  {
    type: "oil",
    label: "Oil",
    effect: "spin",
    frequency: "medium",
    weight: 3,
    color: "#1d2528",
    image: "./assets/obstacles/Obstacle-Oil.png",
    size: 126,
  },
  {
    type: "brick",
    label: "Lego bricks",
    effect: "crash",
    frequency: "common",
    weight: 6,
    size: 126,
    shapes: [
      { src: "./assets/obstacles/Brick-2x2.svg", hitboxWidth: 0.36, hitboxHeight: 0.36 },
      { src: "./assets/obstacles/Brick-2x4.svg", hitboxWidth: 0.62, hitboxHeight: 0.36 },
    ],
    colorVariants: [
      { base: "#f4413a", highlight: "#f8887a", shadow: "#c60204" },
      { base: "#f2b93b", highlight: "#ffe17a", shadow: "#c47a12" },
      { base: "#2473d4", highlight: "#80b6ff", shadow: "#174d92" },
      { base: "#2f9e68", highlight: "#7fdca7", shadow: "#176c46" },
      { base: "#ffffff", highlight: "#ffffff", shadow: "#cfd7dc" },
    ],
  },
  {
    type: "cone",
    label: "Orange cone",
    effect: "slow",
    frequency: "medium",
    weight: 3,
    color: "#f57d2a",
    image: "./assets/obstacles/Obstacle-TrafficCone.png",
    size: 126,
  },
  {
    type: "jump",
    label: "Jump",
    effect: "jump",
    frequency: "rare",
    weight: 1,
    color: "#8bd3ff",
    image: "./assets/obstacles/Obstacle-Jump.png",
    size: 126,
  },
];

const trackArt = {
  image: "./assets/tracks/track-01.png",
};

const roadLayout = {
  x: 0.13,
  width: 0.74,
};
const kartLayout = {
  width: 0.38,
  height: 0.2,
  hitboxWidth: 0.13,
  hitboxHeight: 0.08,
};
const imageCache = new Map();
const svgTemplateCache = new Map();
const tintedSvgCache = new Map();
const bestDistanceKey = "critterKartBestDistance";
const selectedRacerKey = "critterKartSelectedRacer";
const voteSubmittedKey = "critterKartVoteSubmitted";
const pauseTips = [
  "Use the arrow keys to steer.",
  "Avoid the cones, they slow you down.",
  "Watch out for bricks.",
  "Don't spin out in the oil.",
  "Use the jumps for speed.",
];

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
    collisionEffect: null,
    slowUntil: 0,
    jumpUntil: 0,
    speedBoostUntil: 0,
    keys: new Set(),
    holdingLeft: false,
    holdingRight: false,
    tilt: 0,
    steerRotation: 0,
    animationFrame: 0,
    countdownActive: false,
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
const popularityButton = document.querySelector("#popularityButton");
const playPopularityButton = document.querySelector("#playPopularityButton");
const popularityModal = document.querySelector("#popularityModal");
const popularityResults = document.querySelector("#popularityResults");
const closePopularity = document.querySelector("#closePopularity");
const carouselTrack = document.querySelector("#carouselTrack");
const carouselViewport = document.querySelector("#carouselViewport");
const carouselDots = document.querySelector("#carouselDots");
const prevKart = document.querySelector("#prevKart");
const nextKart = document.querySelector("#nextKart");
const startGameButton = document.querySelector("#startGame");
const backToVote = document.querySelector("#backToVote");
const buttonsMode = document.querySelector("#buttonsMode");
const tiltMode = document.querySelector("#tiltMode");
const playButtonsMode = document.querySelector("#playButtonsMode");
const playTiltMode = document.querySelector("#playTiltMode");
const controlHint = document.querySelector("#controlHint");
const pauseTipText = document.querySelector("#pauseTipText");
const startPanel = document.querySelector("#startPanel");
const playPanel = document.querySelector("#playPanel");
const endPanel = document.querySelector("#endPanel");
const canvas = document.querySelector("#gameCanvas");
const ctx = canvas?.getContext("2d");
const distanceText = document.querySelector("#distanceText");
const bestText = document.querySelector("#bestText");
const pauseGameButton = document.querySelector("#pauseGame");
const playRaceButton = document.querySelector("#playRace");
const restartRaceButton = document.querySelector("#restartRace");
const changeRaceCarButton = document.querySelector("#changeRaceCar");
const finalScore = document.querySelector("#finalScore");
const retryGame = document.querySelector("#retryGame");
const chooseKart = document.querySelector("#chooseKart");
const touchControls = document.querySelector("#touchControls");
const leftControl = document.querySelector("#leftControl");
const rightControl = document.querySelector("#rightControl");
const countdownOverlay = document.querySelector("#countdownOverlay");
const countdownKart = document.querySelector("#countdownKart");
const countdownNumber = document.querySelector("#countdownNumber");
const isPollPage = Boolean(racerGrid);
const isGamePage = Boolean(gamePage);
let carouselTouchStartX = 0;
let pauseTipIndex = 0;
let pauseTipTimer = 0;

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

function getRacerSlug(racer) {
  return racer.name
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getRacerIndexFromParam(value) {
  if (!value) return null;

  const numericValue = Number(value);
  if (Number.isInteger(numericValue) && numericValue >= 0 && numericValue < racers.length) {
    return numericValue;
  }

  const requestedSlug = value
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/^-+|-+$/g, "");
  const matchingIndex = racers.findIndex((racer) => getRacerSlug(racer) === requestedSlug);
  if (matchingIndex >= 0) return matchingIndex;

  const sluggedValue = getRacerSlug({ name: value });
  const matchingNameIndex = racers.findIndex((racer) => getRacerSlug(racer) === sluggedValue);
  return matchingNameIndex >= 0 ? matchingNameIndex : null;
}

function getRacerUrl(index) {
  const racerIndex = Number.isInteger(index) && index >= 0 && index < racers.length ? index : 0;
  return `./race.html?racer=${encodeURIComponent(getRacerSlug(racers[racerIndex]))}`;
}

function replaceCurrentRacerUrl(index) {
  if (!isGamePage) return;
  const nextUrl = getRacerUrl(index);
  const currentUrl = `${window.location.pathname}${window.location.search}`;
  const resolvedNextPath = new URL(nextUrl, window.location.href);
  const nextPath = `${resolvedNextPath.pathname}${resolvedNextPath.search}`;
  if (currentUrl !== nextPath) {
    window.history.replaceState(null, "", nextUrl);
  }
}

function getInitialRacerIndex() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = getRacerIndexFromParam(params.get("racer"));
  if (fromQuery !== null) {
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
    image.decoding = "async";
    image.src = src;
    imageCache.set(src, image);
  }
  return imageCache.get(src);
}

function preloadImage(src) {
  const image = getAssetImage(src);
  if (!image) return Promise.resolve();
  if (image.complete && image.naturalWidth > 0) return Promise.resolve(image);

  return new Promise((resolve) => {
    image.addEventListener("load", () => resolve(image), { once: true });
    image.addEventListener("error", () => resolve(image), { once: true });
  });
}

function loadSvgTemplate(src) {
  if (!src) return Promise.resolve("");
  if (!svgTemplateCache.has(src)) {
    svgTemplateCache.set(
      src,
      fetch(src)
        .then((response) => {
          if (!response.ok) throw new Error(`Failed to load SVG template ${src}`);
          return response.text();
        })
        .catch((error) => {
          console.warn(error);
          return "";
        }),
    );
  }
  return svgTemplateCache.get(src);
}

async function getTintedSvgImage(src, colors) {
  if (!src || !colors) return undefined;
  const cacheKey = getTintedSvgCacheKey(src, colors);
  if (tintedSvgCache.has(cacheKey)) {
    return getAssetImage(tintedSvgCache.get(cacheKey));
  }

  const template = await loadSvgTemplate(src);
  if (!template) return undefined;

  const tintedSvg = template
    .replaceAll("#f4413a", colors.base)
    .replaceAll("#f8887a", colors.highlight)
    .replaceAll("#c60204", colors.shadow);
  const imageSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(tintedSvg)}`;
  tintedSvgCache.set(cacheKey, imageSrc);
  return getAssetImage(imageSrc);
}

function getTintedSvgCacheKey(src, colors) {
  return `${src}|${colors.base}|${colors.highlight}|${colors.shadow}`;
}

function getCachedTintedSvgSrc(src, colors) {
  return tintedSvgCache.get(getTintedSvgCacheKey(src, colors)) || "";
}

async function preloadBrickAssets() {
  const brickAssets = obstacleAssets.filter((asset) => asset.type === "brick");
  const imagePromises = [];

  for (const asset of brickAssets) {
    for (const shape of asset.shapes || []) {
      const shapeSrc = typeof shape === "string" ? shape : shape.src;
      for (const colors of asset.colorVariants || []) {
        const image = await getTintedSvgImage(shapeSrc, colors);
        imagePromises.push(preloadImage(image?.src));
      }
    }
  }

  return Promise.all(imagePromises);
}

async function preloadRaceAssets() {
  const imageSources = new Set();
  racers.forEach((racer) => {
    imageSources.add(racer.heroImage);
    imageSources.add(racer.gameImage);
  });
  obstacleAssets.forEach((asset) => imageSources.add(asset.image));
  imageSources.add(trackArt.image);
  await Promise.all([...imageSources].filter(Boolean).map(preloadImage));
  return preloadBrickAssets();
}

function preloadSelectedRacerImages() {
  const racer = racers[state.selectedIndex];
  return Promise.all([preloadImage(racer.heroImage), preloadImage(racer.gameImage)]);
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

function renderResults(targetList = resultsList, limit = 6) {
  if (!targetList) return;
  const ranked = racers
    .map((racer, index) => ({
      ...racer,
      index,
    }))
    .sort((a, b) => b.votes - a.votes);
  const maxVotes = Math.max(1, ...ranked.map((racer) => racer.votes));

  targetList.innerHTML = ranked
    .slice(0, limit)
    .map(
      (racer, index) => `
        <div class="result-row">
          <span class="result-rank">${index + 1}</span>
          <span class="result-label">${racer.name}</span>
          <div class="result-bar" style="--bar-color:${racer.pollColor};--bar-width:${(racer.votes / maxVotes) * 100}%">
            <span></span>
          </div>
          <span class="result-count">${racer.votes}</span>
        </div>
      `,
    )
    .join("");
}

function renderPopularityResults() {
  renderResults(popularityResults, racers.length);
}

function goToRace(index = state.selectedIndex) {
  const racerIndex = Number.isInteger(index) && index >= 0 && index < racers.length ? index : 0;
  localStorage.setItem(selectedRacerKey, String(racerIndex));
  window.location.href = getRacerUrl(racerIndex);
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

function updateCarouselPosition(animate = true) {
  if (!carouselTrack || !carouselViewport) return;
  const activeCard = carouselTrack.querySelector(".carousel-card--active");
  if (!activeCard) return;

  const viewportCenter = carouselViewport.clientWidth / 2;
  const activeCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
  carouselTrack.classList.toggle("carousel-track--no-transition", !animate);
  carouselTrack.style.transform = `translateX(${viewportCenter - activeCenter}px)`;
  if (!animate) {
    void carouselTrack.offsetWidth;
    carouselTrack.classList.remove("carousel-track--no-transition");
  }
}

function carouselCardMarkup(index, clone = "") {
  const racer = racers[index];
  return `
    <div class="carousel-card" data-carousel-racer="${index}" ${clone ? `data-carousel-clone="${clone}" aria-hidden="true"` : ""} style="--kart-color:${racer.color};--kart-accent:${racer.accent}">
      ${kartMarkup(racer)}
      <strong>${racer.name}</strong>
    </div>
  `;
}

function renderCarousel(animate = true, activeClone = "") {
  if (!carouselTrack || !carouselDots) return;
  if (!carouselTrack.children.length) {
    const lastIndex = racers.length - 1;
    carouselTrack.innerHTML = [
      carouselCardMarkup(lastIndex, "before"),
      ...racers.map((_, index) => carouselCardMarkup(index)),
      carouselCardMarkup(0, "after"),
    ].join("");
  }

  carouselTrack.querySelectorAll("[data-carousel-racer]").forEach((card) => {
    const index = Number(card.dataset.carouselRacer);
    const clonePosition = card.dataset.carouselClone || "";
    card.classList.toggle(
      "carousel-card--active",
      index === state.selectedIndex && clonePosition === activeClone,
    );
  });

  carouselDots.innerHTML = racers
    .map(
      (_, index) => `
        <button class="dot-button ${index === state.selectedIndex ? "dot-button--active" : ""}" type="button" data-dot="${index}" aria-label="Choose racer ${index + 1}"></button>
      `,
    )
    .join("");
  window.requestAnimationFrame(() => updateCarouselPosition(animate));
}

function snapCarouselToRealCard() {
  if (!carouselTrack) return;
  const finishSnap = () => renderCarousel(false);
  carouselTrack.addEventListener("transitionend", finishSnap, { once: true });
}

function setScreen(screen) {
  pollPage?.classList.toggle("screen--active", screen === "poll");
  gamePage?.classList.toggle("screen--active", screen === "game");
}

function setGamePanel(panel) {
  startPanel?.classList.toggle("game-panel--active", panel === "start");
  playPanel?.classList.toggle("game-panel--active", panel === "play");
  endPanel?.classList.toggle("game-panel--active", panel === "end");
  gamePage?.classList.toggle("game-screen--playing", panel === "play");
  document.body.classList.toggle("game-view-has-promo", panel === "start");
  if (panel !== "play") {
    playPanel?.classList.remove("play-panel--paused");
    stopPauseTips();
  }
}

function renderPauseTip() {
  if (!pauseTipText) return;
  pauseTipText.textContent = pauseTips[pauseTipIndex];
}

function startPauseTips() {
  stopPauseTips();
  pauseTipIndex = 0;
  renderPauseTip();
  pauseTipTimer = window.setInterval(() => {
    pauseTipIndex = (pauseTipIndex + 1) % pauseTips.length;
    renderPauseTip();
  }, 3200);
}

function stopPauseTips() {
  if (!pauseTipTimer) return;
  window.clearInterval(pauseTipTimer);
  pauseTipTimer = 0;
}

function setPauseButtonState(paused) {
  if (!pauseGameButton) return;
  playPanel?.classList.toggle("play-panel--paused", paused);
  pauseGameButton.textContent = paused ? "▶" : "⏸";
  pauseGameButton.setAttribute("aria-label", paused ? "Resume race" : "Pause race");
  pauseGameButton.title = paused ? "Resume race" : "Pause race";
  if (paused) {
    startPauseTips();
  } else {
    stopPauseTips();
  }
}

async function openPopularityModal() {
  if (!popularityModal) return;
  if (state.game.running && !state.game.paused) {
    pauseGame();
  }
  renderPopularityResults();
  popularityModal.hidden = false;
  popularityButton?.setAttribute("aria-expanded", "true");
  playPopularityButton?.setAttribute("aria-expanded", "true");
  closePopularity?.focus({ preventScroll: true });
  try {
    await syncVoteTotalsFromSupabase();
    renderPopularityResults();
  } catch (error) {
    console.warn(error);
  }
}

function closePopularityModal() {
  if (!popularityModal) return;
  popularityModal.hidden = true;
  popularityButton?.setAttribute("aria-expanded", "false");
  playPopularityButton?.setAttribute("aria-expanded", "false");
  (playPanel?.classList.contains("game-panel--active") ? playPopularityButton : popularityButton)?.focus({ preventScroll: true });
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
  const hasTiltOption = window.matchMedia("(pointer: coarse)").matches;
  if (!hasTiltOption && mode === "tilt") {
    state.controlMode = "buttons";
  }
  const currentMode = state.controlMode;
  buttonsMode?.classList.toggle("segment--active", currentMode === "buttons");
  tiltMode?.classList.toggle("segment--active", currentMode === "tilt");
  playButtonsMode?.classList.toggle("segment--active", currentMode === "buttons");
  playTiltMode?.classList.toggle("segment--active", currentMode === "tilt");
  document.documentElement.classList.toggle("has-multiple-control-options", hasTiltOption);
  touchControls?.classList.toggle("touch-controls--hidden", currentMode === "tilt");
  const helpText = currentMode === "tilt"
    ? "Tilt your device left and right to steer."
    : hasTiltOption
      ? "Tap and hold left or right to steer."
      : "Use the arrow keys to steer.";
  if (controlHint) {
    controlHint.textContent = helpText;
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
  const previousIndex = state.selectedIndex;
  state.selectedIndex = (state.selectedIndex + direction + racers.length) % racers.length;
  localStorage.setItem(selectedRacerKey, String(state.selectedIndex));
  replaceCurrentRacerUrl(state.selectedIndex);
  preloadSelectedRacerImages();
  renderRacers();
  const wrappedForward = previousIndex === racers.length - 1 && state.selectedIndex === 0;
  const wrappedBackward = previousIndex === 0 && state.selectedIndex === racers.length - 1;
  renderCarousel(true, wrappedForward ? "after" : wrappedBackward ? "before" : "");
  if (wrappedForward || wrappedBackward) snapCarouselToRealCard();
}

function resetGame(startRunning = true) {
  const game = state.game;
  game.running = startRunning;
  game.paused = false;
  game.playerX = 0.5;
  game.targetX = 0.5;
  game.distance = 0;
  game.speed = 4;
  game.roadOffset = 0;
  game.lastTime = performance.now();
  game.obstacles = [];
  game.spawnTimer = 0;
  game.collisionEffect = null;
  game.slowUntil = 0;
  game.jumpUntil = 0;
  game.speedBoostUntil = 0;
  game.tilt = 0;
  game.steerRotation = 0;
  setPauseButtonState(false);
  distanceText.textContent = "0 m";
  bestText.textContent = `${Math.round(game.best)} m`;
}

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function setCountdownValue(value) {
  if (!countdownNumber || !countdownOverlay) return;
  countdownNumber.textContent = value;
  countdownOverlay.classList.remove("countdown-overlay--tick");
  void countdownOverlay.offsetWidth;
  countdownOverlay.classList.add("countdown-overlay--tick");
}

async function playRaceCountdown() {
  if (!countdownOverlay) return;
  const racer = racers[state.selectedIndex];
  if (countdownKart) countdownKart.src = racer.heroImage;

  countdownOverlay.hidden = false;
  countdownOverlay.classList.remove("countdown-overlay--split");

  for (const value of ["3", "2", "1"]) {
    setCountdownValue(value);
    await sleep(820);
  }

  countdownOverlay.classList.remove("countdown-overlay--tick");
  countdownOverlay.classList.add("countdown-overlay--split");
  await sleep(720);
  countdownOverlay.hidden = true;
}

function lockPhonePortraitOrientation() {
  const isPhoneLandscape = window.matchMedia("(orientation: landscape) and (max-height: 560px) and (pointer: coarse)").matches;
  if (!isPhoneLandscape || !screen.orientation?.lock) return;
  screen.orientation.lock("portrait").catch(() => {});
}

async function startGame() {
  if (state.game.countdownActive) return;
  lockPhonePortraitOrientation();
  state.game.countdownActive = true;
  cancelAnimationFrame(state.game.animationFrame);
  resetGame(false);
  setGamePanel("play");
  startGameButton?.blur();
  drawGame();
  await preloadRaceAssets();
  await preloadSelectedRacerImages();
  await playRaceCountdown();
  state.game.countdownActive = false;
  state.game.running = true;
  state.game.lastTime = performance.now();
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
  setPauseButtonState(true);
  cancelAnimationFrame(game.animationFrame);
  playRaceButton?.focus({ preventScroll: true });
}

function resumeGame() {
  const game = state.game;
  if (!game.running || !game.paused) return;
  game.paused = false;
  game.lastTime = performance.now();
  setPauseButtonState(false);
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
  game.countdownActive = false;
  game.holdingLeft = false;
  game.holdingRight = false;
  game.keys.clear();
  cancelAnimationFrame(game.animationFrame);
  if (countdownOverlay) countdownOverlay.hidden = true;
  setPauseButtonState(false);
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

function drawKart(x, y, width, height, racer, options = {}) {
  const rotation = options.rotation || 0;
  const scale = options.scale || 1;
  const asset = getAssetImage(racer.gameImage);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);

  if (asset?.complete && asset.naturalWidth > 0) {
    ctx.drawImage(asset, -width / 2, -height / 2, width, height);
    ctx.restore();
    return;
  }

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
  const rotation = obstacle.rotation || 0;
  if (asset?.complete && asset.naturalWidth > 0) {
    ctx.save();
    ctx.translate(obstacle.x, obstacle.y);
    ctx.rotate(rotation);
    ctx.drawImage(asset, -obstacle.size / 2, -obstacle.size / 2, obstacle.size, obstacle.size);
    ctx.restore();
    return;
  }

  ctx.save();
  ctx.translate(obstacle.x, obstacle.y);
  ctx.rotate(rotation);
  ctx.fillStyle = obstacle.color;
  ctx.strokeStyle = "rgba(0,0,0,0.25)";
  ctx.lineWidth = 4;

  if (obstacle.type === "oil") {
    ctx.scale(1.35, 0.62);
    ctx.beginPath();
    ctx.arc(0, 0, obstacle.size * 0.36, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.22)";
    ctx.beginPath();
    ctx.arc(-obstacle.size * 0.1, -obstacle.size * 0.08, obstacle.size * 0.12, 0, Math.PI * 2);
    ctx.fill();
  } else if (obstacle.type === "cone") {
    ctx.beginPath();
    ctx.moveTo(0, -obstacle.size * 0.46);
    ctx.lineTo(obstacle.size * 0.32, obstacle.size * 0.32);
    ctx.lineTo(-obstacle.size * 0.32, obstacle.size * 0.32);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#f9f7ef";
    ctx.fillRect(-obstacle.size * 0.18, obstacle.size * 0.03, obstacle.size * 0.36, obstacle.size * 0.09);
  } else if (obstacle.type === "jump") {
    ctx.fillStyle = "#8bd3ff";
    roundRect(-obstacle.size * 0.48, -obstacle.size * 0.24, obstacle.size * 0.96, obstacle.size * 0.48, 8);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#f9f7ef";
    ctx.beginPath();
    ctx.moveTo(-obstacle.size * 0.2, -obstacle.size * 0.14);
    ctx.lineTo(obstacle.size * 0.2, 0);
    ctx.lineTo(-obstacle.size * 0.2, obstacle.size * 0.14);
    ctx.closePath();
    ctx.fill();
  } else {
    roundRect(-obstacle.size / 2, -obstacle.size / 2, obstacle.size, obstacle.size, 8);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fillRect(-obstacle.size * 0.28, -obstacle.size * 0.28, obstacle.size * 0.2, obstacle.size * 0.2);
    ctx.fillRect(obstacle.size * 0.08, obstacle.size * 0.02, obstacle.size * 0.2, obstacle.size * 0.2);
  }
  ctx.restore();
}

function drawCollisionEffect(effect) {
  if (!effect) return;

  const elapsed = performance.now() - effect.startedAt;
  const progress = Math.min(1, elapsed / effect.duration);

  ctx.save();
  ctx.translate(effect.x, effect.y);

  if (effect.type === "crash") {
    const radius = 18 + progress * 54;
    ctx.globalAlpha = 1 - progress;
    ctx.strokeStyle = "#f57d2a";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#f2b93b";
    for (let index = 0; index < 8; index += 1) {
      const angle = (Math.PI * 2 * index) / 8;
      const distance = progress * 56;
      ctx.fillRect(Math.cos(angle) * distance - 4, Math.sin(angle) * distance - 4, 8, 8);
    }
  } else if (effect.type === "spin") {
    ctx.globalAlpha = 1 - progress * 0.4;
    ctx.strokeStyle = "#1d2528";
    ctx.lineWidth = 5;
    for (let index = 0; index < 3; index += 1) {
      ctx.beginPath();
      ctx.arc(0, 0, 26 + index * 13 + progress * 12, progress * Math.PI * 4, progress * Math.PI * 4 + Math.PI * 1.35);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function drawGame() {
  const { width, height } = canvas;
  const game = state.game;
  const roadX = width * roadLayout.x;
  const roadW = width * roadLayout.width;
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
  const jumpProgress = game.jumpUntil > performance.now() ? 1 - (game.jumpUntil - performance.now()) / 620 : 0;
  const jumpLift = Math.sin(jumpProgress * Math.PI) * height * 0.08;
  const jumpScale = 1 + Math.sin(jumpProgress * Math.PI) * 0.22;
  const collisionProgress = game.collisionEffect
    ? Math.min(1, (performance.now() - game.collisionEffect.startedAt) / game.collisionEffect.duration)
    : 0;
  const spinRotation = game.collisionEffect?.type === "spin" ? collisionProgress * Math.PI * 5 : 0;
  const crashRotation = game.collisionEffect?.type === "crash" ? Math.sin(collisionProgress * Math.PI * 8) * 0.12 : 0;
  drawKart(playerX, playerY - jumpLift, width * kartLayout.width, height * kartLayout.height, racer, {
    rotation: game.steerRotation + spinRotation + crashRotation,
    scale: jumpScale,
  });
  drawCollisionEffect(game.collisionEffect);
}

function chooseObstacleAsset() {
  const totalWeight = obstacleAssets.reduce((sum, asset) => sum + asset.weight, 0);
  let pick = Math.random() * totalWeight;
  return obstacleAssets.find((asset) => {
    pick -= asset.weight;
    return pick <= 0;
  }) || obstacleAssets[0];
}

function spawnObstacle() {
  const { width } = canvas;
  const roadX = width * roadLayout.x;
  const roadW = width * roadLayout.width;
  const lane = Math.floor(Math.random() * 3);
  const laneX = roadX + roadW * (0.2 + lane * 0.3);
  const asset = chooseObstacleAsset();
  const brickColors = asset.colorVariants?.[Math.floor(Math.random() * asset.colorVariants.length)];
  const brickShape = asset.shapes?.[Math.floor(Math.random() * asset.shapes.length)];
  const brickShapeSrc = typeof brickShape === "string" ? brickShape : brickShape?.src;
  const color = brickColors?.base || asset.color;
  const obstacleSize = asset.size || 54 + Math.random() * 18;
  state.game.obstacles.push({
    type: asset.type,
    effect: asset.effect,
    x: laneX,
    y: -obstacleSize,
    size: obstacleSize,
    color,
    image: brickShapeSrc && brickColors ? getCachedTintedSvgSrc(brickShapeSrc, brickColors) || brickShapeSrc : asset.image,
    hitboxWidth: brickShape?.hitboxWidth || asset.hitboxWidth || 0.58,
    hitboxHeight: brickShape?.hitboxHeight || asset.hitboxHeight || 0.58,
    rotation: asset.type === "brick" ? Math.random() * Math.PI : 0,
    hit: false,
  });
}

function rectanglesOverlap(a, b) {
  return (
    Math.abs(a.x - b.x) * 2 < a.width + b.width &&
    Math.abs(a.y - b.y) * 2 < a.height + b.height
  );
}

function startCollisionEffect(type, x, y) {
  state.game.collisionEffect = {
    type,
    x,
    y,
    startedAt: performance.now(),
    duration: type === "spin" ? 760 : 560,
  };
}

function handleObstacleHit(obstacle, playerBox, now) {
  obstacle.hit = true;

  if (obstacle.effect === "spin") {
    startCollisionEffect("spin", playerBox.x, playerBox.y);
    return;
  }

  if (obstacle.effect === "crash") {
    startCollisionEffect("crash", obstacle.x, obstacle.y);
    return;
  }

  if (obstacle.effect === "slow") {
    state.game.slowUntil = now + 1350;
    obstacle.knocked = true;
    obstacle.vx = obstacle.x < playerBox.x ? -220 : 220;
    obstacle.rotationSpeed = obstacle.vx * 0.012;
    return;
  }

  if (obstacle.effect === "jump") {
    state.game.jumpUntil = now + 620;
    state.game.speedBoostUntil = now + 1400;
  }
}

function updateGame(now) {
  const game = state.game;
  if (!game.running || game.paused) return;

  const delta = Math.min((now - game.lastTime) / 1000, 0.04);
  game.lastTime = now;

  if (game.collisionEffect) {
    drawGame();
    if (now - game.collisionEffect.startedAt >= game.collisionEffect.duration) {
      endGame();
      return;
    }
    game.animationFrame = requestAnimationFrame(updateGame);
    return;
  }

  const speedMultiplier = (game.slowUntil > now ? 0.58 : 1) * (game.speedBoostUntil > now ? 1.38 : 1);
  game.speed += delta * 0.11;
  const effectiveSpeed = game.speed * speedMultiplier;
  game.distance += delta * effectiveSpeed * 13;
  game.roadOffset += delta * effectiveSpeed * 78;

  const buttonDirection = Number(game.holdingRight || game.keys.has("ArrowRight")) - Number(game.holdingLeft || game.keys.has("ArrowLeft"));
  const tiltDirection = Math.max(-1, Math.min(1, game.tilt / 18));
  const direction = state.controlMode === "tilt" ? tiltDirection : buttonDirection;
  const activeSteerDirection = Math.abs(direction) > 0.05 ? direction : 0;
  const targetSteerRotation = activeSteerDirection * (Math.PI / 12);
  game.steerRotation += (targetSteerRotation - game.steerRotation) * Math.min(1, delta * 14);
  game.targetX = Math.max(0.08, Math.min(0.92, game.targetX + direction * delta * 1.35));
  game.playerX += (game.targetX - game.playerX) * Math.min(1, delta * 16);

  game.spawnTimer -= delta;
  if (game.spawnTimer <= 0) {
    spawnObstacle();
    game.spawnTimer = Math.max(0.58, 1.15 - game.speed * 0.06);
  }

  game.obstacles.forEach((obstacle) => {
    obstacle.y += delta * effectiveSpeed * 112;
    if (obstacle.knocked) {
      obstacle.x += obstacle.vx * delta;
      obstacle.rotation += obstacle.rotationSpeed * delta;
    }
  });
  game.obstacles = game.obstacles.filter((obstacle) => obstacle.y < canvas.height + 80);

  const playerBox = {
    x: canvas.width * (roadLayout.x + game.playerX * roadLayout.width),
    y: canvas.height * 0.89,
    width: canvas.width * kartLayout.hitboxWidth,
    height: canvas.height * kartLayout.hitboxHeight,
  };
  const hitObstacle = game.obstacles.find((obstacle) =>
    !obstacle.hit && rectanglesOverlap(playerBox, {
      x: obstacle.x,
      y: obstacle.y,
      width: obstacle.size * obstacle.hitboxWidth,
      height: obstacle.size * obstacle.hitboxHeight,
    }),
  );

  distanceText.textContent = `${Math.round(game.distance)} m`;
  bestText.textContent = `${Math.round(Math.max(game.best, game.distance))} m`;
  drawGame();

  if (hitObstacle) {
    handleObstacleHit(hitObstacle, playerBox, now);
    drawGame();
    if (game.collisionEffect) {
      game.animationFrame = requestAnimationFrame(updateGame);
      return;
    }
  }

  game.animationFrame = requestAnimationFrame(updateGame);
}

function bindHold(button, property) {
  const set = (value) => {
    state.game[property] = value;
  };
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.setPointerCapture?.(event.pointerId);
    set(true);
  });
  button.addEventListener("pointerup", () => set(false));
  button.addEventListener("pointercancel", () => set(false));
  button.addEventListener("pointerleave", () => set(false));
  button.addEventListener("selectstart", (event) => event.preventDefault());
  button.addEventListener("contextmenu", (event) => event.preventDefault());
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
  replaceCurrentRacerUrl(state.selectedIndex);
  preloadSelectedRacerImages();
  renderRacers();
  renderCarousel(true);
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
playButtonsMode?.addEventListener("click", () => setControlMode("buttons"));
playTiltMode?.addEventListener("click", async () => {
  const permission = await requestTiltPermission();
  if (permission === "granted") {
    setControlMode("tilt");
  }
});

startGameButton?.addEventListener("click", startGame);
pauseGameButton?.addEventListener("click", togglePause);
playRaceButton?.addEventListener("click", resumeGame);
restartRaceButton?.addEventListener("click", startGame);
changeRaceCarButton?.addEventListener("click", returnToGameMenu);
retryGame?.addEventListener("click", startGame);
chooseKart?.addEventListener("click", () => {
  renderCarousel(false);
  setGamePanel("start");
  focusFirstMenuOption();
});
popularityButton?.addEventListener("click", openPopularityModal);
playPopularityButton?.addEventListener("click", openPopularityModal);
closePopularity?.addEventListener("click", closePopularityModal);
popularityModal?.addEventListener("click", (event) => {
  if (event.target === popularityModal) {
    closePopularityModal();
  }
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

  if (playPanel?.classList.contains("game-panel--active") && state.game.paused) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(
        [playRaceButton, restartRaceButton, changeRaceCarButton, playButtonsMode, playTiltMode],
        event.key === "ArrowDown" ? 1 : -1,
      );
      return true;
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
  if (event.key === "Escape" && popularityModal && !popularityModal.hidden) {
    closePopularityModal();
    return;
  }
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

window.addEventListener("resize", () => updateCarouselPosition(false));

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
  replaceCurrentRacerUrl(state.selectedIndex);
  preloadRaceAssets();
  preloadSelectedRacerImages();
  renderCarousel(false);
  setControlMode("buttons");
  drawGame();
  focusFirstMenuOption();
}
