// Game Data
const gameData = {
  characters: [
    {
      name: "Adam Shepherd",
      family: "Shepherd",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Gray",
      image: "adam"
    },
    {
      name: "Alex Shepherd",
      family: "Shepherd",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Brown",
      image: "alex"
    },
    {
      name: "Alessa Gillespie",
      family: "Gillespie",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "alessa"
    },
    {
      name: "Angela Orosco",
      family: "Orosco",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "angela"
    },
    {
      name: "Cynthia Velasquez",
      family: "Velasquez",
      gender: "Female",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Black",
      image: "cynthia"
    },
    {
      name: "Cybil Bennett",
      family: "Bennett",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Brahms",
      hairColor: "Blonde",
      image: "cybil"
    },
    {
      name: "Curtis Ackers",
      family: "Ackers",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Gray",
      image: "curtis"
    },
    {
      name: "Dahlia Gillespie",
      family: "Gillespie",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Black",
      image: "dahlia"
    },
    {
      name: "Douglas Cartland",
      family: "Cartland",
      gender: "Male",
      firstAppearance: "Silent Hill 3",
      hometown: "Ashfield",
      hairColor: "Gray",
      image: "douglas"
    },
    {
      name: "Eileen Galvin",
      family: "Galvin",
      gender: "Female",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Brown",
      image: "eileen"
    },
    {
      name: "Eddie Dombrowski",
      family: "Dombrowski",
      gender: "Male",
      firstAppearance: "Silent Hill 2",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "eddie"
    },
    {
      name: "Henry Townshend",
      family: "Townshend",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Brown",
      image: "henry"
    },
    {
      name: "Heather Mason",
      family: "Mason",
      gender: "Female",
      firstAppearance: "Silent Hill 3",
      hometown: "Portland",
      hairColor: "Blonde",
      image: "heather"
    },
    {
      name: "Harry Mason",
      family: "Mason",
      gender: "Male",
      firstAppearance: "Silent Hill",
      hometown: "Unknown",
      hairColor: "Brown",
      image: "harry"
    },
    {
      name: "James Sunderland",
      family: "Sunderland",
      gender: "Male",
      firstAppearance: "Silent Hill 2",
      hometown: "Ashfield",
      hairColor: "Blonde",
      image: "james"
    },
    {
      name: "Laura",
      family: "Unknown",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "laura"
    },
    {
      name: "Lisa Garland",
      family: "Garland",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Red",
      image: "lisa"
    },
    {
      name: "Maria",
      family: "Unknown",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "maria"
    },
    {
      name: "Mary Shepherd-Sunderland",
      family: "Shepherd-Sunderland",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "mary"
    },
    {
      name: "Murphy Pendleton",
      family: "Pendleton",
      gender: "Male",
      firstAppearance: "Silent Hill: Downpour",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "murphy"
    },
    {
      name: "Nurse Lisa",
      family: "Unknown",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Red",
      image: "nurse_lisa"
    },
    {
      name: "Pyramid Head",
      family: "Unknown",
      gender: "Male",
      firstAppearance: "Silent Hill 2",
      hometown: "Silent Hill",
      hairColor: "Unspecified",
      image: "pyramid_head"
    },
    {
      name: "Robbie the Rabbit",
      family: "Rabbit",
      gender: "Unspecified",
      firstAppearance: "Silent Hill 3",
      hometown: "Silent Hill",
      hairColor: "Unspecified",
      image: "robbie"
    },
    {
      name: "Rose Da Silva",
      family: "Da Silva",
      gender: "Female",
      firstAppearance: "Silent Hill (Movie)",
      hometown: "Brahms",
      hairColor: "Brown",
      image: "rose"
    },
    {
      name: "Samara",
      family: "Unknown",
      gender: "Female",
      firstAppearance: "Silent Hill (Fan Theory)",
      hometown: "Unknown",
      hairColor: "Black",
      image: "samara"
    },
    {
      name: "Travis Grady",
      family: "Grady",
      gender: "Male",
      firstAppearance: "Silent Hill: Origins",
      hometown: "Brahms",
      hairColor: "Brown",
      image: "travis"
    },
    {
      name: "Vincent Smith",
      family: "Smith",
      gender: "Male",
      firstAppearance: "Silent Hill 3",
      hometown: "Unknown",
      hairColor: "Brown",
      image: "vincent"
    },
    {
      name: "Walter Sullivan",
      family: "Sullivan",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Blonde",
      image: "walter"
    },
    {
      name: "Cheryl Mason",
      family: "Mason",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "cheryl"
    },
    {
      name: "Claudia Wolf",
      family: "Wolf",
      gender: "Female",
      firstAppearance: "Silent Hill 3",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "claudia"
    },
    {
      name: "Harry Mason (Reimagining)",
      family: "Mason",
      gender: "Male",
      firstAppearance: "Silent Hill: Shattered Memories",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "harry_re"
    },
    {
      name: "Heather Mason (Reimagining)",
      family: "Mason",
      gender: "Female",
      firstAppearance: "Silent Hill: Shattered Memories",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "heather_re"
    },
    {
      name: "James Sunderland (Reimagining)",
      family: "Sunderland",
      gender: "Male",
      firstAppearance: "Silent Hill 2 Remake",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "james_re"
    },
    {
      name: "Lisa Garland (Reimagining)",
      family: "Garland",
      gender: "Female",
      firstAppearance: "Silent Hill (Reimagining)",
      hometown: "Silent Hill",
      hairColor: "Red",
      image: "lisa_re"
    }
  ],
  monsters: [
    {
      name: "Pyramid Head",
      image: "pyramid_head",
      firstAppearance: "Silent Hill 2"
    },
    {
      name: "Nurse",
      image: "nurse",
      firstAppearance: "Silent Hill"
    },
    {
      name: "Bubble Head Nurse",
      image: "bubble_head_nurse",
      firstAppearance: "Silent Hill 2"
    },
    {
      name: "Lying Figure",
      image: "lying_figure",
      firstAppearance: "Silent Hill 2"
    },
    {
      name: "Grey Child",
      image: "grey_child",
      firstAppearance: "Silent Hill"
    },
    {
      name: "Twin Victim",
      image: "twin_victim",
      firstAppearance: "Silent Hill 4: The Room"
    },
    {
      name: "Abstract Daddy",
      image: "abstract_daddy",
      firstAppearance: "Silent Hill 2"
    },
    {
      name: "Robbie the Rabbit",
      image: "robbie",
      firstAppearance: "Silent Hill 3"
    },
    {
      name: "Needler",
      image: "needler",
      firstAppearance: "Silent Hill: Homecoming"
    },
    {
      name: "Patient Demon",
      image: "patient_demon",
      firstAppearance: "Silent Hill 3"
    },
    {
      name: "Mandarin",
      image: "mandarin",
      firstAppearance: "Silent Hill 2"
    },
    {
      name: "Scraper",
      image: "scraper",
      firstAppearance: "Silent Hill 3"
    },
    {
      name: "Smog",
      image: "smog",
      firstAppearance: "Silent Hill: Homecoming"
    },
    {
      name: "Straightjacket",
      image: "straightjacket",
      firstAppearance: "Silent Hill"
    },
    {
      name: "Wall Man",
      image: "wall_man",
      firstAppearance: "Silent Hill 4: The Room"
    },
    {
      name: "Memory of Alessa",
      image: "memory_of_alessa",
      firstAppearance: "Silent Hill 3"
    },
    {
      name: "Dark Nurse",
      image: "dark_nurse",
      firstAppearance: "Silent Hill 3"
    },
    {
      name: "Robbie (Bloody)",
      image: "robbie_bloody",
      firstAppearance: "Silent Hill 4: The Room"
    },
    {
      name: "Groaner",
      image: "groaner",
      firstAppearance: "Silent Hill"
    },
    {
      name: "Closer",
      image: "closer",
      firstAppearance: "Silent Hill 3"
    }
  ],
  musics: [
    { name: "Theme of Laura", game: "Silent Hill 2", file: "theme_of_laura", duration: 25 },
    { name: "Promise", game: "Silent Hill 2", file: "promise", duration: 25 },
    { name: "You're Not Here", game: "Silent Hill 3", file: "youre_not_here", duration: 25 },
    { name: "Room of Angel", game: "Silent Hill 4: The Room", file: "room_of_angel", duration: 25 },
    { name: "Lost Carol", game: "Silent Hill 3", file: "lost_carol", duration: 25 },
    { name: "Hell Frozen Rain", game: "Silent Hill: Shattered Memories", file: "hell_frozen_rain", duration: 25 },
    { name: "Acceptance", game: "Silent Hill: Downpour", file: "acceptance", duration: 25 },
    { name: "Alex Theme", game: "Silent Hill: Homecoming", file: "alex_theme", duration: 25 },
    { name: "Letter from the Lost Days", game: "Silent Hill 3", file: "letter_from_the_lost_days", duration: 25 },
    { name: "One More Soul to the Call", game: "Silent Hill: Homecoming", file: "one_more_soul_to_the_call", duration: 25 },
    { name: "Tender Sugar", game: "Silent Hill 4: The Room", file: "tender_sugar", duration: 25 },
    { name: "Shot Down in Flames", game: "Silent Hill: Homecoming", file: "shot_down_in_flames", duration: 25 },
    { name: "Hometown", game: "Silent Hill 3", file: "hometown", duration: 25 },
    { name: "I Want Love", game: "Silent Hill 3", file: "i_want_love", duration: 25 },
    { name: "Cradle of Forest", game: "Silent Hill 4: The Room", file: "cradle_of_forest", duration: 25 },
    { name: "Your Rain", game: "Silent Hill 4: The Room", file: "your_rain", duration: 25 },
    { name: "Shattered Memories Theme", game: "Silent Hill: Shattered Memories", file: "shattered_memories_theme", duration: 25 },
    { name: "Shepherd's Glen", game: "Silent Hill: Homecoming", file: "shepherds_glen", duration: 25 },
    { name: "Melancholy", game: "Silent Hill 2", file: "melancholy", duration: 25 },
    { name: "Ashes and Ghost", game: "Silent Hill 2", file: "ashes_and_ghost", duration: 25 }
  ]
};

