import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import About from './pages/About';
import Home from './pages/Home';

import { ThemeProvider } from '@mui/material/styles';

// import customTheme from '@assets/theme';
import customTheme from './assets/theme';

function App() {
	return (
		<>
			<ThemeProvider theme={customTheme}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Home />} />

						<Route path="/about" element={<About />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
