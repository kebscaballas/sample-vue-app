<template>
    <b-container fluid>
        <b-row no-gutters>
            <b-col>
                <carousel></carousel>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col>
                <linkgrid></linkgrid> 
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Carousel from './components/Carousel'
    import Linkgrid from './components/Linkgrid'
    export default {
        name: 'Home',
        components: {
            Carousel,
            Linkgrid
        }
    }
</script>

<style scoped>
    .container-fluid {
        padding: 0;
    }
</style>