<template>
    <div id="app">
        <app-nav></app-nav>
    </div>
</template>

<script>

    import AppNav from './components/AppNav'
    import AppHeader from './components/AppHeader'

    export default {
		name: 'task-planner',
        components: { AppNav, AppHeader }
	};

</script>

<style lang="stylus">
    @import '~vuetify/src/stylus/main'
</style>
