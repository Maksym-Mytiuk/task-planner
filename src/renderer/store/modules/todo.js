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
		removeTodoItem(state, index) {
			state.todoItems.splice(index, 1)
		},
		isCompleteItem(state, itemData) {
			state.todoItems[itemData.index].isCompleted = !itemData.isChecked
		}
	},
	getters: {
		getFilteredTodo: (state) => (value) => {
			return state.todoItems.filter((item) => {
				switch (value) {
					case 'completed':
						return item.isCompleted === true;
					case 'uncompleted':
						return item.isCompleted === false;
					default:
						return item;
				}
			})
		}
	}
};
