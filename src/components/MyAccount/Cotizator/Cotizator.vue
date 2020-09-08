<template>
	<div class="dashboard-cotizator">
		<vue-tabs>
			<v-tab title="Vuelos">
				<cotizator-boton>
				</cotizator-boton>
				<vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
				<cotizator-response>
				</cotizator-response>
			</v-tab>
			<v-tab title="Seguros">
				Seguros
			</v-tab>
		</vue-tabs>
	</div>
</template>
<script>
	import vueLoading from 'vue-loading-template'
	import CotizatorBoton from './Boton/Boton.vue';
	import CotizatorResponse from './Response/Response.vue';
	import {
    VueTabs,
    VTab
	} from 'vue-nav-tabs'
	import 'vue-nav-tabs/themes/vue-tabs.css'
	export default {
		data() {
			return {
			}
		},
		components: {
			CotizatorBoton,
			CotizatorResponse,
			vueLoading,
			VueTabs,
        	VTab
		}
	}
</script>
