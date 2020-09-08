<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}" :class="direction">
        <path :class="fillSecondary" d="M26.2,13.2L26.2,13.2l-16.7,0L14.7,8c0.3-0.3,0.4-0.6,0.4-1c0-0.4-0.1-0.7-0.4-1l-0.8-0.8
        c-0.3-0.3-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4l-9,9c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1l9,9c0.3,0.3,0.6,0.4,1,0.4
        c0.4,0,0.7-0.1,1-0.4l0.8-0.8c0.3-0.3,0.4-0.6,0.4-1c0-0.4-0.1-0.7-0.4-1l-5.3-5.3h16.8c0.8,0,1.4-0.7,1.4-1.4v-1.2
        C27.6,13.8,26.9,13.2,26.2,13.2z"/>
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
    .rotate-right   {transform: rotate(180deg)}
    .rotate-top     {transform: rotate(90deg)}
    .rotate-bottom  {transform: rotate(-90deg)}
</style>
