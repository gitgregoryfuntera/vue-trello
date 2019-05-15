import './bootstrap';
import Home from './components/Home.vue';
import Card from './components/Card.vue';
import AddCard from './components/AddCard.vue';
import CardModal from './components/CardModal.vue';

Vue.component('home', Home);
Vue.component('card', Card);
Vue.component('add-card', AddCard);
Vue.component('card-modal', CardModal);

new Vue({
    el: '#app'
});