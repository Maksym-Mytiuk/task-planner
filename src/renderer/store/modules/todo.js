export default {
	state: {
		todoItems: [
			{
				isCompleted: false,
				isEditing: false,
				massage: 'Todo test text lorem ipsum',
			},
			{
				isCompleted: false,
				isEditing: false,
				massage: 'Todo test text lorem ipsum!!!',
			}
		]
	},
	mutations: {
		addTodoItem(state, todoItem) {
			state.todoItems.push(todoItem)
		},
		removeTodoItem(state, index){
			state.todoItems.splice(index, 1)
		}
	}
};
