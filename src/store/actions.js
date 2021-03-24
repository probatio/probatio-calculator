function updateComponentQtySelected({ commit, dispatch, state }, data) {
	const { materials, qtySelected } = state.components.find(component => component.id === data.componentId);
	const isAdding = qtySelected < data.qty;

	commit('UPDATE_COMPONENT_QTY_SELECTED', data);
	dispatch('updateMaterialQtyNeeded', { materials, isAdding });
}

function updateMaterialQtyNeeded({ commit }, data) {
	commit('UPDATE_MATERIAL_QTY_NEEDED', data);
}

export default {
	updateMaterialQtyNeeded,
	updateComponentQtySelected,
};
