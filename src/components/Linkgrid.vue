<template>
    <b-row no-gutters class="justify-content-center align-items-center linkgrid-item-container">
        <b-col v-for="(item, key) in gridItems" :key="key" sm="6" md="3" class="linkgrid-item">
            <div class="close-btn" v-on:click="deleteItem(item)">
                x
            </div>
            <div class="content-container">
                <h3>{{item.title}}</h3>
                <p>{{item.caption}}</p>
            </div>
        </b-col>
        <b-col v-if="gridItems.length === 0" class="empty-grid">
            <h3 class="text-center">No angry faces available.</h3>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'Linkgrid',
        data() {
            return {
                gridItems: [{
                        'title': 'Hello',
                        'caption': 'I am a caption',
                    }, {
                        'title': 'World',
                        'caption': 'I am also a caption',
                    }, {
                        'title': 'I\'m',
                        'caption': 'I am kind of a caption',
                    }, {
                        'title': 'Kebs',
                        'caption': 'I am another caption',
                    },
                ]
            }
        },
        methods: {
            deleteItem: function(item) {
                this.gridItems.splice(this.gridItems.indexOf(item), 1);
            }
        }
    }
</script>

<style scoped>
    .linkgrid-item-container {
        background-color: #10365f;
        min-height: 200px;
    }

    .linkgrid-item-container .linkgrid-item {
        background: url('../assets/flat-angry.jpg') center no-repeat;
        background-size: cover;
        min-height: 200px;
        border-top: 1px solid #000000;
        border-bottom: 1px solid #000000;
        border-right: 1px solid #000000;
        color: #10365f;
        position: relative;
    }

    .linkgrid-item-container .linkgrid-item:first-child {
        border-left: 1px solid #000000;
    }

    .linkgrid-item-container .linkgrid-item .content-container {
        padding: 0 20px;
        position: absolute;
        bottom: 0;
    }

    .linkgrid-item-container .linkgrid-item .close-btn {
        position: absolute;
        top: 0;
        right: 7px;
        color: #ffffff;
        cursor: pointer;
    }

    .linkgrid-item-container .empty-grid {
        color: #ffffff;
    }
</style>