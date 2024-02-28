import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
//Global registration for component.
import PageFooter from './components/Footer.vue';
import PageHeader from './components/Header.vue';

console.log('at main.js, before calling createApp() function');
createApp(App)
  .component('PageHeader', PageHeader)
  .mount('#app');
console.log('at main.js, after calling createApp() function');
