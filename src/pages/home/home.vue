<template>
  <div>{{ calendar }}</div>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" />
      <q-date v-model="date" minimal />
    </div>
  </div>
  <FullCalendar :options="calendarOptions" />
  <router-link to="/test">Test</router-link>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import moment from 'moment'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth'
}
// 变量
let msg = 'Hello!'
let counter = ref(0)
const { calendar, year, month, date } = reactive(
  {
    calendar: moment().valueOf(),
    year: 2022,
    month: 2,
    date: null,
  }
)
// 函数
function log() {
  msg = 'dsdsfsdf'
  console.log(msg)
  counter.value++
}
function handleUpdateValue() {

}
</script>

<style lang="scss" scoped>
@import "./home.scss";
</style>