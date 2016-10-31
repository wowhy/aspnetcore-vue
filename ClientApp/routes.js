import Home from './views/Home'
import Demo1 from './views/Demo1'
import Demo2 from './views/Demo2'

export default [
  { name: 'home', path: '/', component: Home },
  { name: 'demo1', path: '/demo1', meta: { title: '测试页面1' }, component: Demo1 },
  { name: 'demo2', path: '/demo2', meta: { title: '测试页面2' }, component: Demo2 }
]
