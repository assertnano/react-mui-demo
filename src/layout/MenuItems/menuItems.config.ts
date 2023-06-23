// assets
import { IMenuItem, IMenuItemsGroup } from './menu-items.interface';

//nano
import {
	DescriptionIcon,
	InventoryIcon,
	AccountTreeIcon,
	ReceiptIcon,
} from '../../assets/icons';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard: IMenuItem = {
	id: 'dashboard',
	title: 'Dashboard',
	type: 'group',
	children: [
		{
			id: 'contratos',
			title: 'Contratos',
			type: 'collapse',
			icon: DescriptionIcon,
			children: [
				{
					id: 'contrato',
					title: 'Contrato',
					type: 'item',
					url: '/contrato',
					breadcrumbs: false,
					//TODO falla cuando clickeo el icono con el Sidebar cerrado
				},
				{
					id: 'modeloAcuerdo',
					title: 'Modelo acuerdo',
					type: 'item',
					url: '/modeloAcuerdo',
					breadcrumbs: false,
					//TODO falla cuando clickeo el icono con el Sidebar cerrado
				},
				{
					id: 'conceptoAcuerdo',
					title: 'Concepto Acuerdo',
					type: 'item',
					url: '/conceptoAcuerdo',
					breadcrumbs: false,
					//TODO falla cuando clickeo el icono con el Sidebar cerrado
				},
			],
		},
		{
			id: 'facturacion',
			title: 'Facturación',
			type: 'collapse',
			icon: ReceiptIcon,
			url: '/facturacion',
			breadcrumbs: false,
		},
		{
			id: 'procedimientos',
			title: 'Procedimientos',
			type: 'collapse',
			icon: AccountTreeIcon,
			children: [
				{
					id: 'procedimientoCantidad',
					title: 'Procedimiento Cantidad',
					type: 'item',
					url: '/procedimientoCantidad',
					breadcrumbs: false,
				},
				{
					id: 'procedimientoPrecio',
					title: 'Procedimiento Precio',
					type: 'item',
					url: '/procedimientoPrecio',
					breadcrumbs: false,
				},
				{
					id: 'procedimientoProducto',
					title: 'Procedimiento Producto',
					type: 'item',
					url: '/procedimientoProducto',
					breadcrumbs: false,
				},
			],
		},
		{
			id: 'otros',
			title: 'Otros',
			type: 'collapse',
			icon: InventoryIcon,
			children: [
				{
					id: 'productoSoftland',
					title: 'Producto Softland',
					type: 'item',
					url: '/productoSoftland',
					breadcrumbs: false,
				},
			],
		},
	],
};

// const utilities: IMenuItem = {
// 	id: 'utilities',
// 	title: 'Utilities',
// 	caption: 'Cosas de utilidad',
// 	type: 'group',
// 	children: [
// 		{
// 			id: 'util-typography',
// 			title: 'Typography',
// 			type: 'item',
// 			url: '/utils/util-typography',
// 			icon: FontDownloadIcon,
// 			breadcrumbs: false,
// 		},
// 		{
// 			id: 'util-color',
// 			title: 'Color',
// 			type: 'item',
// 			url: '/utils/util-color',
// 			icon: PaletteIcon,
// 			breadcrumbs: false,
// 		},
// 		{
// 			id: 'util-shadow',
// 			title: 'Shadow',
// 			type: 'item',
// 			url: '/utils/util-shadow',
// 			icon: DeblurIcon,
// 			breadcrumbs: false,
// 		},
// 		{
// 			id: 'icons',
// 			title: 'Icons',
// 			type: 'collapse',
// 			icon: WindPowerIcon,
// 			children: [
// 				{
// 					id: 'material-icons',
// 					title: 'Material Icons',
// 					type: 'item',
// 					url: '/icons/material-icons',
// 					breadcrumbs: false,
// 				},
// 			],
// 		},
// 	],
// };

const menuItems: IMenuItemsGroup = {
	// items: [dashboard, utilities],
	items: [dashboard],
};

export default menuItems;