const translations = {
  en: {
    menuTitle: "Select Game Mode",
    characters: "Characters",
    monsters: "Monsters",
    musics: "Musics",
    placeholder: "Type or select a character",
    monsterPlaceholder: "Guess the monster's name",
    musicPlaceholder: "Guess the music name",
    submit: "Submit Guess",
    labels: ["Name", "Family", "Gender", "First Appearance", "Hometown", "Hair Color"],
    monsterHint: "First appeared in: ",
    success: "Congratulations! You guessed right!",
    failure: "Game Over! The correct answer was: ",
    attempts: "Attempts left: ",
    modeDescription: {
      characters: "Guess the character in up to 5 attempts.",
      monsters: "Find out which monster it is in up to 5 attempts. The image gets clearer each time you guess.",
      musics: "Guess the song with increasingly longer clips."
    },
    backToMenu: "Back to Menu",
    dailyMessage: "Answers are updated daily.",
    timer: "Update in: ",
    playClip: "Play Clip",
    fromGame: "From game: ",
    audioError: "Could not play audio",
    listenFull: "Listen to full version:",
    record: "Record",
    stats: {
      players: " players today | ",
      correct: " correct answers (",
      percentage: "%)"
    },
    attributes: {
      "Blonde": "Blonde",
      "Brown": "Brown",
      "Male": "Male",
      "Female": "Female",
      "Silent Hill": "Silent Hill",
      "Unspecified": "Unspecified",
      "Black": "Black",
      "Gray": "Gray"
    },
    invalidGuess: "Invalid guess! Try again."
  },
  pt: {
    menuTitle: "Selecione o Modo",
    characters: "Personagens",
    monsters: "Monstros",
    musics: "Músicas",
    placeholder: "Digite ou selecione um personagem",
    monsterPlaceholder: "Adivinhe o nome do monstro",
    musicPlaceholder: "Adivinhe o nome da música",
    submit: "Enviar Palpite",
    labels: ["Nome", "Familia", "Gênero", "Primeira Aparição", "Cidade Natal", "Cor do Cabelo"],
    monsterHint: "Primeira aparição: ",
    success: "Parabéns! Você acertou!",
    failure: "Fim de jogo! A resposta era: ",
    attempts: "Tentativas restantes: ",
    modeDescription: {
      characters: "Adivinhe o personagem em até 5 tentativas.",
      monsters: "Descubra qual monstro é em até 5 tentativas. A imagem fica mais nítida a cada palpite.",
      musics: "Adivinhe a música com trechos cada vez maiores."
    },
    backToMenu: "Voltar ao Menu",
    dailyMessage: "As respostas são atualizadas diariamente.",
    timer: "Atualiza em: ",
    playClip: "Tocar Trecho",
    fromGame: "Do jogo: ",
    audioError: "Não foi possível reproduzir o áudio",
    listenFull: "Ouça a versão completa:",
    record: "Recorde",
    stats: {
      players: " jogadores hoje | ",
      correct: " acertos (",
      percentage: "%)"
    },
    attributes: {
      "Blonde": "Loiro",
      "Brown": "Marrom",
      "Male": "Masculino",
      "Female": "Feminino",
      "Silent Hill": "Silent Hill",
      "Unspecified": "Não especificado",
      "Black": "Preto",
      "Gray": "Cinza"
    },
    invalidGuess: "Palpite inválido! Tente novamente."
  }
};

