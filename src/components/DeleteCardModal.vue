<template>
    <div class="modal">
        <div class="delete-modal">
            <div class="modal-content">
                <div class="modal-message">
                    <h5>Are you sure you want to delete this?</h5>
                </div>
                <div class="btn-container">
                    <button class="btn-gray" @click="onCancel">Cancel</button>
                    <button class="btn-danger" @click="onDelete">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        onDelete() {
            this.$events.$emit('deleteCard', true);
        },
        onCancel() {
            this.$events.$emit('deleteCard', false);
        }
    }
}

</script>
<style lang="scss" scoped>
    .delete-modal {
        background: #fff;
        width: 320px;
        margin: auto;
        height: 155px;
    }

    .modal-content {
        margin-top: 50%;
    }

    h5 {
        font-size: 20px;
        margin: 0;
        margin-top: 10px;
    }
    .modal-message, .btn-container {
        padding: 10px;
        margin-left: 20px;
    }
    
</style>

