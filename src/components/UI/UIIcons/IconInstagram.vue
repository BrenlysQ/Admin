<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
        <path :class="fillSecondary" d="M2.2,17c0-1.2,0-2.5,0-3.7c0-0.5,0.1-1,0.1-1.5c0.1-1.2,0-2.5,0.2-3.7c0.7-3.5,3.7-5.7,7.2-5.8c0.9,0,1.7-0.1,2.6-0.1
        c1.9,0,3.8,0,5.6,0c0.9,0,1.8,0.1,2.7,0.1c2.1,0.1,3.9,0.9,5.4,2.5c1.3,1.4,1.9,3.1,1.9,5c0,1.1,0.1,2.3,0.1,3.4c0,1.2,0,2.5,0,3.7
        c0,1.1-0.1,2.2-0.1,3.3c0.1,4.3-3.5,7.7-7.6,7.6c-0.8,0-1.6,0.1-2.4,0.1c-1.9,0-3.8,0-5.6,0c-0.9,0-1.7-0.1-2.6-0.1
        c-4.2-0.1-7.4-3.3-7.4-7.5C2.3,19.3,2.3,18.1,2.2,17z M4.7,15.1c0,1.9,0,3.7,0,5.6c0.1,2.1,1.2,3.6,3.1,4.4c1,0.5,2,0.4,3.1,0.4
        c3.4,0,6.8,0,10.2-0.1c2.3-0.1,4.4-2.3,4.4-4.6c0-3.7,0-7.5,0-11.2c0-2.3-1.6-4.2-3.8-4.7c-0.8-0.2-1.6-0.2-2.3-0.2
        c-3.4,0-6.9,0-10.3,0.1C6.8,4.9,4.8,7.1,4.7,9.4C4.7,11.3,4.7,13.2,4.7,15.1z"/>
        <path :class="fillSecondary" d="M15.2,21.7c-3.7,0-6.6-2.9-6.6-6.6c0-3.6,2.9-6.6,6.6-6.6c3.7,0,6.6,2.9,6.6,6.6C21.8,18.8,18.8,21.7,15.2,21.7z M10.9,15.1
            c0,2.4,1.9,4.2,4.2,4.2c2.3,0,4.2-2,4.2-4.3c0-2.4-1.9-4.2-4.3-4.2C12.8,10.9,10.9,12.9,10.9,15.1z"/>
        <path :class="fillSecondary" d="M21.8,9.9c-0.9,0-1.5-0.6-1.4-1.5c0-0.8,0.7-1.5,1.5-1.4c0.8,0,1.4,0.7,1.4,1.5C23.3,9.2,22.6,9.9,21.8,9.9z"/>
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