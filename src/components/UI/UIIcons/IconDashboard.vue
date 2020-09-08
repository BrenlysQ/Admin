<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
        <circle :class="fillPrimary" cx="6.4" cy="5.9" r="4.2"/>
        <circle :class="fillPrimary" cx="6.4" cy="23.9" r="4.2"/>
        <circle :class="fillSecondary" cx="23.4" cy="23.9" r="4.2"/>
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
