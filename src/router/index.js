import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/admin/Dashboard.vue'
import Profil from '../views/admin/Profil.vue'
import HelloWorld from '../components/HelloWorld.vue'

const appTitle = 'HelloWorld App'

const routes = [
	{
		path: '/', 
		component: HelloWorld,
	}, 
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