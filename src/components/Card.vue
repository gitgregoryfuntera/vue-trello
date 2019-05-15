<template>
    <div>
        <div class="card bg-light" 
             v-for="(card, index) in cards" 
             :key="index" 
             :item="card"
             @click="showModal">
            <div class="card-title">
                <h5>{{ card.item }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {item: 'Wash Laundry'},
                {item: 'Wash Laundry'},
                {item: 'Wash Laundry'},
                {item: 'Wash Laundry'},
                {item: 'Wash Laundry'}
            ]
        }
    },
    created() {
        this.$events.listen('addItem', item => this.cards.push({item: item}));
    },
    methods: {
        showModal() {
            alert('show modal');
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%;
        height: 50px;
        border: 1px solid #9a8484;
        margin-bottom: 5px;
        border-bottom: 4px solid #9a8484;
        .card-title {
            margin: 15px;
        }
        h5 {
            margin: 0;
            padding: 0;
        }
    }
    .card:hover {
        cursor: pointer;
        background: #d2cfcf;
    }
</style>
