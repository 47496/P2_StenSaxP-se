<script setup>
import {ref, watch} from 'vue';
const props=defineProps(['userChoice', 'computerChoice', 'winnerInfo']);
import gameRules from '../assets/GameRules.js';
const message = ref("");


watch(props, () => {
// Changes the string to all lowercase
const userChoice = props.userChoice.toLowerCase();
const computerChoice = props.computerChoice.toLowerCase();
// Determines winner and changes message value coresponding
if (userChoice === computerChoice) {
      message.value = "It's a tie!";
    } else if (gameRules[userChoice]?.beats.includes(computerChoice)) {
      // searches trough the dictionary and matches the user option and computer option and responds with the message
      message.value = (gameRules[userChoice].messages[computerChoice]);
    } else {
      // searches trough the dictionary and matches the computer option and user option and responds with the message
      message.value = (gameRules[computerChoice].messages[userChoice]);
    }
  });
</script>

<template>
  <!-- Displays the choices and the winner message-->
<div v-if="props.winnerInfo !==''" id="result">
    <p> Du valde {{ props.userChoice }}</p>
    <p> jag valde {{ props.computerChoice }}</p>
    <p>{{ message }}</p>
</div>
</template>

<style scoped>

div {
  margin-top: 20px;
}

p {
  margin: 5px 0;
}

</style>