<template>
  <!-- v-app is Vuetify's base wrapper component -->
  <v-app>
    <HelloWorld />
    <TaskList />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './core/components/HelloWorld.vue';
import TaskList from './modules/task/components/TaskList.vue';

export default defineComponent({
  components: { HelloWorld, TaskList },
});
</script>