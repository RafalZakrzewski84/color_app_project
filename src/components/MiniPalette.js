import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

  const miniColorBlocks = colors.map(color => (
    <div
      key={color.name}
      className={classes.colorBlock}
      style={{
        backgroundColor: color.color,
      }}
    />
  ));

  const handleClick = e => {
    e.stopPropagation();
    onDeletePalette(id);
  };

  return (
    <div className={classes.root} onClick={onHandleClick}>
      <DeleteForeverIcon
        className={classes.delete}
        style={{ transition: 'all 0.3s ease-in-out' }}
        onClick={handleClick}
      />
      <div className={classes.container}>{miniColorBlocks}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
