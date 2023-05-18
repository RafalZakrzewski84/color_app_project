import React from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = props => {
  const { colors, paletteName, emoji, handleClick, classes } = props;
  const miniColorBlocks = colors.map(color => (
    <div
      key={color.name}
      className={classes.colorBlock}
      style={{
        backgroundColor: color.color,
      }}
    />
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.container}>{miniColorBlocks}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
