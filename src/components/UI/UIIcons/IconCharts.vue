<template>
    <svg viewBox="0 0 300 300" :style="{ width: iconWidth + 'px'}">
        <path :class="fillPrimary" d="M204.7,153.3l-54.7-1.4l10.8-53.7l10.1-50.2c-6.7-1.4-13.7-2.1-20.8-2.1c-57.4,0-104,46.6-104,104
            s46.6,104,104,104c55.9,0,101.5-44.1,103.9-99.5L204.7,153.3z"/>
        <path :class="fillSecondary" d="M188.7,52.3l-0.1,0.6c0,0,0.1,0,0.1,0l-8.1,40.2l-7.8,39.1l0,1.5l-0.3-0.1l-0.5,2.4l43.8,1.1l38.5,1
            c0.1-1.5,0.1-3,0.1-4.5C254.5,93.7,226.3,60.3,188.7,52.3z"/>
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
