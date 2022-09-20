import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage/HomePage'
import FormHS from '@/views/formHs/FormHS'
import Form from '@/views/form/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form

    },
    {
      path: '/homepage',
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
