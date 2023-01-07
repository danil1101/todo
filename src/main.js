import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'overlayscrollbars/overlayscrollbars.css';;
import App from './App';
import components from '@/components/UI';
import router from '@/router/router';

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component)
})

app
	.use(router)
	.mount('#app')