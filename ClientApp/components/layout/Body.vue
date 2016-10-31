<template>
	<section class="app-body">
		<app-tabbar></app-tabbar>
		<div class="app-content container is-fluid is-marginless">
			<transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
				<router-view class="animated"></router-view>
			</transition>
		</div>
	</section>
</template>

<script>
  import AppTabbar from './Tabbar'

  export default {
    components: {
      AppTabbar
    }
  }

</script>
<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';
  .app-body {
    padding-top: 50px;
    margin-left: 180px;
    transform: translate3d(0, 0, 0);
    @include mobile() {
      margin-left: 0;
    }
  }
  
  .app-content {
    padding: 20px;
  }

</style>
