<script>
import Sidebar from "../../components/sidebar.vue"
import router from '../../router';
export default {
    name:"Home",
    components:{Sidebar},
    setup() {
       const test = () => {
            router.push('/home/admin');
        } 
        return { test }
    }
    
}
</script>

<template>
    <div class="flex justify-between static">
        <Sidebar class="sticky top-0"/>
        <main class="flex-1 pt-24 pb-24 pr-16 pl-14">
            <router-view></router-view>
        </main>
    </div>
</template>

<style>
</style>