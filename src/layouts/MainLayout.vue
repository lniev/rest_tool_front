<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-bar class="bar">
        <!--        <q-icon name="laptop_chromebook" color="grey-6"/>-->
        <!--        <div>Lniev</div>-->

        <q-space />

        <q-btn dense flat color="grey-6" icon="minimize" />
        <q-btn dense flat color="grey-6" icon="crop_square" />
        <q-btn dense flat color="grey-6" icon="close" />
      </q-bar>
    </q-header>

    <q-drawer show-if-above :width="60" :breakpoint="500" class="bg-primary" persistent>
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-for="item in linksList" :key="item.link" @click="handleDrawClick(item)">
            <q-item-section avatar>
              <q-icon :name="item.icon" :class="state.drawActive.link === item.link ? 'draw__item--active' : 'draw__item'" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup(props, context) {
    const router = useRouter();
    const linksList = [
      {
        title: '首页',
        caption: '首页',
        icon: 'home',
        link: '/home',
      },
      {
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'calendar_today',
        link: '/calendar',
      },
    ];
    const state = reactive({
      drawActive: linksList[0],
    });

    function handleDrawClick(item) {
      state.drawActive = item;
      if (item.link) {
        router.push(item.link);
      }
    }

    return {
      linksList,
      state,
      handleDrawClick,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../css/app.scss';

.bar {
  background-color: $white-1;
}

.draw {
  &__item {
    color: rgba(255, 255, 255, 0.7);
  }

  &__item--active {
    color: #fff;
  }
}
</style>
