<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
        <path class="fill-secondary" d="M15,2.5c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S22.2,2.5,15,2.5z M21.6,16.1c0,0.7-0.6,1.3-1.3,1.3H17
	v3.4c0,0.7-0.6,1.3-1.3,1.3h-1.5c-0.7,0-1.3-0.6-1.3-1.3v-3.4H9.8c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h3.1v-3
	c0-0.7,0.6-1.3,1.3-1.3h1.5c0.7,0,1.3,0.6,1.3,1.3v3h3.3c0.7,0,1.3,0.6,1.3,1.3V16.1z"/>
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