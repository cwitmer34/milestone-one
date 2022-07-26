const ANY_CATEGORY_URL = "https://opentdb.com/api.php?amount=10&type=multiple";
const GENERAL_KNOWLEDGE_URL =
  "https://opentdb.com/api.php?amount=10&category=9";
const VIDEO_GAMES_URL = "https://opentdb.com/api.php?amount=10&category=15";
const MOVIES_URL = "https://opentdb.com/api.php?amount=10&category=11";
const MUSIC_URL = "https://opentdb.com/api.php?amount=10&category=12";
const SPORTS_URL = "https://opentdb.com/api.php?amount=10&category=21";
const COMPUTERS_URL = "https://opentdb.com/api.php?amount=10&category=18";
const ART_URL = "https://opentdb.com/api.php?amount=10&category=25";
const ANIMALS_URL = "https://opentdb.com/api.php?amount=10&category=27";

const animals = fetch(ANIMALS_URL);
console.log(animals);
