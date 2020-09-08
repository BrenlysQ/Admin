<template>
   <svg viewBox="0 0 300 300" :style="{ width: iconWidth + 'px'}">
        <circle :class="fillPrimary"  cx="68.9" cy="70.9" r="22.9"/>
        <circle :class="fillPrimary" cx="149.5" cy="70.9" r="22.9"/>
        <circle :class="fillPrimary" cx="230.1" cy="70.9" r="22.9"/>
        <circle :class="fillPrimary" cx="68.9" cy="151.5" r="22.9"/>
        <circle :class="fillPrimary" cx="149.5" cy="151.5" r="22.9"/>
        <circle :class="fillPrimary" cx="230.1" cy="151.5" r="22.9"/>
        <circle :class="fillSecondary" cx="68.9" cy="232.1" r="22.9"/>
        <circle :class="fillSecondary" cx="149.5" cy="232.1" r="22.9"/>
        <circle :class="fillSecondary" cx="230.1" cy="232.1" r="22.9"/>
    </svg>
</template>
<script>
    export default {
    name: 'admin',
    props: {
      fillPrimary: String,
      fillSecondary: String,
      iconWidth: String,
    },
	data () {
		return {
			
		}
    },
    
}
</script>
