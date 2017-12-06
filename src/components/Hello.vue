<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
    <form action="" @submit.prevent>
      <input type="text" name="chuckjokes" v-model="chucknorris">
      <input type="submit" value="chuck it" @click.prevent="postJoke()">
    </form>
    <ul>
      <li v-for="joke in chuckJokes" :key="joke.key">{{ joke.joke }}</li>
    </ul>

  </div>
</template>

<script>
import { db } from '../services/firebase'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      chucknorris: ''
    }
  },
  methods: {
    postJoke () {
      db.ref('chuckJokes').push({
        joke: this.chucknorris
      })
      this.chucknorris = ''
    }
  },
  firebase: {
    chuckJokes: db.ref('chuckJokes')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
