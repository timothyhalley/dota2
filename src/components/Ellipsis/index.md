# Ellipsis Text automatic ellipsis

The text is too long to automatically process the ellipsis, and supports interception according to the length of the text and the maximum number of lines.



Reference method:

```javascript
import Ellipsis from '@/components/Ellipsis'

export default {
    components: {
        Ellipsis
    }
}
```



## Code demo  [demo](https://pro.loacg.com/test/home)

```html
<ellipsis :length="100" tooltip>
        The Microsoft co-founder marveled at how Jobs could mesmerize his staff.
        Jobs was a singular case and it would be hard to replicate his style successfully, Gates says.
</ellipsis>
```



## API


Parameters | Description | Type | Default
-----------|-------------|------|------
Tooltip | Tips for moving to text to display full content | boolean | -
Length | The maximum number of characters in the text intercepted by length, if it is exceeded, the interception is omitted | number | -