// Helper para traduzir atributos
function translateAttribute(value) {
  return translations[currentLang].attributes[value] || value;
}

// Game State
let currentLang = 'pt';
let attempts = 0;
let answer;
let currentGameMode = '';
let currentClipDuration = 5;
let maxClipDuration = 0;
let stats = getDailyStats();
let timerInterval;

let gameOver = false;
let revealedAnswer = false;
let playerWon = false;

let audioContext;
let startTime;
let clipInterval;
let audioElement = null;

let winStreak = 0;
let lastPlayDate = null;
const STREAK_TIMEOUT = 24 * 60 * 60 * 1000; // 1 dia em ms

const TEST_MODE = false; // true = 2 minutos
function getResetInterval() {
  return TEST_MODE ? 2 * 60 * 1000 : 24 * 60 * 60 * 1000;
}

// DOM Elements
const elements = {
  menu: document.getElementById("menu"),
  game: document.getElementById("game"),
  guessInput: document.getElementById("guess-input"),
  submitButton: document.getElementById("submit-button"),
  results: document.getElementById("results"),
  characterImage: document.getElementById("character-image-container"),
  attemptsCounter: document.getElementById("attempts-counter"),
  modeDescription: document.getElementById("mode-description"),
  timer: document.getElementById("timer"),
  statsPlayers: document.getElementById("stats-players"),
  statsCorrect: document.getElementById("stats-correct"),
  statsPercentage: document.getElementById("stats-percentage"),
  dailyMessage: document.getElementById("daily-message"),
  backButton: document.getElementById("back-button"),
  charactersBtn: document.getElementById("characters-btn"),
  monstersBtn: document.getElementById("monsters-btn"),
  musicBtn: document.getElementById("music-btn"),
  menuTitle: document.getElementById("menu-title"),
  datalist: document.getElementById("characters"),
  playMusicBtn: document.getElementById("play-music-btn"),
  currentTime: document.getElementById("current-time"),
  maxTime: document.getElementById("max-time")
};

