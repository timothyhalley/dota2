import Vue from 'vue'
import store from '@/store'

/**
 * Action Permission instruction
 * Instruction usage:
 *  - In need of control action Use on level permissions components v-action:[method] , as follows:
 *    <i-button v-action:add >Add user</a-button>
 *    <a-button v-action:delete>Delete users</a-button>
 *    <a v-action:edit @click="edit(record)">Modify</a>
 *
 *  - When the current user does not have permission, the instruction will be hidden when the component is used.
 *  - When the background permissions are different from the mode provided by pro, you only need to modify the permission filtering here.
 *
 *  @see https://github.com/timothyhalley/dota2
 */
const action = Vue.directive('action', {
  inserted: function (el, binding, vnode) {
    const actionName = binding.arg
    const roles = store.getters.roles
    const elVal = vnode.context.$route.meta.permission
    const permissionId = elVal instanceof String && [elVal] || elVal
    roles.permissions.forEach(p => {
      if (!permissionId.includes(p.permissionId)) {
        return
      }
      if (p.actionList && !p.actionList.includes(actionName)) {
        el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
      }
    })
  }
})

export default action
