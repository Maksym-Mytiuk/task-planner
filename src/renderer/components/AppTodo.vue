<template>
    <div>
        <app-header :header="this.header"></app-header>
        <v-container class="todo">

            <v-layout row class="todo-filter">
                <v-btn flat block large color="blue">
                    <v-icon>history</v-icon>
                </v-btn>
                <v-btn flat block large color="blue">
                    <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn flat block large color="blue">
                    <v-icon>place</v-icon>
                </v-btn>
            </v-layout>

            <v-layout row column>
                <v-form valid class="todo-form">

                    <v-text-field color="blue"
                                  label="Todo text..."
                                  required
                                  v-model="massage"
                                  :counter="50"></v-text-field>

                    <v-btn outline
                           color="blue"
                           class="todo-send" @click="addTodoItem">Send
                    </v-btn>

                </v-form>
            </v-layout>

            <div class="todo-list"
                 v-for="(item, index) in todo">
                <v-layout row class="todo-list__items">

                    <v-flex xs1>
                        <v-checkbox color="blue" v-model="item.isCompleted"></v-checkbox>
                    </v-flex>

                    <v-flex xs9>
                        <p>{{item.massage}}</p>
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

        </v-container>
    </div>
</template>

<script>
	import AppHeader from './AppHeader'

	export default {
		components: {AppHeader},
		name: "app-todo",
		data() {
			return {
				header: "Todo",
				massage: ''
			}
		},
		methods: {
			addTodoItem(){
				this.todo.push({
					isCompleted: false,
					isEditing: false,
					massage: this.massage
                });
                this.massage = ''
            },
            removeTodoItem(index){
	            console.log(index);
	            this.todo.splice(index, 1)
            }
        },
        computed: {
			todo(){
				return this.$store.state.todo.todoItems
            }
        }
	}
</script>

<style lang="stylus" scoped>

    .todo-form
        display flex
        .todo-send
            margin-top 13px

    .todo-list
        .todo-editing
            .todo-editing__btn
                min-width auto

</style>
