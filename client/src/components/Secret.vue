<template>
  <div class="key-display">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Key Display',
  data () {
    return {
      msg: 'Your key is: ' + process.env.API_KEY
    }
  }
}
</script>
