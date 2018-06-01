import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'app',
			component: require('@/pages/AppTodo').default
		},
		{
			path: '/planner',
			name: 'app-planner',
			component: require('@/pages/AppPlanner').default
		},
		{
			path: '/notification',
			name: 'app-notification',
			component: require('@/pages/AppNotification').default
		},
		{
			path: '*',
			redirect: '/',
		},
	]
})
