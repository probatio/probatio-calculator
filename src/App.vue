<template>
  <v-app>
    <v-app-bar app flat absolute color="gray" elevate-on-scroll>
      <div class="d-flex align-center">Probatio</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container class="home lighten-5">
        <v-row no-gutters style="height: 150px">
          <v-col
            v-for="component in components"
            :key="component.id"
            md="4"
            sm="6"
            xs="12"
          >
            <component-card :component="component" />
          </v-col>
        </v-row>

        <material-list :open="open" @open-change="changeOpen" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import ComponentCard from "./components/ComponentCard.vue";
import MaterialList from "./components/MaterialList.vue";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      components: "components",
    }),
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openMaterialList() {
      this.open = true;
    },
    changeOpen(event) {
      this.open = event;
    },
  },
  components: {
    ComponentCard,
    MaterialList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
}
</style>
