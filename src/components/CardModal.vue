<template>
    <div class="modal">
        <div class="modal-content">
            Modal Here
        </div>
        <div class="modal-btn">
            <button @click="onCloseModal">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        // this.$events.listen('showModal', modal => (console.log(modal)));
    },
    methods: {
        onCloseModal() {
            this.$events.$emit('showModal', false);
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        z-index: 1;
        height: 100%;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }
</style>


