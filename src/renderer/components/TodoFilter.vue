<template>
    <div class="todo-filter">
        <v-layout row>
            <v-btn flat
                   block
                   large
                   color="blue"
                   @click="sortTodo('all')">

                <v-icon>list</v-icon>
            </v-btn>

            <v-btn flat
                   block
                   large
                   color="blue"
                   @click="sortTodo('completed')">

                <v-icon>check_box</v-icon>
            </v-btn>

            <v-btn flat
                   block
                   large
                   color="blue"
                   @click="sortTodo('uncompleted')">

                <v-icon>check_box_outline_blank</v-icon>
            </v-btn>

        </v-layout>
    </div>
</template>

<script>
	export default {
		name: "TodoFilter",
        methods: {
	        sortTodo(value){
		        this.$store.getters.getFilteredTodo(value)
            }
        }
	}
</script>

<style lang="stylus" scoped>
    .btn__content
        i
            font-size 2.5rem
</style>
