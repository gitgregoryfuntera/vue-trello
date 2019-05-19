<template>
    <div class="modal">
        <div class="modal-content bg-light">
            <div class="modal-header">
                <h5 class="modal-title">Title</h5>
                <input class="modal-input" type="text" placeholder="Task" v-model="task.item">
            </div>
            <div class="modal-body">
                <h5 class="modal-subtext">Descripiton</h5>
                <div class="modal-description">
                    <textarea 
                        class="textarea-input"
                        rows="2" 
                        placeholder="Description"
                        v-model="task.description"></textarea>
                </div>
                <h5 class="modal-subtext">Checklist</h5>
                <card-modal-input></card-modal-input>
                <ul>
                    <li v-for="(checklist,index) in task.checklist" :key="index">
                        <div class="item">
                            <input type="checkbox" v-model="checklist.done">
                            <span>{{ checklist.item }}</span>
                            <i class="material-icons" @click="onRemoveChecklist(index)">clear</i>
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
    props: {itemDetails: Object},
    created() {
        this.$events.listen('addChecklist', item => {
            this.task.checklist.push({
                item: item,
                done: false
            });
        });
    },
    beforeDestroy() {
        this.$events.$off('addChecklist');
    },
    data() {
        return {
            task: this.itemDetails,
        }
    },
    methods: {
        onCloseModal() {
            this.$events.$emit('showModal', false);
        },
        onRemoveChecklist(index) {
            let templist = this.itemDetails.checklist;
            this.itemDetails.checklist = templist.filter((value, valIndex) => valIndex !== index);
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

    .modal-title {
        margin: 0px;
        font-size: 20px;
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

                i:hover {
                    cursor: pointer;
                } 
            }
        }
    }
</style>


