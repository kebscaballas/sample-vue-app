<template>
    <b-container fluid>
        <b-row no-gutters>
            <b-col>
                <carousel></carousel>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col sm="6" md="3" class="item">
                <b-img src="./assets/flat-angry.jpg" fluid-grow rounded="circle" alt="Angry Image"/>
            </b-col>
            <b-col sm="6" md="3" class="item">
                <b-img src="./assets/flat-angry.jpg" fluid-grow rounded="circle" alt="Angry Image"/>
            </b-col>
            <b-col sm="6" md="3" class="item">
                <b-img src="./assets/flat-angry.jpg" fluid-grow rounded="circle" alt="Angry Image"/>
            </b-col>
            <b-col sm="6" md="3" class="item">
                <b-img src="./assets/flat-angry.jpg" fluid-grow rounded="circle" alt="Angry Image"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Carousel from './components/Carousel'
    export default {
        name: 'Home',
        components: {
            Carousel
        }
    }
</script>

<style scoped>
    .container-fluid {
        padding: 0;
    }
</style>