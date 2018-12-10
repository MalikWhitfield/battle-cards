<template>
  <div class="home">
    <h1>
      BATTLE
      <img alt="Vue logo" src="../assets/logo.png"> CARDZ
    </h1>
    <form @submit.prevent="startGame">
      <input type="text" placeholder="Name" v-model="newGame.playerName">
      <input type="number" placeholder="Deck Set" v-model="newGame.set">
      <!-- V-model is the information in the form that will be reassigned to whatever it is called in the DATA(line 18) -->
      <button type="submit" class="btn btn-success">Start Game</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      newGame: {
        playerName: "", //this becomes whatever name that is input in the form
        set: 1 //}
      }
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame", this.newGame);
    }
  }
};
</script>
