<template>
    <div class="modal">
        <div class="modal-header">
            Modal Here
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
            this.$events.$emit('showModal');
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        position: absolute;
        z-index: 1;
        top: 0;
        width: 90%;
        background: red;
        height: 75%;
        margin-top: 50px;
    }
</style>


