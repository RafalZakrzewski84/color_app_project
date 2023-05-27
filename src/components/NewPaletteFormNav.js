import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import PaletteMetaForm from './PaletteMetaForm';
import { drawerWidth } from '../styles/NewPaletteFormStyles';
import styles from '../styles/NewPaletteFormNav';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '64px',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function NewPaletteFormNav({
  open,
  onDrawerOpen,
  newPaletteName,
  onChangePaletteName,
  onSavePalette,
  classes,
}) {
  const [openPaletteMetaForm, setOpenPaletteMetaForm] = useState(false);

  const handleHidePaletteMetaForm = () => {
    setOpenPaletteMetaForm(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: 'auto' }}
          >
            Create a palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtons}>
          <Link to="/">
            <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            onClick={() => setOpenPaletteMetaForm(true)}
          >
            SAVE
          </Button>
        </div>
      </AppBar>
      {openPaletteMetaForm && (
        <PaletteMetaForm
          newPaletteName={newPaletteName}
          onChangePaletteName={onChangePaletteName}
          onSavePalette={onSavePalette}
          onHandleHide={handleHidePaletteMetaForm}
        />
      )}
    </div>
  );
}

export default withStyles(styles)(NewPaletteFormNav);
