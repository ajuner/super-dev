import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

import { useComponent } from './component';

const app = createApp(App);

useComponent(app);

app.use(router);
app.mount('#app');
