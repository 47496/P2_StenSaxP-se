<script setup>
import { ref } from 'vue';
import GameAlternatives from './components/gameAlternatives.vue';
import GameResult from './components/gameResult.vue';
import GameScore from './components/gameScore.vue';

const myChoice = ref("");
const alternative = ref("");
const winnerInfo = ref("");
const winner = ref("")
const round = ref(0)

function setWinnerInfo(_winner){
  winner.value = _winner;
  round.value++;
  if (_winner === 'draw') {
    winnerInfo.value = "It's a draw!"
  } else if (_winner === 'user') {
    winnerInfo.value = 'Du vann, du fuskade säkert :('
  } else {
    winnerInfo.value = 'Än en gång besegrade maskinen människan!'
  }
}

function setUserAlternative(alt){
  alternative.value = alt;
}
function setComputerAlternative(alt){
  myChoice.value=alt
}
</script>

<template>
<h1>Sten Sax Påse</h1> <br>
<GameAlternatives 
@user-choice="setUserAlternative" 
@computer-choice="setComputerAlternative" 
@winner="setWinnerInfo"/>

<GameResult 
:user-choice="alternative" 
:computer-choice="myChoice" 
:winner-info="winnerInfo"/><br>

<GameScore
:result="{round, winner}"
/>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
h1 {
  color: whitesmoke;
}
</style>