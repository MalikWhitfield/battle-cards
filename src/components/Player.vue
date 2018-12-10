<template>
    <div class="container-fluid">
        <div class="">
            <div class="row">
                <div class="col-12">
                    <hand :cards="game.player.hand" :fromOpponent="false" v-if="game.player"></hand>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Hand from '@/components/Hand.vue'
    export default {
        name: 'player',
        components: {
            Hand
        },
        data() {
            return {
                activePlayerCard: {
                    id: -1
                }
            }
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