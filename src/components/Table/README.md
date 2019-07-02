Table - Repackage component description
====


Package description
----

>  The basic usage and API are consistent with [Official version (Table)] (https://vuecomponent.github.io/ant-design-vue/components/table-cn/), on the basis of which the loading data is encapsulated. Methods.
>
> You don't need to do the paging logic processing on the page you are using, just pass the binding `:data="Promise"` object to the Table component.

The `table` by [@TimothyHalley](https://github.com/timothyhalley) Complete package


Example 1
----
(basic use)

```vue

<template>
  <s-table
    ref="table"
    size="default"
    :rowKey="(record) => record.data.id"
    :columns="columns"
    :data="loadData"
    :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
  >
  </s-table>
</template>

<script>
  import STable from '@/components/table/'

  export default {
    components: {
      STable
    },
    data() {
      return {
        columns: [
          {
            title: 'Rule number',
            dataIndex: 'no'
          },
          {
            title: 'Description',
            dataIndex: 'description'
          },
          {
            title: 'Service call count',
            dataIndex: 'callNo',
            sorter: true,
            needTotal: true,
            customRender: (text) => text + ' 次'
          },
          {
            title: 'Status',
            dataIndex: 'status',
            needTotal: true
          },
          {
            title: 'Update time',
            dataIndex: 'updatedAt',
            sorter: true
          }
        ],
        // Query condition parameter
        queryParam: {},
        // The method of loading data must be a Promise object
        loadData: parameter => {
          return this.$http.get('/service', {
            params: Object.assign(parameter, this.queryParam)
          }).then(res => {
            return res.result
          })
        },
        selectedRowKeys: [],
        selectedRows: []
      }
    },
    methods: {
      onSelectChange (selectedRowKeys, selectedRows) {
         this.selectedRowKeys = selectedRowKeys
         this.selectedRows = selectedRows
       }
    }
  }
</script>

```



Example 2
----

(simple table, the last column is a variety of operations)

```vue
<template>
  <s-table
    ref="table"
    size="default"
    :columns="columns"
    :data="loadData"
  >
    <span slot="action" slot-scope="text, record">
      <a>编辑</a>
      <a-divider type="vertical"/>
      <a-dropdown>
        <a class="ant-dropdown-link">
          更多 <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </span>
  </s-table>
</template>

<script>
  import STable from '@/components/table/'

  export default {
    components: {
      STable
    },
    data() {
      return {
        columns: [
          {
            title: 'Rule number',
            dataIndex: 'no'
          },
          {
            title: 'Description',
            dataIndex: 'description'
          },
          {
            title: 'Service call count',
            dataIndex: 'callNo',
          },
          {
            title: 'Status',
            dataIndex: 'status',
          },
          {
            title: 'Update time',
            dataIndex: 'updatedAt',
          },
          {
            table: 'Operating',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'},
          }
        ],
        // Query condition parameter
        queryParam: {},
        // The method of loading data must be a Promise object
        loadData: parameter => {
          return this.$http.get('/service', {
            params: Object.assign(parameter, this.queryParam)
          }).then(res => {
            return res.result
          })
        },
      }
    },
    methods: {
      edit(row) {
        // axios Send data to the backend After modifying the data successfully
        // transfer refresh() Reload list data
        // Here setTimeout Simulate network delay for initiating a request..
        setTimeout(() => {
          this.$refs.table.refresh() // refresh() Do not pass the default value false, do not refresh to the first page页
        }, 1500)

      }
    }
  }
</script>
```



Built-in method
----

By `this.$refs.table` transfer

`this.$refs.table.refresh(true)` Refresh list (reload list data after user adds/modifies data)

> Note: To call `refresh(bool)` you need to set the `ref` value for the table component.
>
> `refresh()` The method can pass a `bool` value. When there is a value or a value of `true`, it will be forced to refresh to the first page when refreshing (the normal user page search button searches for results, the page starts from the first page)


Built-in properties
----
> In addition to the `a-table` native property, some additional property properties are provided.  

  
| Attribute           | Description                                            | Type              | Defaults |
| -------------- | ----------------------------------------------- | ----------------- | ------ |
| alert          | Set whether to display the table information bar                          | [object, boolean] | null   |
| showPagination | Display paging selector, can pass 'auto' \| boolean          | [string, boolean] | 'auto' |
| data           | The method of loading data must be `Promise` Object **must be bound** | Promise           | -      |


`alert` Property object:

```javascript
alert: {
  show: Boolean, 
  clear: [Function, Boolean]
}
```

Precautions
----

> You may need to modify the following code in order to match the results returned by the interface provided by the backend:
(It should be noted that the changes here are global, meaning that all use of the table component for the entire project is subject to the fields defined by this return result.)

Modify `@/components/table/index.js`  From line 132



```javascript
result.then(r => {
  this.localPagination = Object.assign({}, this.localPagination, {
    current: r.pageNo,  // Returns the current number of pages in the result
    total: r.totalCount, // Returns the total number of records in the result
    showSizeChanger: this.showSizeChanger,
    pageSize: (pagination && pagination.pageSize) ||
      this.localPagination.pageSize
  })

  // To prevent the current page data length of the page from being 0 after deleting the data, automatically flip to the previous page.
  if (r.data.length == 0 && this.localPagination.current != 1) {
    this.localPagination.current--
    this.loadData()
    return
  }

  // This is used to determine if the interface has a return r.totalCount or this.showPagination = false
  // When the situation is satisfied, it means that the data does not meet the paging size, and the table paging function is turned off.
  !r.totalCount && ['auto', false].includes(this.showPagination) && (this.localPagination = false)
  this.localDataSource = r.data // Return the array data in the result
  this.localLoading = false
});
```
Return JSON example:
```json
{
  "message": "",
  "result": {
    "data": [{
        id: 1,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        title: 'Alipay',
        description: 'It’s an inner thing that they can’t reach and can’t reach.',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 2,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        title: 'Angular',
        description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 3,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
        title: 'Ant Design',
        description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 4,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        title: 'CascadeZen Pro',
        description: '那时候我只会想自己想要什么，从不想自己拥有什么',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
        title: 'Bootstrap',
        description: '凛冬将至',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 6,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
        title: 'Vue',
        description: '生命就像一盒巧克力，结果往往出人意料',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      }
    ],
    "pageSize": 10,
    "pageNo": 0,
    "totalPage": 6,
    "totalCount": 57
  },
  "status": 200,
  "timestamp": 1534955098193
}
```



Update time
----

This document was last updated on 2019-07-01 AM 08:37