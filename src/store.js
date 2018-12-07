import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let gameApi = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerName: '',
    playerCards: [],
    opponentCards: [],
    game: {}
  },
  mutations: {
    SETDECKS(state, decks){ 
      state.decks = decks
    },
    SETPLAYERCARDS(state, playerCards){
      state.playerCards = playerCards
    },
    SETOPPONENTCARDS(state, opponentCards){
      state.opponentCards = opponentCards
    },
    SETGAME(state, game){
      state.game = game
    }
  },
  actions: {
    getAllDecks({ commit }){
      gameApi.get('decks')
      .then(res => {
        console.log('decks', res.data)
        commit('SETDECKS', res.data)
      })
    },
    getPlayerCards({ commit }, gameId){
      gameApi.get('playerCards')
      .then(res => {
        console.log('playerCards', res.data)
        commit('SETPLAYERCARDS', res.data)
      })
    },
    startGame({ commit }, newGame){
      gameApi.post('/games', newGame)
      .then(res => {
        commit('SETGAME', res.data.game)
        router.push({ name: 'game', params: {gameId: res.data.game_id}})
      })
    },
    fight({commit}, payload){
      gameApi.put('/games' + payload.gameId, payload.attack)
      .then(res => {
        commit('SETGAME', res.data)
      })
    }

  }
})
