<template>
    <div class="todo-list">
        <transition-group name="todo-fade" tag="div">
            <div v-for="(item, index) in todo" :key="item.id">

                <v-layout row class="todo-list__items">
                    <v-flex xs1>
                        <v-checkbox
                                color="blue"
                                v-model="item.isCompleted"
                                @click="isCheckedTodoItem(index, item.isCompleted)">
                        </v-checkbox>
                    </v-flex>

                    <v-flex xs9>
                        <p>{{ item.massage }}</p>
                    </v-flex>

                    <v-flex xs2 class="todo-editing">

                        <v-btn small flat color="blue" class="todo-editing__btn" v-if="!item.isEditing">
                            <v-icon>edit</v-icon>
                        </v-btn>
                        <v-btn small flat color="blue" class="todo-editing__btn" v-else>
                            <v-icon>save</v-icon>
                        </v-btn>
                        <v-btn small flat color="blue" class="todo-editing__btn" @click="removeTodoItem(index)">
                            <v-icon>delete_outline</v-icon>
                        </v-btn>

                    </v-flex>
                </v-layout>

            </div>
        </transition-group>
    </div>
</template>

<script>
	export default {
		name: "TodoList",
		methods: {
			removeTodoItem(index) {
				this.$store.commit('removeTodoItem', index)
			},
			isCheckedTodoItem(index, isChecked) {
				const payload = {index, isChecked};
				this.$store.commit('isCompleteItem', payload);
			}
		},
		computed: {
			todo() {
				return this.$store.state.todo.todoItems;
			},
		}
	}

</script>

<style lang="stylus" scoped>
    .todo-fade-enter-active, .todo-fade-leave-active
        transition all .3s ease

    .todo-fade-enter, .todo-fade-leave-to
        transform translateX(3333px)

    .todo-list
        .todo-editing
            .todo-editing__btn
                min-width auto

</style>
