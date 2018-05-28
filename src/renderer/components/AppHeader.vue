<template>
    <div>
        <header>{{ this.header }}</header>
    </div>
</template>

<script>
	export default {
		props: {
			header: {
				type: String,
                default: 'Todo Header'
            }
        },
		name: "app-header",
	}
</script>

<style scoped>

</style>