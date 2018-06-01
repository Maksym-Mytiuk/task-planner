export default {
	state: {
		todoItems: [
			{
				id: 1,
				isCompleted: true,
				isEditing: false,
				massage: 'Todo test text lorem ipsum',
			},
			{
				id: 2,
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
