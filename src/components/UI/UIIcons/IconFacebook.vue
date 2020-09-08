<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
        <path :class="fillSecondary"  d="M11.7,16.3c-1,0-1.9,0-2.9,0c0-1.3,0-2.6,0-3.9c0.9,0,1.8,0,2.8,0c0-1,0-1.9,0-2.8c-0.2-3.3,1.7-5.4,5.1-5.5
            c1-0.1,2.1,0,3.1,0c0,1.4,0,2.5,0,3.8c-0.8,0-1.6,0-2.4,0c-1.3,0-1.7,0.4-1.7,1.7c0,0.8,0,1.7,0,2.5c0,0.1,0,0.1,0.1,0.3
            c1.3,0,2.7,0,4,0c0,1.3,0,2.6,0,3.9c-1.4,0-2.7,0-4.1,0c0,3.6,0,7.1,0,10.7c-1.4,0-2.7,0-4.1,0C11.7,23.5,11.7,20,11.7,16.3z"/>
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