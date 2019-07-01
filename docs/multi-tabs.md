Multiple (page) label mode
====


## Let the framework support open pages to add multiple tags, you can switch at any time

### About how to remove this feature
  1. Remove `/src/components/layouts/BasicLayout.vue` L3, L12, L19
      ```vue
      <multi-tab v-if="$store.getters.multiTab"></multi-tab>
      ```
  2. Remove `/src/config/defaultSettings.js` L25

  3. Remove `src/store/modules/app.js` L27, L76-L79, L118-L120
  
  4. Remove `src/utils/mixin.js` L21
  
  5. Delete the component directory `src/components/MultiTab`

> Above `L x` represents line N, such as L3 = line 3