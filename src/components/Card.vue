<template>
    <div>
        <div class="card bg-light" v-for="card in cards" v-bind:key="card.id">
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
                {item: 'Wash Laundry', id:1},
                {item: 'Wash Laundry', id:2},
                {item: 'Wash Laundry', id:3},
                {item: 'Wash Laundry', id:4},
                {item: 'Wash Laundry', id:5}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%;
        height: 50px;
        border: 1px solid;
        margin-bottom: 5px;
        .card-title {
            margin: 15px;
        }
        h5 {
            margin: 0;
            padding: 0;
        }
    }
</style>
