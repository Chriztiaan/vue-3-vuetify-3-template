<template>
    <div>
        <h1>Example page component</h1>
        <task-list />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from './components/TaskList.vue';

export default defineComponent({
    components: { TaskList }
})
</script>