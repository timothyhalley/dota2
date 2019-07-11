<template>
  <a-card :bordered="false" style="margin: -24px -24px 0px;">
    <result type="error" :title="title" :description="description">
      <template slot="action">
        <a-button type="primary" >Return modification</a-button>
      </template>
      <div>
        <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 16px">
          The content you submitted has the following error:
        </div>
        <div style="margin-bottom: 16px">
          <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
          Your account has been frozen
          <a style="margin-left: 16px">Thaw immediately <a-icon type="right" /></a>
        </div>
        <div>
          <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
          Your account is not yet eligible to apply
          <a style="margin-left: 16px">Upgrade immediately <a-icon type="right" /></a>
        </div>
      </div>
    </result>
  </a-card>
</template>

<script>
import { Result } from '@/components'

export default {
  name: 'Error',
  components: {
    Result
  },
  data () {
    return {
      title: 'Submission Failed',
      description: 'Please check and modify the following information before resubmitting. '
    }
  }
}
</script>

<style scoped>

</style>
