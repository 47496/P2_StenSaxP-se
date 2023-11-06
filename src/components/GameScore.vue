<script setup>
import { defineProps, watch, ref } from "vue"

const prop = defineProps(['result'])
const userScore = ref(0);
const computerScore = ref(0);

// watches for an update in prop and changes the score values correspondingly
watch(prop, () => {
    if(prop.result.winner === 'user'){
      userScore.value ++;
    } else if (prop.result.winner === 'computer'){
      computerScore.value ++;
    }
});

function resetScore(){
  userScore.value = 0;
  computerScore.value = 0;
}
</script>


<template>
    <div v-if=" userScore || computerScore " class="score-container">
      <span id="userScore">
        <!-- Adds the class "leader score" if value is greater than the other opponent -->
        <span :class="userScore>computerScore ? 'leader score' : 'score'">{{ userScore }}</span>
        <p v-if="computerScore>userScore">Loser</p>
        <p v-else>User</p>
      </span>
      <span id="computerScore">
        <span :class="userScore<computerScore ? 'leader score' : 'score'">{{ computerScore }}</span>
        <p>Computer</p>
      </span>
    </div>
    <br>
    <button v-if="computerScore>0 || userScore>0" @click="resetScore" class="buttons" > Restart</button>
</template>


<style scoped>
.score-container {
  display: flex;
  justify-content: center;
}
.score {
  margin-left: 1em;
  margin-right: 1em;
  background-color: aqua;
  font-size: 3em;
  color: black;
  display: inline-block;
  width: 1.6em;
  height: 1.6em;
  text-align: center;
}
.leader {
  margin-left: 0.4em;
  margin-right: 0.4em;
  font-size: 5em;
}
.buttons {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
}
</style>
