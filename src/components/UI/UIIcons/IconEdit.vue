<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
        <path :class="fillPrimary" d="M1.6,27.2c-0.1,0.5,0.3,0.9,0.8,0.8l6.2-1.5L3,20.9L1.6,27.2z"/>
        <rect x="4.3" y="11.2" transform="matrix(0.7073 -0.7069 0.7069 0.7073 -6.5498 14.5313)" :class="fillPrimary" width="19.9" height="7.9"/>
        <path :class="fillSecondary" d="M28.3,4l-2.5-2.5c-1-1-2.5-1-3.5,0L20,3.9l5.6,5.6l2.8-2.8C29,6,29,4.8,28.3,4z"/>
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