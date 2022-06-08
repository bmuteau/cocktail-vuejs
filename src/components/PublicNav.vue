<template>

  <img alt="Vue logo" src="../assets/logo.png">
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cocktails">Cocktail</router-link> | 
    <router-link to="/contact">Contact</router-link>
  </nav>

</template>

<script>
export default {
   name:'PublicNav',
}
</script>
<style>
    img{
        position: absolute;
        right: 30px;
        height: 50px;
    }
</style>