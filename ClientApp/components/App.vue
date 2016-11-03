<template>
  <div id="app">
    你已经在这花了 {{ counter }} 秒。
  </div>
</template>
<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    created() {
      setInterval(() => {
        this.counter += 1
      }, 1000)
    }
  }
</script>
