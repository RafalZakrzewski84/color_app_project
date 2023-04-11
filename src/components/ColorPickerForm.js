import React from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const styles = {
  picker: {
    width: '100% !important',
    marginTop: '2rem',
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem',
  },
  colorNameInput: {
    width: '100%',
    height: '70px',
  },
};

function ColorPickerForm({
  currentColor,
  newColorName,
  paletteFull,
  onColorChange,
  onAddColor,
  onChangeColorName,
  classes,
}) {
  return (
    <div>
      <ChromePicker
        className={classes.picker}
        color={currentColor}
        onChangeComplete={onColorChange}
      />
      <ValidatorForm onSubmit={onAddColor}>
        <TextValidator
          variant="filled"
          margin="normal"
          placeholder="Color name"
          className={classes.colorNameInput}
          value={newColorName}
          onChange={onChangeColorName}
          validators={['isColorNameUnique', 'isColorUnique', 'required']}
          errorMessages={[
            'Enter unique color name',
            'Color already used',
            'Enter a color name',
          ]}
        />
        <Button
          className={classes.addColor}
          type="submit"
          variant="contained"
          disabled={paletteFull}
          sx={{ backgroundColor: currentColor }}
        >
          Add Color
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
