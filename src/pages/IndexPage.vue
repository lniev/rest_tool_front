<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    <FullCalendar :options="calendarOptions"/>

  </q-page>
</template>

<script lang="ts">
import {Todo, Meta} from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import {defineComponent, ref} from 'vue';
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default defineComponent({
  name: 'IndexPage',
  components: {ExampleComponent, FullCalendar},
  setup() {
    const handleDateClick = function (arg) {
      alert('date click! ' + arg.dateStr)
    }
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    const calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      dateClick: handleDateClick,
      events: [
        {title: 'event 1', date: '2019-04-01'},
        {title: 'event 2', date: '2019-04-02'}
      ]
    }
    return {todos, meta, calendarOptions};
  }
});
</script>
