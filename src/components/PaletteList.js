import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@mui/styles';
import MiniPalette from './MiniPalette';
import styles from '../styles/PaletteListStyles';

export class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`palette/${id}`);
  }
  render() {
    const { palettes, classes, onDeletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.navbar}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.paletteList}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} timeout={300} classNames="fade">
                <MiniPalette
                  onDeletePalette={onDeletePalette}
                  {...palette}
                  onHandleClick={() => this.goToPalette(palette.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
