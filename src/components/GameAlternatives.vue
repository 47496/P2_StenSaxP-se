<script setup>
import {ref, defineEmits} from 'vue';
const emit = defineEmits(['user-choice', 'computer-choice', 'winner']);
// All different input options
const options = ref(["Scissors", "Paper", "Rock", "Lizard", "Spock", "Water", "Fire"]);

function alternativChosen(e) {
  let buttons = document.getElementsByClassName('option')
  for (let b of buttons) {
    b.classList.remove("vald")
  }
  // checks the user option
  let alternative = e.target.innerText;
  e.target.classList.add("vald");
  emit('user-choice', alternative);
  computerAction()
}
function computerAction(){
  // Randomizes a number from 0 to the options length
  let compAlternative = options.value[Math.floor(Math.random() * options.value.length)];
  let buttons = document.getElementsByClassName('option')
  // Removes old computerchoice class and adds the new one
  for (let b of buttons) {
        b.classList.remove("computerChoice")
    if (b.innerText === compAlternative) {
      b.classList.add("computerChoice");    
    }
  }
  emit('computer-choice', compAlternative);
  determineWinner();
}

function determineWinner(){
  let userButton, computerButton;
  let buttons = document.getElementsByClassName('option')
  for (let b of buttons) {
    if(b.classList.contains('vald')) {
      userButton=b.innerText
    }
    if(b.classList.contains('computerChoice')){
      computerButton=b.innerText
    }
  }
  let userIndex = options.value.indexOf(userButton);
  let computerIndex = options.value.indexOf(computerButton)
  // Determines the winner
  if (computerIndex === userIndex) {
    emit('winner', 'draw');
    // If both have the same remainder when divided by 2, the one with the higher value wins.
  } else if(computerIndex % 2 === userIndex  % 2){
    emit('winner', computerIndex > userIndex ? 'computer' : 'user');
  } else {
    // else user wins
    emit('winner', computerIndex < userIndex ? 'computer' : 'user');
  }
}
</script>

<template>
  <div class="options-container">
    <ul>
      <li v-for="alt in options" @click="alternativChosen" class="option" :key="alt">{{ alt }}</li>
    </ul>
  </div>
</template>


<style scoped>
.options-container {
  display: flex;
  justify-content: center;
}
ul {
  padding-left: 0;
  list-style: none; /* Remove list bullets */
  display: flex;
  flex-wrap: wrap; /* Allow list items to wrap to the next line */
  justify-content: center;
}

li {
  display: flex;
  cursor: pointer;
  margin: 0 10px;
  margin-bottom: 10px; /* Add margin between list items */
  padding: 10px 20px;
  border: 0.2em dashed transparent;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

li:hover {
  background-color: #2980b9;
}
.vald {
  background-color: darkcyan;
}
.vald:hover {
  background-color: darkcyan;
}
.computerChoice {
  border: 0.2em dashed darkred;
}
</style>