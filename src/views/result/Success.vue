<template>
  <a-card :bordered="false" style="margin: -24px -24px 0px;">
    <result type="success" :description="description" :title="title">
      <template slot="action">
        <a-button type="primary">Back to list</a-button>
        <a-button style="margin-left: 8px">View project</a-button>
        <a-button style="margin-left: 8px">Print</a-button>
      </template>
      <div>
        <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 20px;">Project name</div>
        <a-row style="margin-bottom: 16px">
          <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
            <span style="color: rgba(0, 0, 0, 0.85)">Project ID：</span>
            20180724089
          </a-col>
          <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
            <span style="color: rgba(0, 0, 0, 0.85)">Principal: </span>
            Who is Edmund Halley?
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
            <span style="color: rgba(0, 0, 0, 0.85)">Effective time: </span>
            2019-12-12 ~ 2020-12-12
          </a-col>
        </a-row>
        <a-steps :current="1" :direction="isMobile() && directionType.vertical || directionType.horizontal" progressDot>
          <a-step >
            <span style="font-size: 14px" slot="title">Create project</span>
            <template slot="description">
              <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;" slot="description" >
                <div style="margin: 8px 0 4px">
                  Edmund Halley
                  <a-icon style="margin-left: 8px" type="dingding-o" />
                </div>
                <div>2019-12-12 12:32</div>
              </div>
            </template>
          </a-step>
          <a-step title="Departmental preliminary review">
            <span style="font-size: 14px" slot="title">Departmental preliminary review</span>
            <template slot="description">
              <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;" slot="description" >
                <div style="margin: 8px 0 4px">
                  Isaac Newton
                  <a-icon style="margin-left: 8px; color: #00A0E9" type="dingding-o" />
                </div>
                <div><a href="">Urge</a></div>
              </div>
            </template>
          </a-step>
          <a-step title="Financial review">
            <span style="font-size: 14px" slot="title">Financial review</span>
          </a-step>
          <a-step title="Carry out" >
            <span style="font-size: 14px" slot="title">Carry out</span>
          </a-step>
        </a-steps>
      </div>
    </result>
  </a-card>
</template>

<script>
import { Result } from '@/components'
import { mixinDevice } from '@/utils/mixin.js'

const directionType = {
  horizontal: 'horizontal',
  vertical: 'vertical'
}

export default {
  name: 'Success',
  components: {
    Result
  },
  mixins: [mixinDevice],
  data () {
    return {
      title: '提交成功',
      description: 'The submission result page is used to feed back the processing results of a series of operational tasks. \n' +
          ' If its just a simple operation, use the Message global hint feedback. \n' +
          ' his text area can show simple supplementary instructions if there is a similar display\n' +
          ' “Document” The demand, the gray area below can present more complex content.',
      directionType
    }
  }
}
</script>

<style scoped>

</style>
