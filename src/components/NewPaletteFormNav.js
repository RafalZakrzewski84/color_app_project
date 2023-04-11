import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { drawerWidth } from './NewPaletteForm/NewPaletteForm';

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

const styles = {
  root: {
    display: 'flex',
  },
  navButtons: {},
};

function NewPaletteFormNav({
  open,
  onDrawerOpen,
  newPaletteName,
  onChangePaletteName,
  onSavePalette,
  classes,
}) {
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
          <ValidatorForm onSubmit={onSavePalette}>
            <Box sx={{ display: 'flex', ml: 'auto' }}>
              <TextValidator
                value={newPaletteName}
                onChange={onChangePaletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                  'Enter a palette name',
                  'Enter unique palette name',
                ]}
              />
              <Button type="submit" variant="contained" color="primary">
                Save Palette
              </Button>
            </Box>
          </ValidatorForm>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NewPaletteFormNav);
