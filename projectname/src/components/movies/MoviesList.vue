<template>
    <div>
           <ul class="movieList">
               <li v-for="(obj,index) in moviesList" :key="index" @click="fn(obj.id)">
                   <div class="img-box">
                       <img :src="obj.img" alt="">
                   </div>
                    <div class="info-box">
                        <h2 class="title">{{obj.nm}}</h2>
                        <p>{{obj.ver}}</p>
                        <p>{{obj.star}}</p>
                        <p>{{obj.showInfo}}</p>
                    </div>
               </li>
           </ul>
           <div class="load" v-show="isLoad">
               <img src="@/assets/image/timg.gif" alt="">
           </div>
           <div class="end" v-show="isEnd">
               我是有底线的···
           </div>
            
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                moviesList:[],
                isLoad:true,
                isEnd:false,
                flage:true
            }
        },
        methods:{
            
            load(){
                if(this.flage){
                    this.flage = false;
                 axios.get(API_INTERFACE+"http://m.maoyan.com/movie/list.json?type=hot&offset="+ this.moviesList.length+"&limit=10").then(
                 (res)=>{
                    console.log(res);
                    if(res.data.data.movies.length <10){
                        this.isEnd = true;
 
                    }
                    this.moviesList = [...this.moviesList,...res.data.data.movies];
                    this.isLoad = false;
                        }
                    ).catch(
                        ()=>{
                            console.log("请求失败")
                        }
                    )
                    this.flage = true
                        }
                
                  },
                  fn(id){
                       this.$router.push('/movieDetail/'+id);
                  }
                },

    mounted:function(){
        this.$store.commit('change',{bgColor:'rgb(33,150,243)',title:'Movies'});
        this.load();
        window.onscroll =()=>{
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if(scrollTop + clientHeight ==scrollHeight){
                if(!this.isEnd){
                this.load();
                this.isLoad = true;
                }
            } 
        }
    }
    }
</script>

<style scoped>
    .load{
        text-align: center;
    }
    .end{
        text-align: center;
    }
   .movieList li{
        display: flex;
        padding: 0.2rem;
        border-bottom: 0.02rem solid #ccc;
    }
    .img-box{
        flex-grow: 1;
        width: 0;
        margin-right: 0.2rem;
    }
    .img-box img{
        width: 100%;
    }
    .info-box{
        flex-grow: 2;
        width: 0;
    }
    .title{
        font-size: 0.33rem;
        font-weight: bold;
    }
    .info-box p{
        font-size: 0.27rem;
    }

</style>