// Initialize Game
function initGame() {
  setLanguage(currentLang);
  loadWinStreak();
  updateStats();
  setupEventListeners();
  preloadImages();

  const now = new Date();
  const lastReset = localStorage.getItem('lastResetTime');
  const resetInterval = getResetInterval();

  if (!lastReset || (now - new Date(lastReset)) >= resetInterval) {
    forceDailyReset();
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);

  const audio = document.getElementById('success-sound');
  audio.load();
  audio.volume = 0;
}

// Language System
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  if (elements.menuTitle) elements.menuTitle.textContent = t.menuTitle;
  if (elements.charactersBtn) elements.charactersBtn.querySelector('.blood-text').textContent = t.characters;
  if (elements.monstersBtn) elements.monstersBtn.querySelector('.blood-text').textContent = t.monsters;
  if (elements.musicBtn) elements.musicBtn.querySelector('.blood-text').textContent = t.musics;
  if (elements.dailyMessage) elements.dailyMessage.textContent = t.dailyMessage;
  if (elements.backButton) elements.backButton.querySelector('.blood-text').textContent = t.backToMenu;
  if (elements.playMusicBtn) elements.playMusicBtn.querySelector('.blood-text').textContent = `${t.playClip} (${currentClipDuration}s)`;

  if (elements.guessInput) {
    elements.guessInput.placeholder =
      currentGameMode === 'monsters'
        ? t.monsterPlaceholder
        : currentGameMode === 'musics'
          ? t.musicPlaceholder
          : t.placeholder;
    elements.submitButton.querySelector('.blood-text').textContent = t.submit;
  }

  updateUI();
  updateStreakDisplay();
}

// Game Modes
function startGame(gameMode) {
  clearGameUI();
  currentGameMode = gameMode;

  const alreadyPlayed = loadGameState(gameMode);

  if (alreadyPlayed && revealedAnswer) {
    showRevealedState();
    return;
  }

  revealedAnswer = false;
  gameOver = false;
  playerWon = false;
  attempts = 0;

  answer = getDailyAnswer();

  if (gameMode === 'musics') {
    currentClipDuration = 5;
    maxClipDuration = answer.duration;
    loadMusicClip();
  }

  setupGameScreen();
  updateUI();
}

function showRevealedState() {
  elements.menu.style.display = "none";
  elements.game.style.display = "block";

  elements.guessInput.style.display = "none";
  elements.submitButton.style.display = "none";

  showCharacterImage();

  const t = translations[currentLang];

  if (playerWon) {
    showMessage(t.success, "success");
  } else {
    showMessage(`${t.failure} ${answer.name}`, "error");
  }

  if (currentGameMode === 'musics') {
    showMusicResult(answer, playerWon);
  }
}

function getDailyAnswer() {
  let dailyAnswers = JSON.parse(localStorage.getItem('dailyAnswers'));
  const now = new Date();
  const lastReset = localStorage.getItem('lastResetTime');
  const resetInterval = getResetInterval();

  if (!dailyAnswers || !lastReset || (now - new Date(lastReset)) >= resetInterval) {
    generateNewDailyAnswers();
    dailyAnswers = JSON.parse(localStorage.getItem('dailyAnswers'));
    localStorage.setItem('lastResetTime', now.toISOString());
  }

  if (currentGameMode === 'characters') return dailyAnswers.characters;
  if (currentGameMode === 'monsters') return dailyAnswers.monsters;
  if (currentGameMode === 'musics') return dailyAnswers.musics;
  return null;
}

function generateNewDailyAnswers() {
  const now = new Date();
  const resetInterval = getResetInterval();
  const periodsSinceEpoch = Math.floor(now.getTime() / resetInterval);

  const dailyAnswers = {
    characters: gameData.characters[periodsSinceEpoch % gameData.characters.length],
    monsters: gameData.monsters[periodsSinceEpoch % gameData.monsters.length],
    musics: gameData.musics[periodsSinceEpoch % gameData.musics.length]
  };

  localStorage.setItem('dailyAnswers', JSON.stringify(dailyAnswers));
}

