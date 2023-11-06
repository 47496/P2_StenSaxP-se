// Rules of the game and its custom messages
// Dictonary that defines messages for each coresponding outcome
const gameRules = {
    scissors: {
      beats: ['paper', 'lizard', 'water'],
      messages: {
        paper: 'Scissors cut paper.',
        lizard: 'Scissors decapitate lizard.',
        water: 'Scissors cut water.',
      },
    },
    paper: {
      beats: ['rock', 'spock', 'fire'],
      messages: {
        rock: 'Paper covers rock.',
        spock: 'Paper disproves Spock.',
        fire: 'Paper burns fire.',
      },
    },
    rock: {
      beats: ['lizard', 'scissors', 'water'],
      messages: {
        lizard: 'Rock crushes lizard.',
        scissors: 'Rock crushes scissors.',
        water: 'Rock splashes water.',
      },
    },
    lizard: {
      beats: ['spock', 'paper', 'fire'],
      messages: {
        spock: 'Lizard poisons Spock.',
        paper: 'Lizard eats paper.',
        fire: 'Lizard burns fire.',
      },
    },
    spock: {
      beats: ['scissors', 'rock', 'water'],
      messages: {
        scissors: 'Spock smashes scissors.',
        rock: 'Spock vaporizes rock.',
        water: 'Spock evaporates water.',
      },
    },
    water: {
      beats: ['fire', 'paper', 'lizard'],
      messages: {
        fire: 'Water extinguishes fire.',
        paper: 'Water wets paper.',
        lizard: 'Water drowns lizard.',
      },
    },
    fire: {
      beats: ['scissors', 'rock', 'spock'],
      messages: {
        scissors: 'Fire burns scissors.',
        rock: 'Fire burns rock.',
        spock: 'Fire burns Spock.',
      },
    },
  };
  export default gameRules

  