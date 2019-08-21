import Mock from 'mockjs2'

// Load the mock service when the environment is not prod or preview is true
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  // Use synchronous load dependency
  // Prevents GetInfo in vuex from running before mock, causing mock requests to return results
  console.log('mock mounting: ', process.env.NODE_ENV, ' and ', process.env.VUE_APP_PREVIEW)
  require('./services/auth')
  require('./services/user')
  require('./services/manage')
  require('./services/other')
  require('./services/tagCloud')
  require('./services/article')

  Mock.setup({
    timeout: 800 // setter delay time
  })
  console.log('mock mounted')
}
