import React from 'react';
import './PaletteFooter.css';

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="Palette__footer">
      {paletteName}
      <span className="Palette__emoji">{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
