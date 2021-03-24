<template >
  <v-hover v-slot="{ hover }" class="component-card">
    <v-card color="white" max-width="250">
      <v-badge :content="component.qtySelected" :value="component.qtySelected" color="red" overlap>
        <v-img :src="imgSrc" height="200" contain>
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal component-expand"
              style="height: 100%"
            >
              <div class="component-infos">
                <span class="component-name">{{ component.name }}</span>
                <ul class="component-materials">
                  <li
                    class="material"
                    v-for="(material, index) in component.materials"
                    :key="index"
                  >
                    {{ material.amount }} x {{ material.name }}
                  </li>
                </ul>
              </div>
              <div class="component-qty">
                <v-btn
                  icon
                  color="pink"
                  @click="updateCount(countActions.REMOVE)"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span class="number">{{ component.qtySelected }}</span>
                <v-btn icon color="pink" @click="updateCount(countActions.ADD)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </v-expand-transition>
        </v-img>
      </v-badge>
    </v-card>
  </v-hover>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ComponentCard",
  props: {
    component: {
      type: Object,
    },
  },
  data() {
    return {
      countActions: {
        ADD: "add",
        REMOVE: "remove",
      },
    };
  },
  computed: {
    imgSrc() {
      try {
        return require(`@/assets/${this.component.name}.png`);
      } catch (error) {
        return require(`@/assets/dual-buttons.png`);
      }
    },
  },
  methods: {
    ...mapActions({
      updateComponentQtySelected: "updateComponentQtySelected",
    }),
    updateCount(action) {
      const { id, qtySelected } = this.component;
      switch (action) {
        case this.countActions.ADD:
          this.updateComponentQtySelected({
            componentId: id,
            qty: qtySelected + 1,
          });
          break;
        case this.countActions.REMOVE:
          this.updateComponentQtySelected({
            componentId: id,
            qty: qtySelected - 1,
          });
          break;

        default:
          console.log("action does not exist");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.component-card {
    margin: 8px;
    padding: 12px;
    display: flex;
    justify-content: center;
}

.component-expand {
  flex-direction: column;
}

.component-infos {
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .component-name {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
  }

  .component-materials {
    list-style-type: none;
    padding-left: 0;
    font-size: 14px;
  }
}

.component-qty {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .number {
    width: 30px;

    display: flex;
    justify-content: center;
  }
}
</style>
