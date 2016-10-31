<template>
	<div id="app">
		<div class="wrapper" v-if="authed">
			<app-header></app-header>
			<app-sidebar :show="config.sidebar"></app-sidebar>
			<app-body></app-body>
			<app-footer></app-footer>
		</div>
		<div class="wrapper" v-else>
			<login></login>
		</div>
	</div>
</template>

<script>
  import store from './store'

  import {
    mapGetters
  } from 'vuex'

  import AppHeader from './components/layout/Header'
  import AppBody from './components/layout/Body'
  import AppFooter from './components/layout/Footer'
  import AppSidebar from './components/layout/Sidebar'
  import Login from './components/page/Login'

  export default {
    name: 'App',
    store,
    components: {
      AppHeader,
      AppBody,
      AppFooter,
      AppSidebar,
      Login
    },
    computed: {
      ...mapGetters([
        'authed',
        'config'
      ])
    },
    beforeMount() {
      const config = this.config
      const {
        body
      } = document
      const WIDTH = 768
      const RATIO = 3

      const handler = () => {
        if (!document.hidden) {
          let rect = body.getBoundingClientRect()
          config.mobile = rect.width - RATIO < WIDTH
          config.sidebar = !config.mobile
        }
      }

      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler)
    }
  }

</script>

<style lang="scss">
  .animated {
    animation-duration: .377s;
  }
  
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  #app,
  #app .wrapper {
    height: 100%;
  }

</style>
