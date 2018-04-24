<template>
    <div>
            <ul class="musicList">
                <li v-for="(obj,index) in musicData" :key="index" >
                        <router-link :to="'/musicDetail/'+obj.id"><img :src="obj.bg" alt=""></router-link>
                </li>
            </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
               musicData:[]
            }
        },
        mounted:function(){
            this.$store.commit('change',{bgColor:'green',title:'Musics'})
            axios.get('/static/data/musiclist.json').then((res)=>{
                    console.log(res);
                    this.musicData = res.data.albums;
            }).catch()
        }
    }
</script>

<style scoped>
.musicList li{
 float: left;
 width: 50%;
}
.musicList li img{
    width: 100%;  
}
</style>