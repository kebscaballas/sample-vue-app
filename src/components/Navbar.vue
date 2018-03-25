<template>
    <!-- <nav id="site-nav"  class="navbar navbar-light bg-light">
    	<a href="#" class="navbar-brand"><h5>Logo</h5></a>
    </nav> -->
    <b-navbar toggleable="sm" type="dark" variant="dark">
	    <b-navbar-brand href="/">
	    	<h5>Logo</h5>
	    </b-navbar-brand>
	    <b-navbar-nav class="ml-auto">
	    	<b-nav-item><b-link to="/" class="nav-link" exact>Home</b-link></b-nav-item>
	    	<b-nav-item><b-link to="/routertest" class="nav-link" exact>Router Test</b-link></b-nav-item>
	    </b-navbar-nav>
	</b-navbar>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
    .nav-link, .nav-link:visited {
    	color: #ffffff;
    }
</style>