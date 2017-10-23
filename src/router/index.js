import Vue from 'vue'
import Router from 'vue-router'
import Video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'video',
      component: Video
    }
  ]
})
