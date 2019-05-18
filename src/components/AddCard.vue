<template>
     <div class="add-card">
         <form @submit.prevent="onAdd">
            <textarea
                class="textarea-input" 
                rows="2" 
                placeholder="Add card" 
                v-model="item" 
                @keyup.enter="onAdd"></textarea>
            <button class="btn-gray" type="submit">Add Card</button>
         </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item: ''
        }
    },
    methods: {
        onAdd() {
            if (this.item == '') { 
                alert('Please enter a valid value!')
            } else {
                this.$events.$emit('addItem', this.item);
                this.item = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .textarea-input {
        resize: none;
        font-size: 18px;
        padding: 14px;
        border: 1px solid #9a8484;
        width: 92%;
    }
</style>

