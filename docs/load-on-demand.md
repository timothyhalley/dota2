Load on demand, reduce packaging
================================



## Introducing component dependencies on demand

`CascadeZen Pro` The default encoding work does not support on-demand introduction, but can be combined by the following operations [Ant Design Of Vue](https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/) Official documentation for on-demand introduction.

- Increase project on-demand introduction
- Modify the way to introduce components



1. Increase the need to introduce on-demand  `babel-plugin-import` 
And modify the file `babel.config.js` 
   ```ecmascript 6
   module.exports = {
     presets: [
       '@vue/app'
     ],
     plugins: [
       [ "import", {
         "libraryName": "ant-design-vue",
         "libraryDirectory": "es",
         "style": "css"
       } ]
     ]
   }
   ```


2. Modify the way to introduce components (note that this is just an example, please fully introduce the components you need)

   file `@/components/use.js`

   ```javascript
   import Vue from 'vue'
   import {
       Input, 
       Button, 
       Select, 
       Card, 
       Form, 
       Row, 
       Col, 
       Modal, 
       Table, 
       notification
   } from 'ant-design-vue'
   
   Vue.use(Input)
   Vue.use(Button)
   Vue.use(Select)
   Vue.use(Card)
   Vue.use(Form)
   Vue.use(Row)
   Vue.use(Col)
   Vue.use(Modal)
   Vue.use(Table)
   Vue.use(notification)
   
   Vue.prototype.$notification = notification;
   ```


3. Finally at `main.js` Introduced `@/components/use.js` The file can be as follows

   ```javascript
   
   import Vue from 'vue'
   import App from './App'
   
   // Introducing a unified import file for on-demand components
   import './components/use'
   
   import './style/index.less'
   
   
   Vue.config.productionTip = false
   
   new Vue({
     render: h => h(App),
   }).$mount('#app')

   ```

**Specific complete implementation can refer to the branch [feature/demand_load](https://github.com/sendya/ant-design-pro-vue/tree/feature/demand_load)**







## Other: Reduce package size



1.   Ant Design Vue 1.2.x Version, adopted ant-design Official program svg Icon The package of the whole project will become much larger, and the icon can be loaded as needed. https://github.com/HeskeyBaozi/reduce-antd-icons-bundle-demo
2. moment Load on demand https://github.com/jmblog/how-to-optimize-momentjs-with-webpack