function getRandomAnswer(mode, seed) {
  const collection = gameData[
    mode === 'characters' ? 'characters' :
    mode === 'monsters' ? 'monsters' :
    'musics'
  ];
  const index = seed % collection.length;
  return collection[index];
}

// Setup Game Screen
function setupGameScreen() {
  elements.menu.style.display = "none";
  elements.game.style.display = "block";

  clearGameUI();

  if (currentGameMode === 'musics') {
    document.getElementById('music-player-container').style.display = 'block';
    elements.guessInput.placeholder = translations[currentLang].musicPlaceholder;
  } else {
    document.getElementById('music-player-container').style.display = 'none';
  }

  createDatalistOptions();

  if (currentGameMode === 'monsters') {
    const imageContainer = document.createElement("div");
    imageContainer.id = "pixelated-image";
    elements.characterImage.appendChild(imageContainer);
    updateMonsterImage();
  }

  const youtubeContainer = document.querySelector('.youtube-container');
  if (youtubeContainer) youtubeContainer.remove();

  showInputControls();
}

function backToMenu() {
  clearInterval(clipInterval);
  saveGameState();
  clearSuccessMessage();

  elements.game.style.display = "none";
  elements.menu.style.display = "block";
  elements.results.innerHTML = '';
  elements.characterImage.innerHTML = '';
  elements.guessInput.value = '';

  gameOver = false;
  revealedAnswer = false;
  playerWon = false;
  attempts = 0;

  const youtubeContainer = document.querySelector('.youtube-container');
  if (youtubeContainer) youtubeContainer.remove();

  const inputContainer = document.querySelector('.input-container');
  if (inputContainer) inputContainer.style.display = 'flex';

  document.getElementById('music-player-container').style.display = 'none';
}

// Datalist Options
function createDatalistOptions() {
  elements.datalist.innerHTML = "";
  let options = [];

  if (currentGameMode === 'characters') {
    options = gameData.characters.map(char => char.name);
  } else if (currentGameMode === 'monsters') {
    options = gameData.monsters.map(monster => monster.name);
  } else if (currentGameMode === 'musics') {
    options = gameData.musics.map(music => music.name);
  }

  options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    elements.datalist.appendChild(opt);
  });
}

// Game Logic
function submitGuess() {
  if (gameOver || revealedAnswer) return;

  const guessName = elements.guessInput.value.trim().toLowerCase();
  if (!guessName) return;

  let guess;
  if (currentGameMode === 'characters') {
    guess = gameData.characters.find(char => char.name.toLowerCase() === guessName);
  } else if (currentGameMode === 'monsters') {
    guess = gameData.monsters.find(monster => monster.name.toLowerCase() === guessName);
  } else if (currentGameMode === 'musics') {
    guess = gameData.musics.find(music => music.name.toLowerCase() === guessName);
  }

  if (!guess) {
    showMessage(translations[currentLang].invalidGuess, "error");
    if (elements.guessInput) {
      elements.guessInput.classList.add('input-error');
      setTimeout(() => {
        elements.guessInput.classList.remove('input-error');
      }, 300);
    }
    return;
  }

  attempts++;
  elements.guessInput.value = '';

  if (currentGameMode === 'musics' && currentClipDuration < maxClipDuration) {
    currentClipDuration = Math.min(currentClipDuration + 5, maxClipDuration);
    elements.playMusicBtn.querySelector('.blood-text').textContent =
      `${translations[currentLang].playClip} (${currentClipDuration}s)`;
  }

  if (currentGameMode === 'characters') {
    checkCharacterGuess(guess);
  } else if (currentGameMode === 'monsters') {
    checkMonsterGuess(guess);
  } else if (currentGameMode === 'musics') {
    checkMusicGuess(guess);
  }

  updateUI();
}

// Character Mode – layout B (labels + quadrados)
function checkCharacterGuess(guess) {
  createResultRow(guess);

  if (guess.name === answer.name) {
    endGame(true);
  } else if (attempts >= 5) {
    endGame(false);
  }
}

function createResultRow(guess) {
  const row = document.createElement("div");
  row.className = "result-row";

  const attrs = [
    { label: translations[currentLang].labels[0], key: "name" },
    { label: translations[currentLang].labels[1], key: "family" },
    { label: translations[currentLang].labels[2], key: "gender" },
    { label: translations[currentLang].labels[3], key: "firstAppearance" },
    { label: translations[currentLang].labels[4], key: "hometown" },
    { label: translations[currentLang].labels[5], key: "hairColor" }
  ];

  attrs.forEach(attr => {
    const container = document.createElement("div");
    container.className = "attribute-container";

    const label = document.createElement("div");
    label.className = "attribute-label";
    label.textContent = attr.label;

    const box = document.createElement("div");
    box.className = "attribute-box";

    const guessValue = guess[attr.key];
    const answerValue = answer[attr.key];
    const isCorrect = (guessValue === answerValue);

    box.textContent = translateAttribute(guessValue);
    box.classList.add(isCorrect ? "correct" : "incorrect");

    container.appendChild(label);
    container.appendChild(box);
    row.appendChild(container);
  });

  elements.results.appendChild(row);

  if (!gameOver && attempts < 5) {
    const separator = document.createElement("div");
    separator.className = "guess-separator";
    elements.results.appendChild(separator);
  }
}

