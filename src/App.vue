<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
			<a class="navbar-brand" href="#">{{ judul }}</a>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/dashboard" class="nav-link">Dashboard</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/profil" class="nav-link">Profil</router-link>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container mt-4">
			<router-view />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				judul: 'Hello, World! App'
			}
		}
	}
</script>