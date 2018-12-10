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
    PlayerCardId: '',
    OpponentCardId: '',
    game: {}
  },
  mutations: {
    SETDECKS(state, decks) {
      state.decks = decks
    },
    SETPLAYERCARDS(state, playerCards) {
      state.playerCards = playerCards
    },
    SETOPPONENTCARDS(state, opponentCards) {
      state.opponentCards = opponentCards
    },
    SETGAME(state, game) {
      state.game = game
    },
    SETACTIVEPLAYERCARD(state, playerCardId) {
      state.playerCardId = playerCardId
    },
    SETACTIVEOPPONENTCARD(state, opponentCardId) {
      state.opponentCardId = opponentCardId
    }
  },
  actions: {
    getAllDecks({ commit }) {
      gameApi.get('decks')
        .then(res => {
          console.log('decks', res.data)
          commit('SETDECKS', res.data)
        })
    },
    getPlayerCards({ commit }, gameId) {
      gameApi.get('playerCards')
        .then(res => {
          console.log('playerCards', res.data)
          commit('SETPLAYERCARDS', res.data)
        })
    },
    getGame({ commit }, gameId) {
      gameApi.get('/' + gameId)
        .then(res => {
          console.log('getGame', res.data.data)
          commit('SETGAME', res.data.data)
        })
    },
    startGame({ commit }, newGame) {
      gameApi.post('', newGame)
        .then(res => {
          console.log('game data', res.data)
          let game = res.data.game
          router.push({ name: 'game', params: { gameId: game.id } })
        })
    },
    fight({ commit }, payload) {
      gameApi.put('/games' + payload.gameId, payload.attack)
        .then(res => {
          commit('SETGAME', res.data)
        })
    },
    attackedCard({ commit }, activeOpponentCardId) {
      commit('SETACTIVEOPPONENTCARD', activeOpponentCardId)
    },
    playerCard({ commit }, activePlayerCardId) {
      commit('SETACTIVEPLAYERCARD', activePlayerCardId)
    }

  }
})
