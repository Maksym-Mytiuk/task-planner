<template>
    <div>
        <app-header :header="this.header"></app-header>
    </div>
</template>

<script>
	import AppHeader from './../components/AppHeader'
	export default {
		components: {AppHeader},
		name: "app-notification",
        data(){
			return {
				header: 'My notification',
            }
        }
	}
</script>

<style scoped>

</style>
