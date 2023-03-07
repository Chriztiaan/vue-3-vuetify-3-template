<template>
    <div>Task List:</div>
    <v-card width="600" flat>
        <div v-if="loading" class="d-flex justify-center">
            <v-progress-circular class="mt-8" :indeterminate="true" />
        </div>
        <div v-else class="d-flex flex-column">
            <task v-for="task in tasks" :key="task.uuid" :task="task" @complete="completeTask(task)" />

            <div class="d-flex align-center mt-2">
                <v-text-field v-model="taskText" hide-details variant="outlined" density="compact"
                    placeholder="New task name...">
                </v-text-field>
                <v-btn class="ml-4" :disabled="disableCreate" icon="mdi-plus" size="40" rounded="lg" variant="outlined"
                    @click="addTask" />
            </div>

        </div>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task as TaskModel } from '../models/task';
import { useTaskStore } from '../stores/taskStore';
import Task from './Task.vue';

export default defineComponent({
    components: { Task },
    computed: {
        tasks(): TaskModel[] {
            return useTaskStore().tasks;
        },
        loading(): boolean {
            return useTaskStore().loading;
        },
        disableCreate(): boolean {
            return !this.taskText;
        }
    },
    mounted() {
        useTaskStore().requestTasks();
    },
    data() {
        return {
            taskText: ""
        };
    },
    methods: {
        addTask(): void {
            useTaskStore().addTask(new TaskModel(this.taskText));
            this.taskText = "";

        },
        completeTask(task: TaskModel): void {
            useTaskStore().completeTask(task);
        }
    }
});
</script>