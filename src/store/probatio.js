import components from '../data/probatio.json';
import materials from '../data/probatio-material-price.json';

export default {
    create() {
		const componentsReseted = components.map(compnent => ({ ...compnent, qtySelected: 0 }));
		const materialsReseted = materials.map(material => ({ ...material, qtyNeeded: 0, totalPrice: 0 }));

        return {
			components: componentsReseted,
			materials: materialsReseted
        };
    },
};
