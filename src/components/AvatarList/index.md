# AvatarList User avatar list


一Group user avatars, commonly used in project/team member lists. The avatar size can be specified by setting the `size` attribute.



Reference method:

```javascript
import AvatarList from '@/components/AvatarList'
const AvatarListItem = AvatarList.AvatarItem

export default {
    components: {
        AvatarList,
        AvatarListItem
    }
}
```



## 代码演示  [demo](https://pro.loacg.com/test/home)

```html
<avatar-list size="mini">
    <avatar-list-item tips="Timo" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/landscape/angularjs.png" />
    <avatar-list-item tips="Adro" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/036/square_256/vue.png" />
    <avatar-list-item tips="Vitx" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png" />
</avatar-list>
```
或
```html
<avatar-list :max-length="3">
    <avatar-list-item tips="Jake" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/landscape/angularjs.png" />
    <avatar-list-item tips="Andy" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/036/square_256/vue.png" />
    <avatar-list-item tips="Niko" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/036/square_256/vue.png" />
    <avatar-list-item tips="Niko" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/landscape/angularjs.png" />
    <avatar-list-item tips="Niko" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png" />
    <avatar-list-item tips="Niko" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png" />
    <avatar-list-item tips="Niko" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/landscape/angularjs.png" />
</avatar-list>
```



## API

### AvatarList

| Parameters        | Description                 | Type                                | Default     |
| ----------------  | --------------------------- | ----------------------------------  | --------- |
| size              | Avatar size                 | `large`、`small` 、`mini`, `default` | `default` |
| maxLength         | The largest item to display | number                              | -         |
| excessItemsStyle  | Extra project style         | CSSProperties                       | -         |

### AvatarList.Item

| parameter   | Description     | Types of        | Defaults |
| ---- | ------ | --------- | --- |
| tips | Avatar display copy | string | -   |
| src  | Avatar image connection | string    | -   |