// Monster Mode
function checkMonsterGuess(guess) {
  const container = document.getElementById("pixelated-image");
  if (!container) return;

  if (guess.name === answer.name) {
    endGame(true);
    container.style.filter = "none";
  } else {
    updateMonsterImage();
    checkMonsterGameEnd();
  }
}

function updateMonsterImage() {
  const container = document.getElementById("pixelated-image");
  if (!container || !answer) return;

  const imagePath = `assets/monsters/${answer.image}.webp`;
  container.style.backgroundImage = `url('${imagePath}')`;
  container.style.backgroundSize = "cover";
  container.style.width = "260px";
  container.style.height = "260px";
  container.style.borderRadius = "12px";
  container.style.margin = "0 auto";

  const pixelation = Math.max(0, 0.8 - (attempts * 0.2));
  container.style.filter = `blur(${pixelation * 10}px)`;
}

function checkMonsterGameEnd() {
  if (attempts >= 5) {
    endGame(false);
    const container = document.getElementById("pixelated-image");
    if (container) container.style.filter = "none";

    if (answer.firstAppearance) {
      showMessage(`${translations[currentLang].monsterHint}${answer.firstAppearance}`, "hint");
    }
  }
}

// End Game
function endGame(isWin) {
  gameOver = true;
  revealedAnswer = true;
  playerWon = isWin;
  const t = translations[currentLang];

  if (isWin) {
    winStreak++;
    saveWinStreak();
  } else {
    resetWinStreak();
  }

  updateStreakDisplay();
  saveGameState();

  stats.players++;
  if (isWin) stats.correct++;
  saveStats();

  document.querySelector('.input-container').style.display = 'none';

  if (currentGameMode === 'musics') {
    showMusicResult(answer, isWin);
  } else {
    showCharacterImage();
  }

  if (isWin) {
    playSuccessSound();
    showMessage(t.success, "success");
  } else {
    showMessage(`${t.failure} ${answer.name}`, "error");
  }
}

// Music Mode
async function loadMusicClip() {
  if (!answer || !answer.name) return false;

  if (!audioElement) {
    audioElement = new Audio();
  }

  const baseFolder = "assets/musics";

  // Gera automaticamente o nome do arquivo baseado no título real
  // Ex: "Theme of Laura" → "Theme_of_Laura"
  const generatedName =
    answer.name
      .replace(/\s+/g, "_")       // espaços -> _
      .replace(/[^A-Za-z0-9_'\-]/g, ""); // mantém letras, números, _, ', -

  const filePath = `${baseFolder}/${generatedName}.mp3`;

  return new Promise((resolve) => {
    audioElement.src = filePath;
    audioElement.load();

    const onCanPlay = () => {
      elements.maxTime.textContent = answer.duration;
      resolve(true);
    };

    const onError = () => {
      console.error("Erro ao carregar áudio:", filePath);
      showMessage(translations[currentLang].audioError, "error");
      resolve(false);
    };

    audioElement.addEventListener("canplaythrough", onCanPlay, { once: true });
    audioElement.addEventListener("error", onError, { once: true });
  });
}



async function playMusicClip() {
  try {
    const loaded = await loadMusicClip();
    if (!loaded) return;

    if (audioElement.paused) {
      audioElement.currentTime = 0;
      audioElement.play();
      startTime = Date.now();

      clearInterval(clipInterval);
      clipInterval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        elements.currentTime.textContent = Math.min(elapsed.toFixed(1), currentClipDuration);

        if (elapsed >= currentClipDuration) {
          audioElement.pause();
          clearInterval(clipInterval);
        }
      }, 100);
    } else {
      audioElement.pause();
      clearInterval(clipInterval);
    }
  } catch (error) {
    console.error('Erro ao reproduzir trecho:', error);
    showMessage(translations[currentLang].audioError, "error");
  }
}

function checkMusicGuess(guess) {
  if (guess.name === answer.name) {
    endGame(true);
  } else if (attempts >= 5) {
    endGame(false);
  }
}

function showMusicResult(music, isWin) {
  elements.results.innerHTML = "";

  const t = translations[currentLang];

  const msg = document.createElement("div");
  msg.className = `message ${isWin ? "success" : "error"}`;
  msg.textContent = isWin ? t.success : `${t.failure} ${music.name}`;
  elements.results.appendChild(msg);

  const info = document.createElement("div");
  info.className = "music-info";
  info.innerHTML = `
    <p><strong>${music.name}</strong></p>
    <p>${t.fromGame} ${music.game}</p>
  `;
  elements.results.appendChild(info);

  // YouTube embed
  if (music.youtubeId) {
    const yt = document.createElement("iframe");
    yt.width = "320";
    yt.height = "180";
    yt.src = `https://www.youtube.com/embed/${music.youtubeId}`;
    yt.frameBorder = "0";
    yt.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    yt.allowFullscreen = true;

    const box = document.createElement("div");
    box.className = "youtube-container";
    box.style.marginTop = "1rem";
    box.appendChild(yt);

    elements.results.appendChild(box);
  }

  updateStats();
}


