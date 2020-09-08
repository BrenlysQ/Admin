<template>
	<div class="dashboard">
		<!-- Begin NavBar-->
		<dashboard-navbar :isCollapse="isCollapse" :isSidebar="isSidebar" :itemCollapse="itemCollapse" :sidebarShow="sidebarShow"></dashboard-navbar>
		<!-- End NavBar-->

		<!-- Begin Main -->
		<div class="dashboard-main">
			<!-- Begin Sidebar -->
			<dashboard-sidebar :isCollapse="isCollapse" :isSidebar="isSidebar"></dashboard-sidebar>
			<!-- End Sidebar -->

			<!-- Begin Content -->
			<div class="dashboard-content">
				<div class="dashboard-content__header">
					<h2 class="dashboard-content__header__title">{{ dashboardTitle }}</h2>
					<p  class="dashboard-content__header__subtitle ui-margin-left">{{ dashboardDescription }}</p>
				</div>
				<div class="dashboard-content__body">
					<div class="dashboard-components">
						<transition name="slide-fade">
							<router-view></router-view>
						</transition>
						<vue-progress-bar></vue-progress-bar>
					</div>
				</div>
			</div>
			<!-- End Content -->
		</div>
		<!-- End Main -->
	</div>
</template>

<script>


import DashboardNavbar  from '@/components/Dashboard/Navbar/Navbar.vue'
import DashboardSidebar from '@/components/Dashboard/Sidebar/Sidebar.vue'
import UltraApi from '../components/UltraApi'
UltraApi.checkAuth();

export default {
	name: 'dashboard',
	components: {
		DashboardNavbar,
		DashboardSidebar,
	},
	data () {
		return {
			isCollapse: false,
			isSidebar: false,
			dashboardTitle: 'Dashboard',
			dashboardDescription: 'Panel Principal'
		}
	},
	beforeCreate: function () {
		// console.log(this.$session.get('apitoken'),'APITOKEN');
    if (!UltraApi.user.authenticated) {
      this.$router.push('/login')
    }
  },
	mounted () {
    	this.$Progress.finish()
	},
	created () {
		this.$Progress.start()

		this.$router.beforeEach((to, from, next) => {
		if (to.meta.progress !== undefined) {
			let meta = to.meta.progress
			this.$Progress.parseMeta(meta)
		}
		this.$Progress.start()
			next()
		})
		this.$router.afterEach((to, from) => {
		this.$Progress.finish()
		})
	},
	methods: {
		itemCollapse: function(){
			this.isCollapse = !this.isCollapse
		},
		sidebarShow: function(){
			this.isSidebar = !this.isSidebar
		},
	},
	// route: {
  //   // Check the users auth status before
  //   // allowing navigation to the route
  //   canActivate() {
  //     return UltraApi.user.authenticated
  //   }
  // }
}
</script>
