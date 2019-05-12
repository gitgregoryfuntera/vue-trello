import './bootstrap';
import Home from './components/Home.vue';
import Card from './components/Card.vue';

Vue.component('home', Home);
Vue.component('card', Card);
new Vue({
    el: '#app'
});