// UI
function updateUI() {
  const t = translations[currentLang];
  elements.attemptsCounter.textContent = t.attempts + (5 - attempts);

  if (elements.modeDescription && t.modeDescription) {
    const modeKey = currentGameMode || 'characters';
    elements.modeDescription.textContent = t.modeDescription[modeKey] || '';
  }

  updateTimer();
  updateStats();
}

function updateStats() {
  const t = translations[currentLang].stats;
  const percentage = stats.players > 0
    ? Math.round((stats.correct / stats.players) * 100)
    : 0;

  elements.statsPlayers.textContent = stats.players + t.players;
  elements.statsCorrect.textContent = stats.correct + t.correct;
  elements.statsPercentage.textContent = percentage + t.percentage;
}

function updateTimer() {
  const now = new Date();
  const resetInterval = getResetInterval();

  let lastReset = localStorage.getItem('lastResetTime');
  if (!lastReset) {
    lastReset = now.toISOString();
    localStorage.setItem('lastResetTime', lastReset);
  }

  const nextReset = new Date(new Date(lastReset).getTime() + resetInterval);
  const timeRemaining = nextReset - now;

  const mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  elements.timer.textContent = `${translations[currentLang].timer} ${mins}m ${secs}s`;

  if (timeRemaining <= 0) {
    forceDailyReset();
  }
}

function forceDailyReset() {
  const now = new Date();

  if (lastPlayDate) {
    const timeSinceLastPlay = now - new Date(lastPlayDate);
    if (timeSinceLastPlay > STREAK_TIMEOUT) {
      resetWinStreak();
    }
  }

  localStorage.removeItem('dailyAnswers');
  localStorage.removeItem('lastResetTime');
  localStorage.removeItem('gameState');
  localStorage.removeItem('hilldleStats');
  localStorage.setItem('lastResetTime', now.toISOString());

  generateNewDailyAnswers();

  stats = getDailyStats();

  if (currentGameMode) {
    revealedAnswer = false;
    gameOver = false;
    attempts = 0;
    answer = getDailyAnswer();

    if (currentGameMode === 'musics') {
      currentClipDuration = 5;
      maxClipDuration = answer.duration;
      loadMusicClip();
    }

    clearGameUI();
    setupGameScreen();
    updateUI();
  } else {
    updateStats();
    updateTimer();
  }
}

// Streak
function loadWinStreak() {
  const data = JSON.parse(localStorage.getItem('winStreakData') || '{}');

  if (data.lastPlayDate) {
    const timeSinceLastPlay = Date.now() - new Date(data.lastPlayDate).getTime();
    if (timeSinceLastPlay > STREAK_TIMEOUT) {
      resetWinStreak();
      return;
    }
  }

  winStreak = data.winStreak || 0;
  lastPlayDate = data.lastPlayDate;
  updateStreakDisplay();
}

function saveWinStreak() {
  const previousData = JSON.parse(localStorage.getItem('winStreakData') || '{}');
  const previousMax = previousData.maxStreak || 0;
  const newMax = Math.max(previousMax, winStreak);

  const data = {
    winStreak,
    maxStreak: newMax,
    lastPlayDate: new Date().toISOString()
  };

  localStorage.setItem('winStreakData', JSON.stringify(data));
}

function resetWinStreak() {
  const maxStreak = getMaxStreak();
  localStorage.setItem('winStreakData', JSON.stringify({
    winStreak: 0,
    maxStreak,
    lastPlayDate: null
  }));

  winStreak = 0;
  updateStreakDisplay();
}

function updateStreakDisplay() {
  const streakElement = document.getElementById('streak-counter');
  if (!streakElement) return;

  const t = translations[currentLang];
  const maxStreak = getMaxStreak();

  let streakText = '';

  if (winStreak === 0 && maxStreak === 0) {
    streakText = `${t.record}: 0`;
  } else if (winStreak === 0) {
    streakText = `${t.record}: ${maxStreak}`;
  } else {
    streakText = `${t.record}: ${maxStreak} | Sequência atual: ${winStreak}`;
  }

  streakElement.textContent = streakText;
}

function getMaxStreak() {
  const data = JSON.parse(localStorage.getItem('winStreakData') || '{}');
  return data.maxStreak || 0;
}

