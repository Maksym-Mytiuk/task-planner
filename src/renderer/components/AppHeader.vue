<template>
    <div>
        <header>
            <app-nav></app-nav>
            <h1>{{ this.header }}</h1>
        </header>
    </div>
</template>

<script>
    import AppNav from './AppNav';
	export default {
		name: "app-header",
		props: {
			header: {
				type: String,
				default: 'Task-Planner'
			}
		},
		components: {AppNav},
	}
</script>

<style scoped>

</style>
