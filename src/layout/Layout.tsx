import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box/Box';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';

function Layout() {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Navbar handleDrawerOpen={handleDrawerOpen} />
				{/* SIDEBAR */}
				<Sidebar open={open} />
				{/* MAIN */}
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
						backgroundColor: 'whitesmoke',
						heigth: '100%',
					}}
				>
					<Toolbar />
					<Outlet />
				</Box>
			</Box>
		</>
	);
}

export default Layout;
