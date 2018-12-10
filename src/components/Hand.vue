<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex">
        <div
          @v-on:click="$emit('setActiveOpponent', card.id); opponentId=card.id"
          :class="{'border-success' : opponnetId = card.id}"
          v-if="fromOpponent"
          v-for="card in cards"
          :key="card.id"
          class="border"
        >
          <div v-if="visible">
            <div class="card cardImgBg" style="width: 150px; height: 150px">
              <h5>{{card.name}}</h5>
              <img class="card-img-top" :src="card.img" alt="Card image cap">
              <div class="card-body cardBodyBg">
                <p class="card-text">Attack: {{card.attack}}</p>
                <p class="card-text">Defense: {{card.defense}}</p>
                <p class="card-text">Health : {{card.health}}</p>
              </div>
            </div>
          </div>
          <div v-if="!visible">
            <img src="https://pbs.twimg.com/media/DTTz_U9UQAEMua7.jpg" height="150px">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button>FIGHT</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex">
        <div
          @v-on:click="$emit('setActivePlayer', card.id); playerId=card.id"
          :class="{'border-success' : playerId = card.id}"
          v-if="!fromOpponent"
          v-for="card in cards"
          :key="card.id"
          class="border"
        >
          <div class="card cardImgBg" style="width: 150px; height: 150px">
            <h5>{{card.name}}</h5>
            <img class="card-img-top" :src="card.img" alt="Card image cap">
            <div class="card-body cardBodyBg">
              <p class="card-text">Attack: {{card.attack}}</p>
              <p class="card-text">Defense: {{card.defense}}</p>
              <p class="card-text">Health : {{card.health}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

//IF TOO HARD. WE CAN MAKE A PLAYER HAND VUE AND OPPONENT HAND VUE
//INSTEAD OF THE ARRAY FROM COMPUTED, WE WILL PASS THE ARRAY AS A PROP
//

<script>
export default {
  name: "Hand",
  props: ["cards", "fromOpponent"],
  data() {
    return {
      setPlayerId: {
        id: -1
      },
      setOpponentId: {
        id: -1
      }
      //   activePlayerCard: {
      //     id: -1
      //   },
      //   activeOppCard: {
      //     id: -1
      //   }
    };
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
  },
  methods: {}
};
</script>

<style>
.bgOpponent {
  background-color: red;
}
.bgPlayer {
  background-color: blueviolet;
}
.borderB {
  border-color: blue;
  border: 20px;
}
.cardImgBg {
  background-color: blueviolet;
}
.cardBodyBg {
  background-color: rgb(180, 100, 255);
}
</style>