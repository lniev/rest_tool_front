<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-bar class="bar">
        <q-icon name="laptop_chromebook"/>
        <div>Lniev</div>

        <q-space/>

        <q-btn dense flat icon="minimize"/>
        <q-btn dense flat icon="crop_square"/>
        <q-btn dense flat icon="close"/>
      </q-bar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="60"
      :breakpoint="500"
      class="bg-primary"
      persistent
    >
      <q-scroll-area class="fit">
        <q-list>

          <q-item clickable v-ripple v-for="item in linksList" >
            <q-item-section avatar>
              <q-icon name={{item.icon}} color="white"/>
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" color="white"/>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];
const leftDrawerOpen = ref(false)
const miniState = ref(false)
const drawer = ref(false)

</script>
<style lang="scss" scoped>
@import "../css/app.scss";

.bar {
  background-color: $white-1;
}
</style>
