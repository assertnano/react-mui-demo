import Toolbar from '@mui/material/Toolbar';
import MenuItems from './MenuItems';
import Box from '@mui/material/Box/Box';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

// const Sidebar = ({ open }) => {
// 	const theme = useTheme();

// 	return (
// 		<SwipeableDrawer open={open}>
// 			<Toolbar />
// 			<Box sx={{ overflow: 'auto' }}>
// 				<MenuItems />
// 			</Box>
// 		</SwipeableDrawer>
// 	);
// };

const Sidebar = ({ open }: { open: boolean }) => {
	const theme = useTheme();

	return (
		<Drawer
			variant="permanent"
			open={open}
			PaperProps={{
				sx: { backgroundColor: theme.palette.primary.main, color: '#FFFFFF' },
			}}
		>
			<Toolbar />
			{/* //TODO por que no funciona el sx en menuItems? Deberia ir color default? */}
			<Box>
				<MenuItems />
			</Box>
		</Drawer>
	);
};

export default Sidebar;
