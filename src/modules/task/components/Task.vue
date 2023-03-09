<template>
    <div>
        <v-card class="mb-4 pa-3" variant="outlined" rounded="lg" height="60" min-height="60">
            <div class="d-flex justify-space-between align-center fill-height">
                <!-- Flex explained at: https://vuetifyjs.com/en/styles/flex/ -->
                <div :class="{ 'text-decoration-line-through': task.moo }">
                    {{ task.name }}
                </div>
                <v-btn v-if="!task.completed" variant="outlined" @click="$emit('complete')">Complete</v-btn>
            </div>
        </v-card>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Task } from '../models/task';

export default defineComponent({
    props: {
        task: {
            type: Object as PropType<Task>,
            required: true
        }
    },
    // Allows you to declare all the events of a component, parent components will have intellisense for all these declared events (via Volar)
    emits: {
        complete: null // No validation function (https://vuejs.org/guide/components/events.html#events-validation)
    },
});
</script>