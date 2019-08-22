IconSelector
====

> Icon selection component, often used when setting an icon for a certain data
> eg: Set an icon for each menu when setting up the menu list

The component consists of [@yeti1](https://github.com/timothyhalley) Package



### Way of use

```vue
<template>
	<div>
       <icon-selector @change="handleIconChange"/>
    </div>
</template>

<script>
import IconSelector from '@/components/IconSelector'

export default {
  name: 'YourView',
  components: {
    IconSelector
  },
  data () {
    return {
    }
  },
  methods: {
    handleIconChange (icon) {
      console.log('change Icon', icon)
    }
  }
}
</script>
```



### 事件


| Name   | Description                | Type   | Default |
| ------ | -------------------------- | ------ | ------ |
| change | Triggered when the `icon` selection is changed | String | -      |
