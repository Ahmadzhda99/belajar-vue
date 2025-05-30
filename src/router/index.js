import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/admin/Dashboard.vue'
import Profil from '../views/admin/Profil.vue'
import HelloWorld from '../components/HelloWorld.vue'

const appTitle = 'HelloWorld App'

const routes = [
	{
		path: '/', 
		component: HelloWorld,
		props: { msg: 'Hello, World!' },
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
	history: createWebHistory(), /* tambahkan '/dir/subdir/' jika masuk ke folder. kosongi jika berada di root.*/
	routes
})

router.afterEach((to) => {
	document.title = to.meta.title || appTitle
})

export default router