import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage/HomePage'
import FormHS from '@/views/formHs/FormHS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage

    },
    {
      path: '/themmoihoso',
      name: 'FormHS',
      component: FormHS

    }
  ]
})
