import * as React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
  openPaletteMetaForm,
  onClosePaletteMetaForm,
  onCancel,
}) {
  return (
    <div>
      <Dialog open={openPaletteMetaForm} onClose={onClosePaletteMetaForm}>
        <DialogTitle>Palette Name</DialogTitle>
        <ValidatorForm onSubmit={onSavePalette}>
          <DialogContent>
            <DialogContentText>
              Please enter name for your brand new color palette. Make sure it
              is unique!
            </DialogContentText>

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
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button
              variant="contained"
              type="submit"
              onClick={onClosePaletteMetaForm}
            >
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
