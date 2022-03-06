<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
    name: "Home",
    setup() {
        const tbody = reactive([
            { id: 0, text: "test1" },
            { id: 1, text: "test2" },
            { id: 2, text: "test3" },
            { id: 3, text: "test4" },
        ]);

        return { tbody }
    },
}
</script>

<template>
    <div v-for="(item, idx) in tbody" :key="idx">{{ item.text }}</div>
</template>

<style>

</style>