<template>
    <div class="todo-filter">
        <v-layout row>
            <v-btn flat
                   block
                   large
                   color="blue"
                   :class="{ active: filterBy === 'all' }"
                   @click="filterTodo('all')">

                <v-icon>list</v-icon>
            </v-btn>

            <v-btn flat
                   block
                   large
                   color="blue"
                   :class="{ active: filterBy === 'completed' }"
                   @click="filterTodo('completed')">

                <v-icon>check_box</v-icon>
            </v-btn>

            <v-btn flat
                   block
                   large
                   color="blue"
                   :class="{ active: filterBy === 'uncompleted' }"
                   @click="filterTodo('uncompleted')">

                <v-icon>check_box_outline_blank</v-icon>
            </v-btn>

        </v-layout>
    </div>
</template>

<script>
	export default {
		name: "TodoFilter",
        data(){
			return{
				filterBy: 'all'
            }
        },
		methods: {
			filterTodo(value) {
				this.filterBy = value;
				this.$emit('filter', value)
			}
		}
	}
</script>

<style lang="stylus" scoped>
    .btn__content
        i
            font-size 2.25rem
    .btn.active
        transition none
        border-bottom 3px solid

</style>
