import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMoveImmutable } from 'array-move';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import DraggableColorList from '../DraggableColorList';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MAX_COLOR_NUMBER = 20;

export default function NewPaletteForm({ onSavePalette, history, palettes }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('grey');
  const [newColorName, setNewColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');
  const [colors, setColors] = useState([...palettes[0].colors]);
  const paletteFull = colors.length >= MAX_COLOR_NUMBER;

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()),
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      colors.every(
        ({ color }) => color.toLowerCase() !== currentColor.toLowerCase(),
      ),
    );
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase(),
      ),
    );

    return () => {
      ValidatorForm.removeValidationRule([
        'isColorNameUnique',
        'isColorUnique',
        'isPaletteNameUnique',
      ]);
    };
  }, [colors, palettes, newPaletteName, currentColor]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = color => {
    setCurrentColor(color.hex);
  };

  const handleChangeColorName = event => {
    setNewColorName(event.target.value);
  };

  const handleChangePaletteName = event => {
    setNewPaletteName(event.target.value);
  };

  const handleAddColor = () => {
    const newColor = { color: currentColor, name: newColorName };
    setColors([...colors, newColor]);
    // setNewColorName('');
  };

  const deleteColor = colorName => {
    // console.log('delete', colorName);
    const colorsFiltered = colors.filter(color => color.name !== colorName);
    setColors([...colorsFiltered]);
  };

  const handleSavePalette = () => {
    let id = newPaletteName.toLocaleLowerCase().replace(/ /g, '-');
    const newPalette = { paletteName: newPaletteName, id: id, colors: colors };
    onSavePalette(newPalette);
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors([...arrayMoveImmutable(colors, oldIndex, newIndex)]);
  };

  const handleClearPalette = () => {
    setColors([]);
  };

  const handleRandomColor = () => {
    let randomPalette = Math.floor(Math.random() * palettes.length);
    let randomPaletteColor = Math.floor(
      Math.random() * palettes[randomPalette].colors.length,
    );
    const randomColor = {
      color: palettes[randomPalette].colors[randomPaletteColor].color,
      name: palettes[randomPalette].colors[randomPaletteColor].name,
    };
    setColors([...colors, randomColor]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
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
            Create Palette
          </Typography>
          <ValidatorForm onSubmit={handleSavePalette}>
            <Box sx={{ display: 'flex', ml: 'auto' }}>
              <TextValidator
                value={newPaletteName}
                onChange={handleChangePaletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                  'Enter a palette name',
                  'Enter unique palette name',
                ]}
              />
              <Button type="submit" variant="contained" color="primary">
                Save Palette
              </Button>{' '}
            </Box>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h6" noWrap component="div">
          Design new palette
        </Typography>
        <div>
          <Button
            variant="contained"
            color="error"
            onClick={handleClearPalette}
          >
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={paletteFull}
            onClick={handleRandomColor}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={handleColorChange}
        />
        <ValidatorForm onSubmit={handleAddColor}>
          <TextValidator
            value={newColorName}
            onChange={handleChangeColorName}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name',
              'Enter unique color name',
              'Color already used',
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={paletteFull}
            sx={{ backgroundColor: currentColor }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          colors={colors}
          onDeleteColor={deleteColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </Main>
    </Box>
  );
}
