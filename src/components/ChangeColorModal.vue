<template>
    <div class="color-modal">
        <div class="color">
            <ul>
                <li v-for="(color,index) in colors" 
                    :key="index" 
                    @click="onChangeColor(color)">
                    <div class="box-color" :style="{ background: color }"></div>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>

export default {
    data() {
        return {
            colors: [
                'blue',
                'red',
                'green',
                'gray'
            ],
            colorIndex: 0,
        }
    },
    methods: {
        onChangeColor(color) {
            document.body.style.background = color;
        }
    }
}
</script>

<style lang="scss">
    body {
        background: blue;
    }

    .color {
        position: absolute;
        z-index: 1;
        background: #fff;
        top: 50px;
        right: -35px;
        border: 1px solid #b49a9a;
        border-bottom: 5px solid #b49a9a;
        ul {
            margin: 0px;
            padding: 0px;
            li {
                list-style: none;
            }
        }
    }
    .color-modal {
        position: relative;
        display: inline-block;
    }
    .box-color {
        width: 100px;
        /* height: 30px; */
        height: 30px;
        margin: 8px;
        border-bottom: 3px solid #b49a9a;
    }
</style>
