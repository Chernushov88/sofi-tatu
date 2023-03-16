<template>
  <q-page>
    <div class="p-4">
      <div class="p-4 text-3xl font-bold">
        Our project
      </div>
      <div class="project-widget-list space-y-5">
        <ProjectWidget />
      </div>

    </div>

  </q-page>
</template>

<script>
import ProjectWidget from "components/ProjectWidget"
export default {
  components: {ProjectWidget}

  // name: 'PageName',
}
</script>
