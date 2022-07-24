import store from './store'
import DefaultLayout from '~/layouts/Default.vue'

import 'bootstrap-4-grid/css/grid.min.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const App = (Vue, {appOptions}) => {
  Vue.component('Layout', DefaultLayout)
  Vue.prototype.$gsap = gsap
}

export default App
