<template>
    <div class="container-fluid">
        <h1>FIGHT!</h1>
        <div class="row">
            <div class="col-12">
                <h1>{{game.opponent.name}}</h1>
            </div>
            <div class="col-8">
                <opponent></opponent>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 mb-5 mt-5">
            <h1>{{game.player.name}}</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-8">
            <player></player>
        </div>
    </div>
    </div>
</template>
<!-- //might be easier to have a player component and opponent component that has each name, card
    count, and then hand component inside of these. Game will import player and opponent and will import hand -->
<!-- 2 NEW COMPONENTS. PUT HAND IN THOSE COMPONENTS. CHANGE OPPONENT TO PLAYER WHEN NECESSARY. AND PUT THE 2 NEW COMPONENTS IN THIS GAME. -->

<script>
    import Opponent from '@/components/Opponent.vue'
    import Player from '@/components/Player.vue'
    export default {
        name: 'game',
        components: {
            Opponent,
            Player
        },
        data() {
            return {

            }
        },
        mounted() {
            this.$store.dispatch('getGame', this.$route.params.gameId)
        },
        computed: {
            game() {
                return this.$store.state.game
            }
        },
        methods: {}
    }

</script>

<style>


</style>