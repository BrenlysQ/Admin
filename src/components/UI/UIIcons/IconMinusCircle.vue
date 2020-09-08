<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
        <path :class="fillSecondary" d="M14.9,1.6C7.4,1.6,1.3,7.7,1.3,15.2s6.1,13.7,13.7,13.7s13.7-6.1,13.7-13.7S22.5,1.6,14.9,1.6z M21.7,15.7
	c0,0.7-0.6,1.3-1.3,1.3H9.2c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h11.1c0.7,0,1.3,0.6,1.3,1.3V15.7z"/>
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