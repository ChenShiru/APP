<template>
    <div>
        
            <h2>photo</h2>
            <h2>photo</h2>
            <h2>photo</h2>
            <h2>photo</h2>
           
    </div>
</template>

<script>
    export default {
      mounted:function(){
        this.$store.commit('change',{bgColor:'black',title:'Photos'})
    }
    }
</script>

<style scoped>

</style>