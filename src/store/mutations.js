const UPDATE_COMPONENT_QTY_SELECTED = (state, { componentId, qty}) => {
	if (qty < 0) qty = 0;
	state.components[componentId].qtySelected = qty;
};

const UPDATE_MATERIAL_QTY_NEEDED = (state, { materials, isAdding }) => {
	materials.forEach(material => {
		const materialIndex = state.materials.findIndex(m => m.name === material.name);
		state.materials[materialIndex].qtyNeeded += isAdding ? material.amount : (-1) * material.amount;
		state.materials[materialIndex].totalPrice = state.materials[materialIndex].qtyNeeded * state.materials[materialIndex].price;
	});
};

export default {
	UPDATE_COMPONENT_QTY_SELECTED,
	UPDATE_MATERIAL_QTY_NEEDED
};
