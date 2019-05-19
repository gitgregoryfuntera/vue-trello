<template>
    <div>
        <draggable :list="tasks" @start="start" class="grid-container">
            <div v-for="(task,index) of tasks" :key="index" class="grid-item">
                <div class="panel bg-gray">
                    <div class="panel-header">
                        <h2>{{ task.title }}<span class="btn-more">
                            <i class="material-icons">more_horiz</i></span>
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
    created() {
        //
    },
    data() {
        return {
            tasks: Tasks,
        }
    }
}
</script>

<style lang="scss" scoped>
    .panel {
        border: 1px solid;
        max-width: 350px;
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
        }
    }

    .panel-body {
        margin: 8px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 370px 370px 370px 370px;
    }

    .grid-item {
        margin-bottom: 5px;
    }
</style>


