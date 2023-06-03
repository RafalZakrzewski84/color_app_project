import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { withStyles } from '@mui/styles';
import styles from '../styles/NavbarStyles';

import 'rc-slider/assets/index.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { colorFormat: 'hex', snackbarOpen: false };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleChange(evt) {
    this.setState({ colorFormat: evt.target.value, snackbarOpen: true });
    this.props.onChangeColorFormat(evt.target.value);
  }

  closeSnackbar() {
    this.setState({ snackbarOpen: false });
  }

  render() {
    const { colorFormat, snackbarOpen } = this.state;
    const { colorLevel, onChangeColorLevel, showLevelSlider, classes } =
      this.props;
    const snackbarAction = (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={this.closeSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    );
    return (
      <div className={classes.navbar}>
        <div className={classes.navbarLogo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showLevelSlider && (
          <div>
            <span className={classes.navbarColorLevel}>
              Level: {colorLevel}
            </span>
            <div className={classes.navbarSlider}>
              <Slider
                defaultValue={colorLevel}
                min={100}
                max={900}
                step={100}
                onAfterChange={onChangeColorLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.navbarSelectContainer}>
          <Select value={colorFormat} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - (255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - (255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          open={snackbarOpen}
          onClick={this.closeSnackbar}
          autoHideDuration={1500}
          onClose={this.closeSnackbar}
          message={<span>Format Change!</span>}
          action={snackbarAction}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
