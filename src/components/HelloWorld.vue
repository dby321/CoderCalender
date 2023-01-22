<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Calender" name="calender">
      <el-calendar v-model="value" >
        <template #date-cell="{ data }">
          <div :class="data.isSelected ? 'is-selected' : 'not-selected'" @click="clickOneDay(data)">
            {{ data.day.split('-').slice(1).join('-') }}
            {{ data.isSelected ? '✔️' : '' }}
          </div>
        </template>
      </el-calendar>
    </el-tab-pane>
    <el-tab-pane label="Events" name="events">
      没想到了我还没实现~~~
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {defineProps, reactive} from 'vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import {ElMessage} from "element-plus";
const value = ref(new Date())
const activeName = ref('calender')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const clickOneDay=(data: any)=>{
  ElMessage({
    message: "今天是"+data.day.split('-').slice(1).join('-'),
    type: 'success',
  });
}
defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
.is-selected {
  color: #1989fa;
}
.not-selected{
  color: grey;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
