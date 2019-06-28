<template>
  <div>
    <a-card :bordered="false">
      <a-row>
        <a-col :sm="8" :xs="24">
          <head-info title="My to-do" content="8 missions" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="Average task processing time this week" content="32 minutes" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="Number of tasks completed this week" content="24"/>
        </a-col>
      </a-row>
    </a-card>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="Standard list">

      <div slot="extra">
        <a-radio-group>
          <a-radio-button>All</a-radio-button>
          <a-radio-button>Processing</a-radio-button>
          <a-radio-button>Waiting</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>

      <div class="operate">
        <a-button type="dashed" style="width: 100%" icon="plus" @click="$refs.taskForm.add()">添加</a-button>
      </div>

      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
        <a-list-item :key="index" v-for="(item, index) in data">
          <a-list-item-meta :description="item.description">
            <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar"/>
            <a slot="title">{{ item.title }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <a>Edit</a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item><a>Edit</a></a-menu-item>
                <a-menu-item><a>Delete</a></a-menu-item>
              </a-menu>
              <a>More<a-icon type="down"/></a>
            </a-dropdown>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>Owner</span>
              <p>{{ item.owner }}</p>
            </div>
            <div class="list-content-item">
              <span>Starting time</span>
              <p>{{ item.startAt }}</p>
            </div>
            <div class="list-content-item">
              <a-progress :percent="item.progress.value" :status="!item.progress.status ? null : item.progress.status" style="width: 180px" />
            </div>
          </div>
        </a-list-item>
      </a-list>

      <task-form ref="taskForm" />
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import TaskForm from './modules/TaskForm'

const data = []
data.push({
  title: 'The Enchantress',
  avatar: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/05/03.jpg',
  description: 'A skilled trickster and sorceress, the Enchantress won’t rest until she possesses everything she desires...',
  owner: 'Nine Realms',
  startAt: '2019-07-01 22:44',
  progress: {
    value: 90
  }
})
data.push({
  title: 'Lady Deathstrike',
  avatar: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/05/06.jpg',
  description: 'Deathstrike is one of Wolverine’s best villains.',
  owner: 'Lady Deathstrike’s father',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 54
  }
})
data.push({
  title: 'Dark Phoenix',
  avatar: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/05/21.jpg',
  description: 'A cosmic entity of rebirth, it possessed a young Jean Grey, giving her infinite power',
  owner: 'Jean Grey',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 66
  }
})
data.push({
  title: 'Venom',
  avatar: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/05/12.jpg',
  description: 'Venom is an amplified version of his nemesis',
  owner: 'Eddie Brock',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 30
  }
})
data.push({
  title: 'Mystique',
  avatar: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/05/16.jpg',
  description: 'Mystique is effectively immune to age or injury.',
  owner: 'Raven Darkholme',
  startAt: '2018-07-26 22:44',
  progress: {
    status: 'exception',
    value: 100
  }
})

export default {
  name: 'StandardList',
  components: {
    HeadInfo,
    TaskForm
  },
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="less" scoped>
    .ant-avatar-lg {
        width: 48px;
        height: 48px;
        line-height: 48px;
    }

    .list-content-item {
        color: rgba(0, 0, 0, .45);
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        margin-left: 40px;
        span {
            line-height: 20px;
        }
        p {
            margin-top: 4px;
            margin-bottom: 0;
            line-height: 22px;
        }
    }
</style>
