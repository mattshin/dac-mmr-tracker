<template>
  <div class="main">
    <router-link to="/secret">Go to API key</router-link>
    <h1>{{ title }}</h1>
    <textarea
      v-model="textInput"
      class="textarea-big"
      rows="5"
      placeholder="Enter all Steam usernames, each on a new line"/>
    <button
      class="button-find"
      @click="getSteamIdsByUsername">Find</button>
    <graph
      v-if="usernameList.length && usernameList[0]"
      :ids="steamIds"/>
  </div>
</template>

<script>
import api from '../scripts/api'
import Graph from '@/components/Graph'
export default {
  name: 'Main',
  components: {
    Graph
  },
  data () {
    return {
      title: 'Rank Tracker',

      // Reactive Elements
      usernameList: [],
      textInput: '',
    }
  },

  methods: {
    getSteamIdsByUsername: function(event) {
      this.usernameList = this.textInput.split('\n')
      this.steamIds = api.getSteamIds(this.usernameList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/main.css'
</style>
