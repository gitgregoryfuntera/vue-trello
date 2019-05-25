<template>
    <div>
        <card-modal :itemDetails="item" 
            :taskIndex="index" 
            :cardIndex="cardIndex"
            v-if="showModal" 
            @close="shoModal = false"></card-modal>
        <draggable :list="cards" :group="{name: 'tasks'}">
            <div class="card bg-light" 
                v-for="(card, index) in cards" 
                :key="index" 
                :item="card"
                @click="onShowModal(card,index)">
                <div class="card-title">
                    <h5>{{ card.item }}</h5>
                </div>
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
    props: {tasks: Array, cardIndex: Number},
    data() {
        return {
            cards: this.tasks,
            showModal: false,
            item: {},
        }
    },
    created() {
        this.$events.listen('addItem-' + this.cardIndex, item => {
                this.cards.push({
                    item: item, 
                    description:'',
                    checklist: []
                });
            }
        );
        
        this.$events.listen('showModal', isShow => {
            this.showModal = false;
        });

        this.$events.listen('delTask-' + this.cardIndex, index => {
            this.onRemoveTask(index);
            this.showModal = false;
        });
    },
    beforeDestroy() {
        this.$events.$off('addItem-' + this.cardIndex);
    },
    methods: {
        onShowModal(item, index) {
            this.showModal = true;
            this.item = item;
            this.index = index;
        },
        onRemoveTask(index) {
            let templist = this.cards;
            this.cards = templist.filter((value, valIndex) =>  valIndex !== index);
            this.showModal = false;
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
