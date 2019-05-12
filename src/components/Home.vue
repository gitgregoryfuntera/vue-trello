<template>
    <div class="panel bg-gray">
        <div class="panel-header">
            <h2>To Do <span class="btn-more"><i class="material-icons">more_horiz</i></span></h2>
        </div>
        <div class="panel-body">
            <card></card>
            <textarea rows="2" placeholder="Add card"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello, Vue'
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

    textarea {
        resize: none;
        font-size: 18px;
        padding: 14px;
        border: 1px solid black;
        width: 92%;
    }
</style>


