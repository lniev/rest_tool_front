<template>
  <button @click="toggleWeekends">toggle weekends</button>
  <full-calendar ref="calendarRef" :options="calendarOptions" />
</template>

<script lang="ts" setup>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { reactive, ref, watch } from 'vue';
const calendarRef = ref(null);
const handleDateClick = function (arg) {
  console.log(arg);
};
function toggleWeekends() {
  calendarOptions.weekends = !calendarOptions.weekends;
}
const calendarOptions = reactive({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  dateClick: handleDateClick,
  events: [
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' },
  ],
  weekends: true,
});
watch(calendarRef, () => {
  console.log('watch', calendarRef.value.getApi());
});
</script>

<style lang="scss" scoped></style>
