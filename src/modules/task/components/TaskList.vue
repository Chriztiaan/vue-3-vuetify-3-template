<template>
    <div>Task List:</div>
    <v-card width="600" flat>
        <div v-if="loading" class="d-flex justify-center">
            <v-progress-circular class="mt-8" :indeterminate="true" />
        </div>
        <template v-else>
            <Task v-for="t in tasks" :key="t.uuid" :task="t" />
        </template>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Task as TaskModel } from '../models/task';
import { useTaskStore } from '../stores/todoStore';
import Task from './Task.vue';

export default defineComponent({
    components: { Task },
    computed: {
        tasks(): TaskModel[] {
            return useTaskStore().tasks;
        },
        loading(): boolean {
            return useTaskStore().loading;
        }
    },
    mounted() {
        useTaskStore().requestTasks();
    }
})
</script>