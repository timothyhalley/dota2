<template>
  <div class="home">
    <div class="banner">
      <img alt="Vue logo" style="width: 64px; height: 64px" src="../assets/logo.png">
      <h3 style="margin-top: 1rem">Welcome to Your Vue.js App</h3>
    </div>

    <br/>

    <h2># Trend Component </h2>

    <a-divider> Normal </a-divider>

    <a-card>

      <trend flag="up" style="margin-right: 16px;">
        <span slot="term">Wage</span>
        5%
      </trend>
      <trend flag="up" style="margin-right: 16px;">
        <span slot="term">Workload</span>
        50%
      </trend>
      <trend flag="down">
        <span slot="term">Body condition</span>
        50%
      </trend>

    </a-card>

    <a-divider> Color reversal </a-divider>

    <a-card style="margin-bottom: 3rem">

      <trend flag="up" :reverse-color="true" style="margin-right: 16px;">
        <span slot="term">Wage</span>
        5%
      </trend>
      <trend flag="down" :reverse-color="true" style="margin-right: 16px;">
        <span slot="term">Workload</span>
        50%
      </trend>

    </a-card>

    <h2># AvatarList 组件 </h2>

    <a-divider> AvatarList </a-divider>
    <a-card style="margin-bottom: 3rem">
      <avatar-list :max-length="3">
        <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
        <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
        <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />

      </avatar-list>

      <a-divider type="vertical" style="margin: 0 16px" />

      <avatar-list size="mini">
        <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
        <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
        <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
      </avatar-list>
    </a-card>

    <h2># CountDown Component </h2>

    <a-divider> CountDown </a-divider>
    <a-card style="margin-bottom: 3rem">
      <count-down
        style="font-size: 2rem"
        :target="new Date().getTime() + 3000000"
        :on-end="onEndHandle">
      </count-down>

      <a-divider type="vertical" style="margin: 0 16px" />

      <count-down
        style="font-size: 2rem"
        :target="new Date().getTime() + 10000"
        :on-end="onEndHandle2">
      </count-down>
    </a-card>

    <h2># Ellipsis Component </h2>

    <a-divider> Ellipsis </a-divider>
    <a-card style="margin-bottom: 3rem">
      <ellipsis :length="100" tooltip>
        There were injuries alleged in three cases in 2015, and a
        fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.
      </ellipsis>
    </a-card>

    <h2># NumberInfo Component </h2>

    <a-divider> NumberInfo </a-divider>
    <a-card style="margin-bottom: 3rem">
      <number-info
        :sub-title="() => { return 'Visits this week' }"
        :total="12321"
        status="up"
        :sub-total="17.1"></number-info>
    </a-card>

    <h2># TagSelect Component </h2>

    <a-divider> TagSelect </a-divider>
    <a-card style="margin-bottom: 3rem">
      <tag-select>
        <tag-select-option value="cat1">Category 1</tag-select-option>
        <tag-select-option value="cat2">Category 2</tag-select-option>
        <tag-select-option value="cat3">Category 3</tag-select-option>
        <tag-select-option value="cat4">Category 4</tag-select-option>
        <tag-select-option value="cat5">Category 5</tag-select-option>
        <tag-select-option value="cat6">Category 6</tag-select-option>
        <tag-select-option value="cat7">Category 7</tag-select-option>
      </tag-select>
    </a-card>

    <h2># DescriptionList Component </h2>

    <a-divider> DescriptionList </a-divider>
    <a-card style="margin-bottom: 3rem">
      <description-list title="Group name" size="small">
        <description-list-item term="Principal">Sir Edmund Halley</description-list-item>
        <description-list-item term="Role code">1234567</description-list-item>
        <description-list-item term="Department">XX company - YY department</description-list-item>
        <description-list-item term="Expire date">2018-08-08</description-list-item>
        <description-list-item term="Description">This description is very long, long, long, long, long, long, long, long, long, long, long, long, long, long, long...</description-list-item>
      </description-list>
    </a-card>

    <a-divider> TagCloud </a-divider>
    <a-card style="margin-bottom: 3rem">
      <tag-cloud :tag-list="tagCloudData"></tag-cloud>
    </a-card>
  </div>
</template>

<script>
// @ is an alias to /src

import Trend from '@/components/Trend'
import AvatarList from '@/components/AvatarList'
import CountDown from '@/components/CountDown/CountDown'
import Ellipsis from '@/components/Ellipsis'
import NumberInfo from '@/components/NumberInfo'
import TagSelect from '@/components/TagSelect'
import { DescriptionList, TagCloud } from '@/components/'

const AvatarListItem = AvatarList.AvatarItem
const TagSelectOption = TagSelect.Option

const DescriptionListItem = DescriptionList.Item

export default {
  name: 'Home',
  components: {
    NumberInfo,
    Ellipsis,
    CountDown,
    Trend,
    AvatarList,
    AvatarListItem,
    TagSelect,
    TagSelectOption,
    TagCloud,
    DescriptionList,
    DescriptionListItem
  },
  data () {
    return {
      targetTime: new Date().getTime() + 3900000,
      tagCloudData: []
    }
  },
  created () {
    this.getTagCloudData()
  },
  methods: {
    onEndHandle () {
      this.$message.success('CountDown callback!!!')
    },
    onEndHandle2 () {
      this.$notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    },
    getTagCloudData () {
      this.$http.get('/data/antv/tag-cloud').then(res => {
        this.tagCloudData = res.result
      })
    }
  }
}
</script>

<style scoped>
  .home {
    width: 900px;
    margin: 0 auto;
    padding: 25px 0;
  }
  .home > .banner {
    text-align: center;
    padding: 25px 0;
    margin: 25px 0;
  }
</style>
