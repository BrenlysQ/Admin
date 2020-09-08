<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
       <path :class="fillSecondary" d="M22,3.7L22,3.7c-4-4-10.4-4-14.4,0l0,0c-3.6,3.6-4,10.4-1,14.4l8.1,11.8l8.1-11.8C26,14,25.6,7.3,22,3.7z
	 M14.9,14.1c-1.8,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4S16.8,14.1,14.9,14.1z"/>
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
