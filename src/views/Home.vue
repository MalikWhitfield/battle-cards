<template>
  <div class="home">
    <h1>BATTLE <img alt="Vue logo" src="../assets/logo.png"> CARDZ</h1>
    <form>
      <input name="name" type="text" placeholder="Name">
      <button type="submit">Enter</button>
    </form>
    <button class="btn btn-success">Start Game</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
