import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material';
import styles from './Navbar.module.scss';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

interface NavbarProps {
	handleDrawerOpen: () => void;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	color: '#000000',
	backgroundColor: '#ffffff',
	boxShadow: 'none',
}));

const Navbar = ({ handleDrawerOpen }: NavbarProps) => {
	const theme = useTheme();

	return (
		<AppBar position="fixed">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					aria-label="menu"
					sx={{
						color: '#ffffff',
						mr: 2,
						borderRadius: 0,
						backgroundColor: theme.palette.primary.main,
						padding: '1.3rem',
						marginLeft: '-1.5rem',
						'&:hover': {
							backgroundColor: theme.palette.primary.dark,
						},
						// padding: '20px',
					}}
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
