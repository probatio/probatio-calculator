export default {
    components: (state) => state.components,
	materials: (state) => state.materials,
	totalBill: (state) => state.materials.reduce((total, material) => total + material.totalPrice, 0)
};
