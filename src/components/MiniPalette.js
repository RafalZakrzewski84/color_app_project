import React, { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { withStyles } from '@mui/styles';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = props => {
  const {
    colors,
    paletteName,
    emoji,
    id,
    onHandleClick,
    classes,
    onDeletePalette,
  } = props;

  const [open, setOpen] = useState(false);

  const miniColorBlocks = colors.map(color => (
    <div
      key={color.name}
      className={classes.colorBlock}
      style={{
        backgroundColor: color.color,
      }}
    />
  ));

  const onHandleOpen = e => {
    e.stopPropagation();
    setOpen(true);
  };

  const onHandleHide = () => {
    setOpen(false);
  };

  const handleClick = e => {
    e.stopPropagation();
    onDeletePalette(id);
  };

  return (
    <>
      <div className={classes.root} onClick={onHandleClick}>
        <DeleteForeverIcon
          className={classes.delete}
          style={{
            transition: 'all 0.3s ease-in-out',
            width: '34px',
            height: '34px',
          }}
          onClick={onHandleOpen}
        />
        <div className={classes.container}>{miniColorBlocks}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
      <Dialog open={open} onClose={onHandleHide}>
        <DialogContent>
          <DialogContentText>Do you want delete palette?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onHandleHide}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleClick}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(MiniPalette);
