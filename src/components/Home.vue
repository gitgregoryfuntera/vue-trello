<template>
    <div>
        <div class="header">
            <div class="header-btn">
                <button class="btn-gray" @click="onAddTask"><span v-html="element"></span></button>
            </div>
            <div class="title">
                <input type="text" 
                    placeholder="Task"
                    class="header-input" 
                    v-model="task" 
                    @keyup.enter="onAddTask">
            </div>
            <div class="change-color" @click="onShowColors">
                <i class="material-icons">format_color_fill</i>
            </div>
            <change-color-modal v-if="changeColor"></change-color-modal>
        </div>
        <delete-card-modal v-if="showDelModal"></delete-card-modal>
        <draggable v-model="tasks" class="grid-container">
            <div v-for="(task,index) of tasks" :key="index" class="grid-item">
                <div class="panel bg-gray panel-borders">
                    <div class="panel-header">
                        <h2>{{ task.title }}<span class="btn-more" @click="showDeleteModal(index)">
                            <i class="material-icons">delete</i></span>
                        </h2>
                    </div>
                    <div class="panel-body">
                        <card :tasks="task.tasks" :cardIndex="index"></card>
                        <add-card :cardIndex="index"></add-card>
                    </div>
                </div>
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import Tasks from '../mocks/tasks.mock';
export default {
    mounted() {
        this.$events.listen('deleteCard', delFlag => {
            if (delFlag) {
                this.onDeleteCard();
            } else {
                this.showDelModal = false;
            }
        });

        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    data() {
        return {
            tasks: Tasks,
            task: '',
            showDelModal: false,
            changeColor: false,
            delIndex: 0,
            width: 0,
            element: '',
        }
    },
    methods: {
        handleResize() {
            this.width = window.innerWidth;
            if (this.width < 641) {
                this.element = `<i class="material-icons add-icon">add</i>`;
            } else {
                this.element = `Add Task`;
            }
        },
        onShowColors() {
            this.changeColor = !this.changeColor ? true : false;
        },
        onAddTask() {
            if (this.task) {
                this.tasks.push({title: this.task, tasks: []});
                this.task = '';
            } else {
                alert('Please enter a valid task');
            }
        },
        showDeleteModal(index) {
            this.delIndex = index;
            this.showDelModal = true;
        },
        onDeleteCard() {
            let templist = this.tasks
            this.tasks = templist.filter((value, valIndex) => valIndex !== this.delIndex);
            this.showDelModal = false;
        }
    }
}
</script>

<style lang="scss" scoped>

    .header {
        display: flex;
        .header-input {
            margin: 10px;
            font-size: 18px;
            padding: 5px;
            width: 89%;
            border: 1px;
            border-bottom: 5px solid #b49a9a;
        }

        .header-btn {
            margin-top: 8px;
            margin-left: 10px;
        }

        .change-color {
            margin: 10px;
            cursor: pointer;
            i {
                font-size: 36px;
                color: #fff;
            }
        }
    }
    .panel {
        max-width: 300px;
        margin: auto;
    }

    .panel-header {
        padding-right: 8px;
        padding-left: 8px;
        padding-top: 10px;
        h2 {
            margin: 0px;
            padding: 0px;
        }
        .btn-more {
            float:right;
            cursor: pointer;
        }
    }

    .panel-body {
        margin: 8px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 315px 315px 315px 315px;
    }

    .grid-item {
        margin-bottom: 5px;
    }
</style>