// Character / Monster Image – com fallback de formato
function showCharacterImage() {
  if (!answer) return;

  const formats = ['webp', 'png', 'jpg'];
  let currentFormat = 0;

  const img = document.createElement("img");
  img.alt = answer.name;
  img.id = 'revealed-answer-image';

  function tryNextFormat() {
    if (currentFormat >= formats.length) return;

    const folder = currentGameMode === 'monsters' ? 'monsters' : 'characters';
    img.src = `assets/${folder}/${answer.image}.${formats[currentFormat]}`;

    img.onerror = () => {
      currentFormat++;
      tryNextFormat();
    };
  }

  tryNextFormat();

  elements.characterImage.innerHTML = '';
  elements.characterImage.appendChild(img);

  setTimeout(() => {
    const element = document.getElementById('revealed-answer-image');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, 100);
}

// Messages
function showMessage(text, type) {
  // remove só mensagens antigas, não as tentativas
  const oldMessages = elements.results.querySelectorAll('.message');
  oldMessages.forEach(m => m.remove());

  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.textContent = text;
  elements.results.appendChild(msg);
}

function clearSuccessMessage() {
  const successMsg = document.querySelector('.message.success');
  if (successMsg) successMsg.remove();
}

// Success Sound
function playSuccessSound() {
  const audio = document.getElementById('success-sound');
  if (audio) {
    audio.volume = 0.7;
    audio.play().catch(err => console.error("Erro ao reproduzir som de sucesso:", err));
  }
}

// Clear UI
function clearGameUI() {
  elements.results.innerHTML = "";
  elements.characterImage.innerHTML = "";
  elements.guessInput.value = "";
  const imageContainer = document.getElementById("pixelated-image");
  if (imageContainer) imageContainer.remove();
}

// Show Input Controls
function showInputControls() {
  elements.guessInput.style.display = '';
  elements.submitButton.style.display = '';
  document.querySelector('.input-container').style.display = 'flex';

  if (currentGameMode === 'musics') {
    document.getElementById('music-player-container').style.display = 'block';
  }
}

// Stats Storage
function getDailyStats() {
  const today = new Date().toDateString();
  const savedStats = localStorage.getItem('hilldleStats');

  if (savedStats) {
    const parsedStats = JSON.parse(savedStats);
    if (parsedStats.date === today) {
      return parsedStats;
    }
  }

  return {
    date: today,
    players: 0,
    correct: 0
  };
}

function saveStats() {
  localStorage.setItem('hilldleStats', JSON.stringify(stats));
}

function saveGameState() {
  const gameState = JSON.stringify({
    currentGameMode,
    attempts,
    answer,
    gameOver,
    revealedAnswer,
    playerWon,
    stats,
    lastPlayDate,
    winStreak
  });
  localStorage.setItem('gameState', gameState);
}

function loadGameState(gameMode) {
  const savedState = localStorage.getItem('gameState');
  if (!savedState) return false;

  try {
    const state = JSON.parse(savedState);
    if (state.currentGameMode !== gameMode) return false;

    currentGameMode = state.currentGameMode;
    attempts = state.attempts;
    answer = state.answer;
    gameOver = state.gameOver;
    revealedAnswer = state.revealedAnswer;
    playerWon = state.playerWon;
    stats = state.stats || getDailyStats();
    lastPlayDate = state.lastPlayDate || null;
    winStreak = state.winStreak || 0;

    updateStats();
    updateStreakDisplay();
    updateUI();

    return true;
  } catch (e) {
    console.error("Erro ao carregar estado do jogo:", e);
    return false;
  }
}

// Event Listeners
function setupEventListeners() {
  // Botões de modo
  elements.charactersBtn.addEventListener("click", () => startGame('characters'));
  elements.monstersBtn.addEventListener("click", () => startGame('monsters'));
  elements.musicBtn.addEventListener("click", () => startGame('musics'));

  // Voltar
  elements.backButton.addEventListener("click", backToMenu);

  // Input
  elements.submitButton.addEventListener("click", submitGuess);
  elements.guessInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitGuess();
    }
  });

  // Música
  elements.playMusicBtn.addEventListener('click', async () => {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }
      playMusicClip();
    } catch (error) {
      console.error('Erro ao preparar reprodução:', error);
    }
  });

  // Troca de idioma
  const langPt = document.getElementById("lang-pt");
  const langEn = document.getElementById("lang-en");

  if (langPt && langEn) {
    langPt.addEventListener("click", () => {
      currentLang = 'pt';
      langPt.classList.add("active");
      langEn.classList.remove("active");
      setLanguage('pt');
    });

    langEn.addEventListener("click", () => {
      currentLang = 'en';
      langEn.classList.add("active");
      langPt.classList.remove("active");
      setLanguage('en');
    });
  }

    // Clicar no símbolo pulsando volta pro menu
  const titleIcons = document.querySelectorAll('.title-icon');
  titleIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
      backToMenu();
    });
  });
}

// Preload Images
function preloadImages() {
  const characterImages = gameData.characters.map(
    c => `assets/characters/${c.image}.webp`
  );
  const monsterImages = gameData.monsters.map(
    m => `assets/monsters/${m.image}.webp`
  );
  const all = [...characterImages, ...monsterImages];

  all.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', initGame);
