import './bootstrap';
import Home from './components/Home.vue';
import Card from './components/Card.vue';
import AddCard from './components/AddCard.vue';

Vue.component('home', Home);
Vue.component('card', Card);
Vue.component('add-card', AddCard);

new Vue({
    el: '#app'
});