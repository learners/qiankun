<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/react-app">React App</router-link> |
      <router-link to="/vue-app">Vue App</router-link> |
      <span @click="loadMicroApp">loadMicroApp</span>
    </nav>
    <router-view/>
    <!-- 挂载微应用的容器 -->
    <div id="container"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'

export default {
  name: 'App',
  data () {
    return {
      microApp: null
    }
  },
  methods: {
    /**
     * @description 手动加载微应用
     */
    loadMicroApp () {
      // 卸载微应用
      this.microApp?.unmount()
      // 加载微应用
      this.microApp = loadMicroApp({
        name: 'vueMicroApp',
        entry: '//localhost:9002',
        container: '#container'
      })

      this.microApp.loadPromise.then(() => {
        console.log('手动加载微应用成功')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
