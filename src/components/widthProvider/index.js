import PropTypes from 'prop-types';
import React, {useEffect, useState, useCallback} from 'react';

const WidthProvider = props => {

  const [width, setWidth] = useState(0);

  let canvasReference;

  const updateWidth = useCallback(() => {
    const width = canvasReference.getBoundingClientRect().width;
    setWidth(width);
  }, [canvasReference]);

  const setReference = canvas => {
    if (!canvas) return null;
    canvasReference = canvas;
    updateWidth();
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  const {children, ...otherProps} = props;
  return (
    <div ref={setReference}>
      {React.Children.map(children, it => {
        return React.cloneElement(it, {...otherProps, width});
      })}
    </div>
  );
};

WidthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WidthProvider;
