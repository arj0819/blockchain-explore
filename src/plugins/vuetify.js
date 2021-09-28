import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                highContrast: '#000000',
                background: '#FFFFFF',
                footer: '#f5f5f5',
            },
            dark: {
                primary: '#1976D2',
                secondary: '#f5f5f5',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                highContrast: '#FFFFFF',
                background: '#121212',
                footer: '#272727',
            },
        }
    }
});
