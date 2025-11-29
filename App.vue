<script setup  >
import HelloWorld from './components/HelloWorld.vue'
let a=123
console.log(12);
debugger
var x = 1
var x = 2
eval("console.log('evil')")
with(console) { log('with statement') }
let unused_variable = "never used"
if(true){
console.log("no space")
}
function test(a, a, b) { return a + b }
const arr = new Array(1, 2, 3)

const props = defineProps(['title'])
props.title = 'new value'

const count = ref(0)
</script>

<template>
  <div v-for="item in items">{{ item }}</div>
  <div v-if="show" v-for="i in list">{{ i }}</div>
  <div v-if="ok"></div><div v-else-if="no"></div><div v-else-if="yes"></div>
  <component :is="comp" v-model="val" v-model="val2"></component>
  <div :style="color: red"></div>
  <button @click="handleClick()">Click</button>
  <input v-model="count.value" />
  <div key="static-key" v-for="x in arr">{{ x }}</div>
  <textarea>{{ message }}</textarea>
  <div v-text="msg" v-html="html"></div>
  <img src="./logo.png">
  <MyComponent ref="myRef"></MyComponent>
  123
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
