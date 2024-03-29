import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, Stack, styled, useTheme } from '@mui/material';
import Logo from '../../../public/logo/logo-murchison.png';

//TODO como puedo utilizar ruta absoluta
import { MenuIcon, SearchIcon, QuestionMarkIcon, AccountCircleIcon } from '../../assets/icons';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface NavbarProps {
  handleDrawerOpen: () => void;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: '#000000',
  backgroundColor: '#ffffff',
  boxShadow: 'none',
  margin: '0px',
  padding: '0px',
}));

const Navbar = ({ handleDrawerOpen }: NavbarProps) => {
  const theme = useTheme();

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          //TODO no pude agrandar el icono
          edge='start'
          aria-label='menu'
          sx={{
            'height': '64px',
            'width': '50px',
            'color': '#ffffff',
            'mr': 2,
            'borderRadius': 0,
            'backgroundColor': theme.palette.primary.main,
            'marginLeft': '-24px',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Stack direction='row' justifyContent='space-between' width='100%'>
          <Box component='img' src='/logo/logo-murchison.png' alt='LOGO' sx={{ height: '45px' }} />

          <Stack direction='row' spacing={2} alignItems='center' sx={{ p: 0.5 }}>
            <IconButton
              size='small'
              sx={{
                border: '2px solid',
                color: theme.palette.secondary.main,
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size='small'
              sx={{
                border: '2px solid',

                color: theme.palette.secondary.main,
              }}
            >
              <QuestionMarkIcon />
            </IconButton>
            <Avatar
              alt='profile user'
              // src={avatar1}
              sx={{
                backgroundColor: theme.palette.secondary.main,
              }}
            />
            <Typography variant='h1'>Nombre de usuarioSSSS</Typography>
            <Button>Boton SSS</Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
