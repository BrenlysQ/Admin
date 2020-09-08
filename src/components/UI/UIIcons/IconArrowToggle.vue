<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}" :class="direction">
        <path :class="fillSecondary" d="M4,10.5c0.1-0.2,0.2-0.4,0.3-0.6c0.4-0.5,1.3-0.6,1.8-0.2c0.4,0.4,0.8,0.8,1.2,1.2c2.6,2.6,5.2,5.2,7.8,7.8
        c0,0,0.1,0.1,0.1,0.1c0.2-0.2,0.5-0.5,0.7-0.7c2.8-2.8,5.5-5.5,8.3-8.3c0.5-0.5,1-0.6,1.6-0.3c0.3,0.1,0.5,0.4,0.6,0.7
        c0,0.1,0.1,0.1,0.1,0.2c0,0.2,0,0.3,0,0.5c-0.2,0.6-0.7,1-1.1,1.4c-0.7,0.7-1.4,1.4-2.1,2.1c-0.7,0.7-1.4,1.4-2.1,2.1
        c-0.6,0.6-1.3,1.3-1.9,1.9c-0.7,0.7-1.4,1.4-2.1,2.1c-0.4,0.4-0.7,0.7-1.1,1.1c-0.5,0.5-1.1,0.6-1.7,0.2c-0.3-0.2-0.5-0.4-0.7-0.6
        c-0.8-0.8-1.7-1.7-2.5-2.5C10.6,17.9,9.8,17,9,16.2c-0.8-0.8-1.7-1.7-2.5-2.5c-0.7-0.7-1.4-1.4-2-2C4.2,11.5,4.1,11.2,4,11
        C4,10.8,4,10.6,4,10.5z"/>
    </svg>
</template>
<script>
    export default {
    name: 'admin',
    props: {
      fillPrimary: String,
      fillSecondary: String,
      iconWidth: String,
      direction: String,
    },
	data () {
		return {

		}
    },
    
}
</script>
<style>
    .rotate-right {transform: rotate(-180deg)}
    .rotate-left  {transform: rotate(90deg)}
    .rotate-top {transform:  rotate(270deg)}
</style>
