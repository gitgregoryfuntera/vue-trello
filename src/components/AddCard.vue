<template>
     <div class="add-card">
         <form @submit.prevent="onAdd">
            <textarea
                class="textarea-input" 
                rows="2" 
                placeholder="Add card" 
                v-model="item" 
                @keyup.enter="onAdd"></textarea>
            <button class="btn-primary" type="submit">Add Card</button>
         </form>
    </div>
</template>
<script>
export default {
    props: {cardIndex: Number},
    data() {
        return {
            item: '',
        }
    },
    methods: {
        onAdd() {
            if (this.item.length === 0) { 
                alert('Please enter a valid value!')
            } else {
                this.$events.$emit('addItem-' + this.cardIndex, this.item);
                this.item = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

