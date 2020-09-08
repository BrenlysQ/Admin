<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
       <path :class="fillSecondary" d="M10.2,20.1c1.9-2.4,3.8-4.7,5.7-7.1c2.8-3.6,5.7-7.1,8.5-10.7c1-1.2,2.9-1.4,4.2-0.4c1.2,1,1.4,2.8,0.4,4
	    c-4.7,6-9.5,11.9-14.2,17.8c-0.6,0.8-1.3,1.6-1.9,2.3c-1.4,1.8-3.4,1.9-4.9,0.2c-2.3-2.5-4.5-5.1-6.8-7.6c-1.2-1.3-1.1-3.1,0.1-4.2
	    c1.3-1.1,3.2-1,4.3,0.3C7.1,16.7,8.6,18.4,10.2,20.1z"/>
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