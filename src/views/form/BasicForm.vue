<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        label="Title"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          v-decorator="[
            'name',
            {rules: [{ required: true, message: 'Please enter a title' }]}
          ]"
          name="name"
          placeholder="Give the target a name" />
      </a-form-item>
      <a-form-item
        label="Start and end date"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-range-picker
          name="buildTime"
          style="width: 100%"
          v-decorator="[
            'buildTime',
            {rules: [{ required: true, message: 'Please select the start and end date' }]}
          ]" />
      </a-form-item>
      <a-form-item
        label="Target description"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-textarea
          rows="4"
          placeholder="Please enter your staged work goals"
          v-decorator="[
            'description',
            {rules: [{ required: true, message: 'Please enter a description of the goal' }]}
          ]" />
      </a-form-item>
      <a-form-item
        label="Metrics"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-textarea
          rows="4"
          placeholder="Please enter a metric"
          v-decorator="[
            'type',
            {rules: [{ required: true, message: 'Please enter a metric' }]}
          ]" />
      </a-form-item>
      <a-form-item
        label="Client"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          placeholder="Please describe the customer you serve, the internal customer directly @ Name/work number"
          v-decorator="[
            'customer',
            {rules: [{ required: true, message: 'Please describe the customer you serve' }]}
          ]" />
      </a-form-item>
      <a-form-item
        label="Inviting critics"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false"
      >
        <a-input placeholder="Please direct @Name/work number, up to invitation 5 people" />
      </a-form-item>
      <a-form-item
        label="Weights"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false"
      >
        <a-input-number :min="0" :max="100" />
        <span> %</span>
      </a-form-item>
      <a-form-item
        label="Target disclosure"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false"
        help="Customers and invitees are shared by default"
      >
        <a-radio-group v-model="value">
          <a-radio :value="1">Public</a-radio>
          <a-radio :value="2">Partially public</a-radio>
          <a-radio :value="3">Private</a-radio>
        </a-radio-group>
        <a-form-item>
          <a-select mode="multiple" v-if="value === 2">
            <a-select-option value="4">Colleague one</a-select-option>
            <a-select-option value="5">Colleague two</a-select-option>
            <a-select-option value="6">Colleague three</a-select-option>
          </a-select>
        </a-form-item>
      </a-form-item>
      <a-form-item
        :wrapperCol="{ span: 24 }"
        style="text-align: center"
      >
        <a-button htmlType="submit" type="primary">Submit</a-button>
        <a-button style="margin-left: 8px">Cancel</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'BaseForm',
  data () {
    return {
      description: 'Form pages are used to collect or verify information to users, and basic forms are common in form scenarios where there are fewer data items. ',
      value: 1,

      // form
      form: this.$form.createForm(this)

    }
  },
  methods: {

    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
