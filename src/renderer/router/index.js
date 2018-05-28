import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'app',
			component: require('@/components/AppTodo').default
		},
		{
			path: '/planner',
			name: 'app-planner',
			component: require('@/components/AppPlanner').default
		},
		{
			path: '/notification',
			name: 'app-notification',
			component: require('@/components/AppNotification').default
		},
		{
			path: '*',
			redirect: '/',
		},
	]
})
