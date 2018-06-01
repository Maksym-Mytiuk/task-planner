<template>
    <div>
        <app-header :header="this.header"></app-header>

        <v-container class="todo">

            <todo-filter></todo-filter>
            <todo-form></todo-form>
            <todo-list></todo-list>

        </v-container>


    </div>
</template>

<script>
	import AppHeader from './../components/AppHeader'
	import TodoFilter from './../components/TodoFilter'
	import TodoForm from './../components/TodoForm'
	import TodoList from './../components/TodoList'

	export default {
		components: {AppHeader, TodoFilter, TodoForm, TodoList},

		name: "app-todo",
		data() {
			return {
				header: "Todo",
			}
		},
	}
</script>

<style lang="stylus" scoped>

</style>
