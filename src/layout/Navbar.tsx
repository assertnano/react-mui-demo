import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	// ...(open && {
	// 	marginLeft: drawerWidth,
	// 	width: `calc(100% - ${drawerWidth}px)`,
	// 	transition: theme.transitions.create(['width', 'margin'], {
	// 		easing: theme.transitions.easing.sharp,
	// 		duration: theme.transitions.duration.enteringScreen,
	// 	}),
	// }),
}));

const Navbar = ({ handleDrawerOpen }) => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
					onClick={handleDrawerOpen}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					News
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
