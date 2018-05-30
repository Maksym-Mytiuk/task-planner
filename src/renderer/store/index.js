import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules/'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todoList: [
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
	modules,
	strict: process.env.NODE_ENV !== 'production'
})
