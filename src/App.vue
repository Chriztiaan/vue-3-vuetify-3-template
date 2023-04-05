<template>
	<!-- v-app is Vuetify's base wrapper component -->
	<v-app>
		<layout />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from './core/components/layout/Layout.vue';

export default defineComponent({
	components: { Layout },
});
</script>
