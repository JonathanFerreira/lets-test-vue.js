<template lang="html">
  <div>
    <h1>My Todo List</h1>
    <br>
    <input v-model="newItem">
    <button @click="addItemToList">Add</button>
    <ul>
      <li v-for="(item, index) in listItems" :key='index'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleed'],
      newItem: ''
    }
  },
  methods: {
    addItemToList () {
      this.listItems.push(this.newItem)
      this.newItem = ''
    }
  }
}
</script>

<style lang="css">
</style>
