import './bootstrap';
import Home from './components/Home.vue';
import Card from './components/Card.vue';
import AddCard from './components/AddCard.vue';
import CardModal from './components/CardModal.vue';
import CardModalInput from './components/CardModalInput.vue';
import DeleteCardModal from './components/DeleteCardModal.vue';
import ChangeColorModal from './components/ChangeColorModal.vue';

Vue.component('home', Home);
Vue.component('card', Card);
Vue.component('add-card', AddCard);
Vue.component('card-modal', CardModal);
Vue.component('card-modal-input', CardModalInput);
Vue.component('delete-card-modal', DeleteCardModal);
Vue.component('change-color-modal', ChangeColorModal);

new Vue({
    el: '#app'
});