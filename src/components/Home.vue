<template>
    <div>
        <transition-group tag="div" class="grid-container" >
            <div v-for="(task,index) of tasks" :key="index" class="grid-item" swapItem>
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
        </transition-group>
    </div>
</template>

<script>
import { Swappable } from '@shopify/draggable';

import Tasks from '../mocks/tasks.mock';
export default {
    mounted() {
        const swappable = new Swappable(
	        document.querySelectorAll('[swappable]'), {
	            draggable: '[swapItem]',
	            delay: 0,
        });
        swappable.on('drag:start', () => {
	        console.log('drag:start')
        });
    },
    data() {
        return {
            tasks: Tasks,
        }
    },
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


