<template>
    <b-carousel controls indicators id="main-carousel">
        <b-link :href="slide.url" v-for="slide in slides" :key="slide.id">
            <b-carousel-slide>
                <b-img slot="img" :src="slide.url" fluid-grow height="200" />
                <h3>{{slide.title}}</h3>
            </b-carousel-slide>
        </b-link>
    </b-carousel>
</template>

<script>
    export default {
        name: 'Carousel',
        data() {
            return {
                slide: 0,
                slides: []
            }
        },
        created: function() {
            this.$http.get('https://jsonplaceholder.typicode.com/photos').then(function(response) {
                this.slides = response.data.splice(0,4);
            });
        }
    }
</script>

<style>

</style>