<template>
    <div class="bg-light p-3 vh-100 border-end">
        <RouterLink to="/" class="link-dark link-underline link-underline-opacity-0"><h4 class="mb-4">MyApp</h4></RouterLink>
        <ul class="nav flex-column">
            <li class="nav-item">
                <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/profil" class="nav-link">Profil</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style scoped>
.nav-link {
    color: #333;
}

.nav-link.router-link-active {
    font-weight: bold;
    color: #0d6efd;
}
</style>