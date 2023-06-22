import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Avatar, Stack, styled, useTheme } from '@mui/material';
import styles from './Navbar.module.scss';

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
	height: '60px',
	margin: '0px',
	padding: '0px',
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
						height: '60px',
						width: '50px',
						color: '#ffffff',
						mr: 2,
						borderRadius: 0,
						backgroundColor: theme.palette.primary.main,
						marginLeft: '-24px',
						'&:hover': {
							backgroundColor: theme.palette.primary.dark,
						},
						// padding: '20px',
					}}
					onClick={handleDrawerOpen}
				>
					<MenuIcon />
				</IconButton>
				<Stack direction="row" justifyContent="space-between" width="100%">
					{/* //TODO esta bien asi el logo? */}
					<div className={styles['header-brand']}>
						<img src="/logo/logo-murchison.png" alt="LOGO" />
					</div>
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						sx={{ p: 0.5 }}
					>
						<Avatar
							alt="profile user"
							// src={avatar1}
							sx={{ width: 32, height: 32 }}
						/>
						<Typography variant="subtitle1">Nombre de usuario</Typography>
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
