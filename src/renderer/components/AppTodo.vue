<template>
    <div>
        <app-header :header="this.header"></app-header>
    </div>
</template>

<script>
    import AppHeader from './AppHeader'
	export default {
    	components: {AppHeader},
		name: "app-todo",
        data(){
			return{
				header: "Todo"
            }
        }
	}
</script>

<style scoped>

</style>