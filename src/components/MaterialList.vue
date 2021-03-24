<template>
    <v-navigation-drawer v-model="drawer" absolute temporary right class="material-list">
        <h1>Materias</h1>
        <p v-if="!hasNeededMaterials">No components selected</p>
        <ul v-else>
            <li v-for="(material, index) in neededMaterials" :key="index" class="material">
                <div class="material-base">
                    <strong class="material-name">{{ material.name }}</strong>
                </div>
                <div class="material-info">{{ material.qtyNeeded }}</div>
            </li>
        </ul>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MaterialList',
    props: {
        open: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            drawer: false,
        };
    },
    watch: {
        open(newValue) {
            this.drawer = newValue;
        },
        drawer(newValue) {
            this.$emit('open-change', newValue)
        }
    },
    computed: {
        ...mapGetters({
            materials: 'materials',
        }),
        neededMaterials() {
            return this.materials.filter((material) => material.qtyNeeded > 0);
        },
        hasNeededMaterials() {
            return this.neededMaterials.length > 0;
        },
    },
};
</script>

<style lang="scss" scoped>
.material-list {
	padding: 12px;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

.material {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px black solid;
    margin-bottom: 12px;
	margin-top: 12px;
    padding-bottom: 8px;

    .material-base {
        display: flex;
        flex-direction: column;
    }

    .material-name {
        // font-size: 18px;
    }
}

.material-info {
    min-width: 50px;
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
	padding-right: 12px;

}
</style>
