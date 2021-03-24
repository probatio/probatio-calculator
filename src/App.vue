<template>
    <v-app>
        <v-app-bar app flat absolute color="gray" elevate-on-scroll>
            <div class="d-flex align-center">
                Probatio
            </div>

            <v-spacer></v-spacer>

            <v-btn @click="openMaterialList">
                <v-icon>mdi-archive</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container class="grey lighten-5">
                <v-row no-gutters style="height: 150px;">
                    <v-col v-for="component in components" :key="component.id" cols="6" md="3">
                        <component-card :component="component" class="component-card"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <material-list :open="open"/>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import ComponentCard from './components/ComponentCard.vue';
import MaterialList from './components/MaterialList.vue';

export default {
    name: 'App',
    computed: {
        ...mapGetters({
            components: 'components',
        }),
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        openMaterialList() {
            this.open = true;
        }
    },
    components: {
        ComponentCard,
        MaterialList
    },
};
</script>

<style lang="scss" scoped>
.component-card {
    margin: 8px;
    padding: 12px;
}
</style>
