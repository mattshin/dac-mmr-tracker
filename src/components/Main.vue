<template>
  <div class="main">
    <router-link to="/secret">Go to API key</router-link>
    <h1>{{ title }}</h1>
    <textarea
      v-model="textInput"
      class="textarea-big"
      rows="5"
      placeholder="Enter all summoner names, each on a new line"/>
    <button
      class="button-find"
      @click="getSummonersByName">Find</button>
    <graph
      v-if="summonerList.length && summonerList[0]"
      :ids="summonerIds"/>
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
      title: 'MMR Tracker',

      // Reactive Elements
      summonerList: [],
      textInput: '',
    }
  },

  methods: {
    getSummonersByName: function(event) {
      this.summonerList = this.textInput.split('\n')
      this.summonerIds = api.getSummonerIDs(this.summonerList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/main.css'
</style>
