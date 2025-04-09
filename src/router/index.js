import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Profil from '../views/Profil.vue'

const appTitle = 'HelloWorld App'

const routes = [
	{ path: '/', redirect: 'dashboard'}, 
	{
		path: '/dashboard',
		component: Dashboard,
		meta: {
			title: `Dashboard - ${appTitle}`
		}
	},
	{
		path: '/profil',
		component: Profil,
		meta: {
			title: `Profil - ${appTitle}`
		}
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.afterEach((to) => {
	document.title = to.meta.title || appTitle
})

export default router