<template>
	<aside class="app-sidebar menu animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
		<div class="card">
			<div class="card-content">
				<div class="media">
					<div class="media-left">
						<figure class="image is-32x32">
							<img src="../../assets/images/placehold.png" alt="Image">
						</figure>
					</div>
					<div class="media-content">
						<p class="title is-5">John Smith</p>
						<p class="subtitle is-6">@johnsmith</p>
					</div>
				</div>

				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
				</div>
			</div>
		</div>
		<div class="menu-container">
			<p class="menu-label">系统菜单</p>
			<ul class="menu-list">
				<li>
					<router-link :to="{ name: 'home' }" exact>
						<span class="icon is-small"><i class="fa fa-home"></i></span>
						<span>首页</span>
					</router-link>
				</li>
			</ul>

			<p class="menu-label">用户菜单</p>
			<ul class="menu-list">
				<li v-for="menu in menus">
					<router-link v-if="menu.url" :to="menu.url">
						<span class="icon is-small"><i :class="'fa fa-' + menu.icon"></i></span>
						<span>{{menu.name}}</span>
					</router-link>
					<div v-else>
						<a href="javascript:void(0)" :aria-expanded="isExpanded(menu)" @click="toggle(menu)">
							<span class="icon is-small"><i :class="'fa fa-' + menu.icon"></i></span>
							<span>{{menu.name}}</span>
							<span class="icon is-small is-angle" v-if="menu.children && menu.children.length">
                <i class="fa fa-angle-down"></i>
              </span>
						</a>
						<expanding>
							<ul v-show="isExpanded(menu)">
								<li v-for="subMenu in menu.children">
									<router-link :to="subMenu.url">
										{{subMenu.name}}
									</router-link>
								</li>
							</ul>
						</expanding>
					</div>
				</li>
			</ul>
		</div>
	</aside>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import Expanding from '../Expanding'

  export default {
    props: {
      show: Boolean
    },
    components: {
      Expanding
    },
    computed: {
      ...mapGetters([
        'menus'
      ])
    },
    methods: {
      isExpanded(menu) {
        return menu.expanded
      },
      toggle(menu) {
        menu.expanded = !menu.expanded
        this.$forceUpdate()
      },
      shouldExpandMatchMenu(route) {
        this.menus.forEach(function(parentMenu) {
          if (parentMenu.children && parentMenu.children.length) {
            parentMenu.children.forEach(function(menu) {
              if (menu && menu.url && menu.url.toLowerCase() === route.path) {
                parentMenu.expanded = true
              }
            })
          }
        })
        this.$forceUpdate()
      }
    },
    mounted() {
      let route = this.$route
      if (route) {
        this.shouldExpandMatchMenu(route)
      }
    }
  }

</script>

<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';
  .app-sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1024 - 1;
    background: #FFF;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    overflow-y: auto;
    overflow-x: hidden;
    @include mobile() {
      transform: translate3d(-180px, 0, 0);
    }
    .icon {
      vertical-align: baseline;
      &.is-angle {
        position: absolute;
        right: 10px;
        transition: transform .377s ease;
      }
    }
    .menu-label {
      padding-left: 5px;
      margin-top: 10px;
      font-weight: 700;
    }
    .menu-list {
      li a {
        &[aria-expanded="true"] {
          .is-angle {
            transform: rotate(180deg);
          }
        }
      }
      li a+ul {
        margin: 0 10px 0 15px;
      }
    }
  }

</style>
