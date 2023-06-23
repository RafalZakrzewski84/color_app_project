import React from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import styles from '../styles/ColorPickerFormStyles';

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
      <ValidatorForm onSubmit={onAddColor} instantValidate={false}>
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
