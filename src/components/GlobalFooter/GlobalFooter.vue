<template>
  <div class="footer">
    <div class="links">
      <a
        href="https://www.cascadezen.com/"
        target="_blank"
      >CascadeZen Home</a>
      <a
        href="https://github.com/timothyhalley"
        target="_blank"
      >
        <a-icon type="github" />
      </a>
      <a href="https://github.com/timothyhalley/dota2/">Code Repo</a>
      <a href="https://github.com/timothyhalley/">Other Projects</a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" /> 2020 <span>Product sourced by SkiCycleRun</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
