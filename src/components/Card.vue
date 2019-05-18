<template>
    <div>
        <card-modal :itemDetails="item" 
            :taskIndex="index" 
            v-if="showModal" 
            @close="shoModal = false"></card-modal>
        <div class="card bg-light" 
             v-for="(card, index) in cards" 
             :key="index" 
             :item="card"
             @click="onShowModal(card,index)">
            <div class="card-title">
                <h5>{{ card.item }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {tasks: Array},
    data() {
        return {
            cards: this.tasks,
            showModal: false,
            item: {},
            index: 0,
        }
    },
    created() {
        this.$events.listen('addItem', item => this.cards.push({
            item: item, 
            description:'',
            checklist: []
        }));
        this.$events.listen('showModal', isShow => this.showModal = isShow);
    },
    beforeDestroy() {
        this.$events.$off('addItem');
        this.$events.$off('showModal');
    },
    methods: {
        onShowModal(item, index) {
            this.showModal = true;
            this.item = item;
            this.index = index;
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
