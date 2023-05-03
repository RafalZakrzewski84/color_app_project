import * as React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PaletteMetaForm({
  newPaletteName,
  onChangePaletteName,
  onSavePalette,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (newPaletteName !== '') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter name for your brand new color palette.
          </DialogContentText>
          <ValidatorForm onSubmit={onSavePalette}>
            <Box sx={{ display: 'flex', ml: 'auto' }}>
              <TextValidator
                autoFocus
                margin="dense"
                id="palette-name"
                type="text"
                fullWidth
                variant="standard"
                value={newPaletteName}
                onChange={onChangePaletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                  'Enter a palette name',
                  'Enter unique palette name',
                ]}
              />
              <DialogActions>
                <Button type="submit" onClick={handleClose}>
                  Save Palette
                </Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </DialogActions>
            </Box>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
