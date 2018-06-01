<template>
    <div class="todo-form">
        <v-layout row column>
            <v-form>
                <v-text-field color="blue"
                              label="Todo text..."
                              v-model.trim="massage"
                              @keyup.enter="addTodoItem"
                              :counter="50">
                </v-text-field>

                <v-btn outline
                       color="blue"
                       class="todo-send" @click="addTodoItem">Send
                </v-btn>
            </v-form>
        </v-layout>
        <v-snackbar :timeout="1800" :color="'error'" v-model="snackbar">
            {{error}}
            <v-btn dark flat @click="snackbar">Close</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
	export default {
		name: "TodoForm",
		data() {
			return {
				massage: '',
				error: 'Invalid number of characters',
				snackbar: false,
			}
		},

		methods: {
			addTodoItem() {
				const todoItem = {
					isCompleted: false,
					isEditing: false,
					massage: this.massage
				};

				if (this.massage.length > 0 && this.massage.length <= 50) {
					this.$store.commit('addTodoItem', todoItem);
					this.massage = ''
				} else {
					this.snackbar = true
				}

			}
		}
	}
</script>

<style lang="stylus" scoped>

    form
        display flex
        .todo-send
            margin-top 13px

</style>
