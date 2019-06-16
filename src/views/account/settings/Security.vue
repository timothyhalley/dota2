<template>
  <a-list
    itemLayout="horizontal"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-list-item-meta>
        <a slot="title">{{ item.title }}</a>
        <span slot="description">
          <span class="security-list-description">{{ item.description }}</span>
          <span v-if="item.value"> : </span>
          <span class="security-list-value">{{ item.value }}</span>
        </span>
      </a-list-item-meta>
      <template v-if="item.actions">
        <a slot="actions" @click="item.actions.callback">{{ item.actions.title }}</a>
      </template>

    </a-list-item>
  </a-list>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { title: 'Account password', description: 'Current password strength', value: 'Strong', actions: { title: 'Modify', callback: () => { this.$message.info('This is a normal message') } } },
        { title: 'Secret phone', description: 'Bound phone', value: '(999) 777-0101', actions: { title: 'Modify', callback: () => { this.$message.success('This is a message of success') } } },
        { title: 'Security question', description: 'The security policy is not set, and the security policy can effectively protect the account security.', value: '', actions: { title: 'Setting', callback: () => { this.$message.error('This is a message of error') } } },
        { title: 'Backup email', description: 'Bind mailbox', value: 'ant***sign.com', actions: { title: 'Modify', callback: () => { this.$message.warning('This is message of warning') } } },
        { title: 'MFA device', description: 'Unbound MFA device, after binding, can be confirmed twice', value: '', actions: { title: 'Binding', callback: () => { this.$message.info('This is a normal message') } } }
      ]
    }
  }
}
</script>

<style scoped>

</style>
