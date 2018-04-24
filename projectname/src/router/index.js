import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from '@/components/movies/MoviesList'
import MusicsList from '@/components/musics/MusicsList'
import BooksList from '@/components/books/BooksList'
import PhotosList from '@/components/photos/PhotosList'
import movieDetail from '@/components/movies/MovieDetail'
import musicDetail from '@/components/musics/MusicDetail'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component: MoviesList
    },
    {
      path: '/musicsList',
      component: MusicsList
    },
    {
      path: '/booksList',
      component: BooksList
    },
    {
      path: '/photosList',
      component: PhotosList
    },
    {
      path: '/movieDetail/:id',
      component: movieDetail
    },
    {
      path: '/musicDetail/:id',
      component: musicDetail
    }
  ]
})
