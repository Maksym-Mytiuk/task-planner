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
		props: {
			header: {
				type: String,
				default: 'Todo Header'
			}
		},
		components: {AppNav},
		name: "app-header",
	}
</script>

<style scoped>

</style>