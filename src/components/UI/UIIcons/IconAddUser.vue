<template>
    <svg viewBox="0 0 30 30" :style="{ width: iconWidth + 'px'}">
		<path :class="fillSecondary" d="M18.801,14.801c2.942,0,5.35-2.408,5.35-5.351c0-2.942-2.407-5.35-5.35-5.35c-2.943,0-5.351,2.407-5.351,5.35
			C13.45,12.393,15.857,14.801,18.801,14.801z M6.762,12.125V8.112H4.087v4.013H0.075v2.676h4.013v4.012h2.675v-4.012h4.013v-2.676
			H6.762z M18.801,17.476c-3.612,0-10.701,1.738-10.701,5.35V25.5h21.4v-2.675C29.5,19.214,22.411,17.476,18.801,17.476z"/>
    </svg>
</template>
<script>
    export default {
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
