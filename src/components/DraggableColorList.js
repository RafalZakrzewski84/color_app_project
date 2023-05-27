import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(props => {
  const { colors, deleteColor, onSortEnd } = props;
  return (
    <div style={{ height: '100%' }}>
      {colors.map(({ name, color }, idx) => (
        <DraggableColorBox
          key={name + idx}
          index={idx}
          name={name}
          color={color}
          handleClick={() => {
            console.log(name);
            return deleteColor(name);
          }}
          onSortEnd={onSortEnd}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
