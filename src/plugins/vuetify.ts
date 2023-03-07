// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import * as labs from 'vuetify/labs/components';

export const vuetifyPlugin = createVuetify({
    components: { ...components, ...labs },
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi,
        }
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#A689E1' // Custom primary colour 
                }
            },
        },
    }
});