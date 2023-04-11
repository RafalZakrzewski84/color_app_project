import React from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@mui/material/Button';

function ColorPickerForm({
  currentColor,
  newColorName,
  paletteFull,
  onColorChange,
  onAddColor,
  onChangeColorName,
}) {
  return (
    <div>
      <ChromePicker color={currentColor} onChangeComplete={onColorChange} />
      <ValidatorForm onSubmit={onAddColor}>
        <TextValidator
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

export default ColorPickerForm;
