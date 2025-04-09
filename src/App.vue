<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3 col-lg-2">
				<Sidebar />
			</div>
			<div class="col-md-9 col-lg-10 py-4">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
	data() {
		return {
			judul: 'Hello, World! App'
		}
	},
	components: {
		Sidebar
	}
}
</script>