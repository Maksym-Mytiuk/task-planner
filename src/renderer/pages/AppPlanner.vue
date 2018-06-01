<template>
    <div>
        <app-header :header="this.header"></app-header>
    </div>
</template>

<script>
	import AppHeader from './../components/AppHeader'
	export default {
		components: {AppHeader},
		name: "app-planner",
		data(){
			return {
				header: 'My task planner',
			}
		}
	}
</script>

<style scoped>

</style>
