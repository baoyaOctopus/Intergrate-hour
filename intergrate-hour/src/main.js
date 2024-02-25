import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const app = createApp(App)
app.use(Antd);

app.config.globalProperties.$antLocale = zhCN;
app.use(router).mount('#app');
