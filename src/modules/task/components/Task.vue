<template>
    <div>
        <v-card class="mb-4" variant="outlined" rounded="lg">
            <v-card-item>
                <div class="d-flex justify-space-between"> <!-- Flex explained at: https://vuetifyjs.com/en/styles/flex/ -->
                    <div>
                        {{ task.name }}
                    </div>
                    <div>{{ task.completed }}</div>
                </div>
            </v-card-item>
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
    }
});
</script>