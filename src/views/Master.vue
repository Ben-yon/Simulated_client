<template>
<main class="app-main">
    <app-header/>
    <section >
        <app-sidebar/>
        <router-view/>
    </section>
</main>
</template>

<script>
import AppSidebar from '@/components/layouts/app-sidebar.vue';
import AppHeader from '@/components/layouts/app-header.vue';

export default {
    components: {
        AppHeader,
        AppSidebar
    }
    
}
</script>