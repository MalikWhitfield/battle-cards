<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <hand :cards="game.opponent.hand" :fromOpponent="true" v-if="game.opponent"></hand>
            </div>
        </div>
    </div>
</template>

<script>
    import Hand from '@/components/Hand.vue'
    export default {
        name: 'opponent',
        components: {
            Hand
        },
        data() {
            return {
                activeOppCard: {
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