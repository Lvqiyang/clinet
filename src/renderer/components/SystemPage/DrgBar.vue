<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active" v-on:click='getLocalData'>
          <a class="nav-link text-light" href="#"> 本地病案数据 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='getServerData'>
          <a class="nav-link text-light" href="#"> 服务器病案数据 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='compareData'>
          <a class="nav-link text-light" href="#"> 校验数据 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='drgCompute'>
          <a class="nav-link text-light" href="#"> 调用Drg分组服务 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='drgResult'>
          <a class="nav-link text-light" href="#"> 查看Drg分组结果 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='drgRule'>
          <a class="nav-link text-light" href="#"> 查看Drg分组规则 <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        paths: []
      };
    },
    methods: {
      getLocalData: function () {
        this.$store.commit('SYSTEM_SET_TOOLBAR', 'getLocalData');
      },
      getServerData: function () {
        this.$store.commit('SYSTEM_SET_TOOLBAR', 'getServerData');
      },
      compareData: function () {
        this.$store.commit('SYSTEM_SET_TOOLBAR', 'compareData');
      },
      drgCompute: function () {
        this.$store.commit('SYSTEM_SET_TOOLBAR', 'drgCompute');
      },
      drgResult: function () {
        this.$store.commit('SYSTEM_SET_TOOLBAR', 'drgResult');
      },
      drgRule: function () {
        this.$store.commit('SYSTEM_SET_TOOLBAR', 'drgRule');
      },
    },
  };
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

</style>
