<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title align="center" class="font-bold text-3xl">
          Sofi TATU
        </q-toolbar-title>
      </q-toolbar>

<!--      <q-tabs>-->
<!--        <q-route-tab-->
<!--          icon="map"-->
<!--          to="/your/route"-->
<!--          replace-->
<!--          label="One Tab"-->
<!--        />-->
<!--        <q-route-tab-->
<!--          icon="assignment"-->
<!--          to="/some/other/route"-->
<!--          replace-->
<!--          label="Other Tab"-->
<!--        />-->
<!--      </q-tabs>-->
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="px-5"
              indicator-color="transparent">
      <q-tabs switch-indicator class="tabs-button">
        <q-route-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :icon="menuItem.icon"
          :to="menuItem.link"
          replace
          :label="menuItem.displayName"
          :rippale="false"
        />

      </q-tabs>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->


    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style lang="scss">
.tabs-button{
  .q-tab__content {
    .q-tab__label{
      font-size: 11px;
    }
  }
}
</style>
<script>
import {menuItems} from "src/data/menu-items";
export default {
  // name: 'LayoutName',

  data: () => ({
    menuItems
  })
}
</script>
