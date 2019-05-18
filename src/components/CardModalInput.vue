<template>
    <div>
        <input class="modal-body-input" 
            type="text" placeholder="Item" 
            v-model="item"
            @keyup.enter="onAddItem">
        <button class="btn-gray" @click="onAddItem">Add Item</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: '',
        }
    },
    methods: {
        onAddItem() {
            if (this.item) {
                this.$events.$emit('addChecklist', this.item);
            } else {
                alert('Please enter a valid value');
            }
            this.item = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-body-input {
        border: 1px solid;
        margin-left: 10px;
        width: 62%;
        font-size: 14px;
        padding: 7px;
    }
</style>
