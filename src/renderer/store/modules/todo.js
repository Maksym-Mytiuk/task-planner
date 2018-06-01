export default {
	state: {
		todoItems: [
			{
				id: Symbol('id'),
				isCompleted: true,
				isEditing: false,
				massage: 'Todo test text lorem ipsum',
			},
			{
				id: Symbol('id'),
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
		},
		isCompleteItem(state, payload){
			state.todoItems[payload.index].isCompleted = !payload.isChecked
		}
	}
};
