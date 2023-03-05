<template>
    <v-app-bar density="compact" elevation="1">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Template project</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer permanent :width="drawer ? 180 : 64">
        <v-list class="pa-0">
            <v-list-item class="pa-0" v-for="item of routes" :key="item.name">
                <v-tooltip :text="item.name?.toString() || ''" :disabled="drawer">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" :class="{ 'd-flex justify-start': drawer }" height="48px" width="100%"
                            :to="item" :active="item.name == activeRouteName">
                            <v-icon :icon="item.icon" />
                            <template v-if="drawer">
                                <div class="ml-3">{{ item.name }}</div>
                            </template>
                        </v-btn>
                    </template>
                </v-tooltip>

            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script lang="ts">
import { routes } from '@/plugins/router';
import { defineComponent } from 'vue';

export default defineComponent({
    mounted() {
        console.log(routes);
    },
    computed: {
        activeRouteName(): string {
            return this.$route.name?.toString() || '';
        }
    },
    data: () => ({
        drawer: false,
        routes
    })
});
</script>