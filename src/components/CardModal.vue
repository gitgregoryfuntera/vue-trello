<template>
    <div class="modal">
        <div class="modal-content bg-light">
            <div class="modal-header">
                <input class="modal-input" type="text" placeholder="Task">
            </div>
            <div class="modal-body">
                <h5 class="modal-subtext">Descripiton</h5>
                <div class="modal-description">
                    <textarea 
                        class="textarea-input"
                        rows="2" 
                        placeholder="Description"></textarea>
                </div>
                <h5 class="modal-subtext">Checklist</h5>
                <input class="modal-body-input" type="text" placeholder="Item">
                <button class="btn-gray">Add Item</button>
                <ul>
                    <li>
                        <div class="item">
                            <input type="checkbox">
                            <span>Item</span>
                            <i class="material-icons">clear</i>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <input type="checkbox">
                            <span>Item</span>
                            <i class="material-icons">clear</i>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <input type="checkbox">
                            <span>Item</span>
                            <i class="material-icons">clear</i>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="modal-btn">
                <button class="btn-gray" @click="onCloseModal">Close</button>
            </div>
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
        background-color: rgba(0,0,0,0.8);
    }

    .modal-content {
        width: 340px;
        margin: auto;
        height: auto;
        min-height: 200px;
        margin-top: 45px;
    }
    
    .modal-header {
        margin: 10px;
        padding-top: 7px;
    }

    .modal-input {
        width: 95%;
        font-size: 18px;
        border: 1px solid;
        margin: 10px 0px 0px 0px;
        padding: 5px 0px 4px 7px;
    }

    .modal-subtext {
        margin: 0;
        padding: 5px;
        font-size: 20px;
        margin-left: 5px;
    }

    .modal-body-input {
        border: 1px solid;
        margin-left: 10px;
        width: 62%;
        font-size: 14px;
        padding: 7px;
    }
    .modal-description {
        margin-right: 20px;
        margin-left: 10px;
    }

    .modal-btn {
        padding: 10px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-left: 30px;
        margin-top: 12px;
        li {
            width: 90%;
            .item {
                input {
                    width: 20px;
                    height: 20px;
                }
                span {
                    font-size: 20px; 
                    position: relative;
                    top: -2px;
                }
                i {
                    float: right;
                    position: relative;
                    top: 4px;
                }
            }
        }
    }
</style>


